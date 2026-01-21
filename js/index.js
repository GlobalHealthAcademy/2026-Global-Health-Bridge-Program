// -----------------------------------------------------------------------------
// Global State & Initialization
// -----------------------------------------------------------------------------

// State variables
let currentDay = 'all';
let searchTerm = '';
let searchMode = 'all'; // 'all', 'sessions', or 'people'
let typeFilter = '';
let roomFilter = '';
let speakerFilter = '';

// DOM Elements
const dayTabs = document.getElementById('dayTabs');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const autocomplete = document.getElementById('autocomplete');
const typeFilterEl = document.getElementById('typeFilter');
const roomFilterEl = document.getElementById('roomFilter');
const speakerFilterEl = document.getElementById('speakerFilter');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');
const listView = document.getElementById('listView');
const resultsCount = document.getElementById('resultsCount');
const searchModeButtons = document.querySelectorAll('.search-mode-btn');

// Autocomplete state
let autocompleteItems = [];
let selectedAutocompleteIndex = -1;

// -----------------------------------------------------------------------------
// Autocomplete Functions
// -----------------------------------------------------------------------------

function updateAutocomplete(query) {
    if (!query || query.length < 2) {
        autocomplete.classList.remove('show');
        autocompleteItems = [];
        return;
    }

    const queryLower = query.toLowerCase();
    const matches = [];

    sessions.forEach(session => {
        let searchFields = [];

        if (searchMode === 'sessions') {
            searchFields = [session.title, session.subtitle || ''];
        } else if (searchMode === 'people') {
            searchFields = [
                session.moderator || '',
                ...session.speakers
            ];
        } else {
            searchFields = [
                session.title,
                session.subtitle || '',
                session.moderator || '',
                ...session.speakers
            ];
        }

        const searchText = searchFields.join(' ').toLowerCase();
        if (searchText.includes(queryLower)) {
            // Calculate relevance score
            let score = 0;
            const titleLower = session.title.toLowerCase();

            if (titleLower.includes(queryLower)) {
                score += 10;
                if (titleLower.startsWith(queryLower)) {
                    score += 5;
                }
            }
            if (session.subtitle && session.subtitle.toLowerCase().includes(queryLower)) {
                score += 3;
            }

            matches.push({ session, score });
        }
    });

    // Sort by score and limit to 8 results
    matches.sort((a, b) => b.score - a.score);
    autocompleteItems = matches.slice(0, 8).map(m => m.session);

    if (autocompleteItems.length > 0) {
        renderAutocomplete();
        autocomplete.classList.add('show');
    } else {
        autocomplete.classList.remove('show');
    }
}

function renderAutocomplete() {
    autocomplete.innerHTML = '';
    selectedAutocompleteIndex = -1;

    autocompleteItems.forEach((session, index) => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.dataset.index = index;

        const typeClass = session.type.toLowerCase().replace(/\s+/g, '-');
        const timeStr = `${formatTime(session.start)} – ${formatTime(session.end)}`;

        item.innerHTML = `
      <div class="autocomplete-item-title">${highlight(session.title, searchInput.value)}</div>
      <div class="autocomplete-item-meta">
        <span class="autocomplete-item-type ${typeClass}">${session.type}</span>
        <span>${timeStr}</span>
        <span>•</span>
        <span>Day ${session.day + 1}</span>
      </div>
    `;

        item.addEventListener('click', () => {
            selectAutocompleteItem(session);
        });

        item.addEventListener('mouseenter', () => {
            selectedAutocompleteIndex = index;
            updateAutocompleteSelection();
        });

        autocomplete.appendChild(item);
    });
}

function updateAutocompleteSelection() {
    const items = autocomplete.querySelectorAll('.autocomplete-item');
    items.forEach((item, index) => {
        if (index === selectedAutocompleteIndex) {
            item.classList.add('selected');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('selected');
        }
    });
}

function selectAutocompleteItem(session) {
    searchInput.value = session.title;
    searchTerm = session.title.toLowerCase();
    clearSearchBtn.style.display = 'block';
    autocomplete.classList.remove('show');

    // Switch to the correct day
    currentDay = session.day.toString();
    dayTabs.querySelectorAll('.day-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.day === currentDay);
    });

    render();

    // Scroll to the session card
    setTimeout(() => {
        const card = listView.querySelector(`[data-session-id="${session.id}"]`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('flash');
            setTimeout(() => card.classList.remove('flash'), 2000);
        }
    }, 100);
}

function closeAutocomplete() {
    autocomplete.classList.remove('show');
    selectedAutocompleteIndex = -1;
}

// -----------------------------------------------------------------------------
// Filtering & Search
// -----------------------------------------------------------------------------

function getFilteredSessions() {
    let filtered = sessions.filter(session => {
        // Day filter
        if (currentDay !== 'all' && session.day !== parseInt(currentDay)) {
            return false;
        }

        // Type filter
        if (typeFilter && session.type !== typeFilter) {
            return false;
        }

        // Room filter
        if (roomFilter && session.room !== roomFilter) {
            return false;
        }

        // Speaker filter
        if (speakerFilter) {
            const moderatorNames = session.moderator
                ? session.moderator.split(',').map(m => m.trim())
                : [];
            const speakerNames = session.speakers || [];
            const allPeople = [...moderatorNames, ...speakerNames];
            if (!allPeople.includes(speakerFilter)) {
                return false;
            }
        }

        // Search filter
        if (searchTerm) {
            let searchable = [];

            if (searchMode === 'sessions') {
                // Only search in session titles and subtitles
                searchable = [
                    session.title,
                    session.subtitle || ''
                ];
            } else if (searchMode === 'people') {
                // Only search in moderators and speakers
                searchable = [
                    session.moderator || '',
                    ...session.speakers
                ];
            } else {
                // Search in all fields (default)
                searchable = [
                    session.title,
                    session.subtitle || '',
                    session.moderator || '',
                    session.room || '',
                    ...session.speakers
                ];
            }

            const searchableText = searchable.join(' ').toLowerCase();
            if (!searchableText.includes(searchTerm)) {
                return false;
            }
        }

        return true;
    });

    // Sort by relevance if searching
    if (searchTerm) {
        filtered = filtered.map(session => {
            let score = 0;

            if (searchMode === 'sessions') {
                const titleLower = session.title.toLowerCase();
                const subtitleLower = (session.subtitle || '').toLowerCase();

                if (titleLower.includes(searchTerm)) {
                    score += 10;
                    if (titleLower === searchTerm || titleLower.startsWith(searchTerm)) {
                        score += 5;
                    }
                }
                if (subtitleLower.includes(searchTerm)) {
                    score += 3;
                }
            } else if (searchMode === 'people') {
                const moderatorLower = (session.moderator || '').toLowerCase();
                const speakersLower = session.speakers.join(' ').toLowerCase();

                if (moderatorLower.includes(searchTerm)) {
                    score += 10;
                }
                if (speakersLower.includes(searchTerm)) {
                    score += 5;
                }
            } else {
                const titleLower = session.title.toLowerCase();
                const subtitleLower = (session.subtitle || '').toLowerCase();
                const moderatorLower = (session.moderator || '').toLowerCase();
                const roomLower = (session.room || '').toLowerCase();
                const speakersLower = session.speakers.join(' ').toLowerCase();

                if (titleLower.includes(searchTerm)) {
                    score += 10;
                    if (titleLower === searchTerm || titleLower.startsWith(searchTerm)) {
                        score += 5;
                    }
                }
                if (subtitleLower.includes(searchTerm)) {
                    score += 3;
                }
                if (moderatorLower.includes(searchTerm) || roomLower.includes(searchTerm) || speakersLower.includes(searchTerm)) {
                    score += 1;
                }
            }

            return { session, score };
        }).sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            const dateCompare = a.session.date.localeCompare(b.session.date);
            if (dateCompare !== 0) return dateCompare;
            return a.session.start.localeCompare(b.session.start);
        }).map(item => item.session);
    }

    return filtered;
}

// -----------------------------------------------------------------------------
// Live Session Logic
// -----------------------------------------------------------------------------

// Dev mode - for showcasing live feature
let devModeActive = false;
let devLiveSessionId = 'mon-1'; // Change this to any session ID you want to demo

function isSessionLive(session) {
    // Dev mode override
    if (devModeActive && session.id === devLiveSessionId) {
        return true;
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Parse session date (YYYY-MM-DD)
    const [year, month, day] = session.date.split('-').map(Number);
    const sessionDate = new Date(year, month - 1, day);

    if (sessionDate.getTime() !== today.getTime()) {
        return false;
    }

    const [startHours, startMinutes] = session.start.split(':').map(Number);
    const [endHours, endMinutes] = session.end.split(':').map(Number);

    const sessionStart = new Date(year, month - 1, day, startHours, startMinutes);
    const sessionEnd = new Date(year, month - 1, day, endHours, endMinutes);

    return now >= sessionStart && now <= sessionEnd;
}

function updateLiveStatus() {
    const allCards = document.querySelectorAll('.session-card');
    allCards.forEach(card => {
        const sessionId = card.dataset.sessionId;
        const session = sessions.find(s => s.id === sessionId);

        if (session) {
            const isLive = isSessionLive(session);
            const hasLiveBadge = card.querySelector('.live-badge');

            if (isLive) {
                card.classList.add('live');
                if (!hasLiveBadge) {
                    const sessionBadge = card.querySelector('.session-badge');
                    if (sessionBadge) {
                        const liveBadge = document.createElement('span');
                        liveBadge.className = 'live-badge';
                        liveBadge.textContent = 'Live';
                        sessionBadge.appendChild(liveBadge);
                    }
                }
            } else {
                card.classList.remove('live');
                if (hasLiveBadge) {
                    hasLiveBadge.remove();
                }
            }
        }
    });
}

// -----------------------------------------------------------------------------
// Helper Functions
// -----------------------------------------------------------------------------

function highlight(text, query = null) {
    const searchQuery = query || searchTerm;
    if (!searchQuery) return text;
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// -----------------------------------------------------------------------------
// Card Creation
// -----------------------------------------------------------------------------

function createSubSessionCard(subSession, index, total, parentSession) {
    const card = document.createElement('a');
    card.className = 'sub-session-card';
    card.dataset.subSessionId = subSession.id;
    card.href = `session.html?id=${subSession.id}`;
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.style.display = 'block';

    let timeHTML = '';
    if (parentSession.start && subSession.duration) {
        const durationMatch = subSession.duration.match(/(\d+)/);
        if (durationMatch) {
            const minutes = parseInt(durationMatch[1]);
            const [parentHours, parentMinutes] = parentSession.start.split(':').map(Number);
            let cumulativeMinutes = index * minutes;
            let subStartHours = parentHours + Math.floor((parentMinutes + cumulativeMinutes) / 60);
            let subStartMinutes = (parentMinutes + cumulativeMinutes) % 60;
            let subEndMinutes = subStartMinutes + minutes;
            let subEndHours = subStartHours + Math.floor(subEndMinutes / 60);
            subEndMinutes = subEndMinutes % 60;

            const formatSubTime = (hours, mins) => {
                const ampm = hours >= 12 ? 'PM' : 'AM';
                const h12 = hours % 12 || 12;
                return `${h12}:${String(mins).padStart(2, '0')} ${ampm}`;
            };

            timeHTML = `<div class="sub-session-time">${formatSubTime(subStartHours, subStartMinutes)} – ${formatSubTime(subEndHours, subEndMinutes)}</div>`;
        }
    } else if (subSession.start && subSession.end) {
        timeHTML = `<div class="sub-session-time">${formatTime(subSession.start)} – ${formatTime(subSession.end)}</div>`;
    }

    const presenterLink = SPEAKER_INFO[subSession.presenter]
        ? `<a href="speaker.html?name=${encodeURIComponent(subSession.presenter)}">${subSession.presenter}</a>`
        : subSession.presenter;

    const presenterAvatar = avatarHTML(subSession.presenter);
    const avatarsHTML = `<div class="avatars" aria-label="Presenter">${presenterAvatar}</div>`;

    card.innerHTML = `
    <div class="sub-session-number">${index + 1}</div>
    <div class="sub-session-title">${subSession.title}</div>
    <div class="sub-session-presenter">
      <strong>Presenter:</strong> ${presenterLink}
    </div>
    ${avatarsHTML}
    ${timeHTML}
    ${subSession.description ? `<div class="sub-session-details">${subSession.description}</div>` : ''}
  `;

    card.addEventListener('click', (e) => {
        if (e.target.closest('a.avatar') || e.target.closest('.avatar a')) {
            e.stopPropagation();
            return;
        }
        e.stopPropagation();
        if (subSession.description) {
            e.preventDefault();
            card.classList.toggle('expanded');
        }
    });

    return card;
}

function createSessionCard(session) {
    const wrapper = document.createElement('div');
    wrapper.className = 'session-card-wrapper';

    const card = document.createElement('a');
    card.className = 'session-card';
    card.dataset.sessionId = session.id;
    card.href = `session.html?id=${session.id}`;
    card.style.textDecoration = 'none';
    card.style.color = 'inherit';
    card.style.display = 'block';

    const typeClass = session.type.toLowerCase().replace(/\s+/g, '-');
    const speakersText = session.speakers.length > 0
        ? session.speakers.join(', ')
        : (session.moderator || '—');
    const subcode = SUBCODES[session.id] ? `<span class="subcode">${SUBCODES[session.id]}</span>` : '';

    const isLive = isSessionLive(session);
    if (isLive) {
        card.classList.add('live');
    }

    const people = [
        ...(session.moderator ? session.moderator.split(',').map(x => x.trim()).filter(x => x && x !== '—') : []),
        ...(session.speakers || []).filter(x => x && x !== '—')
    ].filter((v, i, a) => a.indexOf(v) === i);

    const avatarsHTML = people.length > 0
        ? `<div class="avatars" aria-label="Speakers and Moderators">${people.map(avatarHTML).join('')}</div>`
        : '';

    const subSessionsButtonHTML = (session.subSessions && session.subSessions.length > 0)
        ? `<button type="button" class="sub-sessions-button" data-session-id="${session.id}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        <span>View Plenary Presentations (${session.subSessions.length})</span>
      </button>`
        : '';

    const liveBadgeHTML = isLive ? '<span class="live-badge">Live</span>' : '';

    card.innerHTML = `
    <div class="session-header">
      <span class="session-badge ${typeClass}">${session.type}${subcode}${liveBadgeHTML}</span>
      <span class="session-time">${formatTime(session.start)} – ${formatTime(session.end)}</span>
    </div>
    <div class="session-title">${highlight(session.title)}</div>
    ${session.subtitle ? `<div class="session-details" style="font-style: italic; margin-bottom: 8px;">${highlight(session.subtitle).replace(/\n/g, '<br>')}</div>` : ''}
    ${session.moderator ? `<div class="session-details"><strong>Moderator:</strong> ${highlight(session.moderator)}</div>` : ''}
    ${session.speakers.length > 0 ? `<div class="session-details"><strong>Speakers:</strong> ${highlight(speakersText)}</div>` : ''}
    ${avatarsHTML}
    ${session.room ? `<span class="session-room">📍 ${highlight(session.room)}</span>` : ''}
    ${session.note ? `<div class="session-details" style="margin-top: 8px; font-size: 0.85rem; color: var(--text-light);"><em>${session.note}</em></div>` : ''}
    ${subSessionsButtonHTML}
  `;

    wrapper.appendChild(card);

    if (session.subSessions && session.subSessions.length > 0) {
        const subSessionsContainer = document.createElement('div');
        subSessionsContainer.className = 'sub-sessions-container collapsed';
        subSessionsContainer.dataset.sessionId = session.id;

        const subSessionsList = document.createElement('div');
        subSessionsList.className = 'sub-sessions-list';

        session.subSessions.forEach((subSession, index) => {
            subSessionsList.appendChild(createSubSessionCard(subSession, index, session.subSessions.length, session));
        });

        subSessionsContainer.appendChild(subSessionsList);
        wrapper.appendChild(subSessionsContainer);

        const button = card.querySelector('.sub-sessions-button');
        if (button) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                subSessionsContainer.classList.toggle('collapsed');
                const isCollapsed = subSessionsContainer.classList.contains('collapsed');
                const svg = button.querySelector('svg');
                if (svg) {
                    svg.style.transform = isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
                }
            });
        }
    }

    return wrapper;
}

// -----------------------------------------------------------------------------
// Main Render Loop
// -----------------------------------------------------------------------------

function renderListView(filteredSessions) {
    listView.innerHTML = '';

    if (filteredSessions.length === 0) {
        listView.innerHTML = `
      <div class="empty-state" style="grid-column: 1/-1;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <h3>No sessions found</h3>
        <p>Try adjusting your filters or search terms</p>
      </div>
    `;
        return;
    }

    const dateGroups = {};
    filteredSessions.forEach(session => {
        if (!session.date) return;
        if (!dateGroups[session.date]) {
            dateGroups[session.date] = {};
        }
        const timeKey = `${session.start}-${session.end}`;
        if (!dateGroups[session.date][timeKey]) {
            dateGroups[session.date][timeKey] = {
                start: session.start,
                end: session.end,
                sessions: []
            };
        }
        dateGroups[session.date][timeKey].sessions.push(session);
    });

    const sortedDates = Object.keys(dateGroups).sort();

    sortedDates.forEach(date => {
        const dateSection = document.createElement('div');
        dateSection.className = 'date-section';
        const dateHeader = document.createElement('div');
        dateHeader.className = 'date-header';
        dateHeader.textContent = formatFullDate(date);
        dateSection.appendChild(dateHeader);

        const timeSlots = Object.keys(dateGroups[date]).sort((a, b) => {
            return dateGroups[date][a].start.localeCompare(dateGroups[date][b].start);
        });

        timeSlots.forEach(timeSlot => {
            const timeSlotData = dateGroups[date][timeSlot];
            const timeHeader = document.createElement('div');
            timeHeader.className = 'time-slot-header';
            timeHeader.textContent = `${formatTime(timeSlotData.start)} - ${formatTime(timeSlotData.end)} (EST)`;
            dateSection.appendChild(timeHeader);

            const sessionsContainer = document.createElement('div');
            sessionsContainer.className = 'time-slot-sessions';

            const sessions = timeSlotData.sessions.sort((a, b) => {
                if (a.room && b.room) {
                    return a.room.localeCompare(b.room);
                }
                return a.title.localeCompare(b.title);
            });

            sessions.forEach(session => {
                sessionsContainer.appendChild(createSessionCard(session));
            });

            dateSection.appendChild(sessionsContainer);
        });

        listView.appendChild(dateSection);
    });
}

function render() {
    const filteredSessions = getFilteredSessions();

    const total = currentDay === 'all' ? sessions.length : sessions.filter(s => s.day === parseInt(currentDay)).length;
    resultsCount.innerHTML = `Showing <strong>${filteredSessions.length}</strong> of ${total} sessions`;

    renderListView(filteredSessions);
    setTimeout(updateLiveStatus, 100);
}

// -----------------------------------------------------------------------------
// App Start
// -----------------------------------------------------------------------------

function init() {
    // Populate filters
    const types = [...new Set(sessions.map(s => s.type))].sort();
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilterEl.appendChild(option);
    });

    const rooms = [...new Set(sessions.map(s => s.room).filter(Boolean))].sort();
    rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room;
        option.textContent = room;
        roomFilterEl.appendChild(option);
    });

    const allSpeakers = new Set();
    sessions.forEach(session => {
        if (session.moderator) {
            session.moderator.split(',').forEach(m => {
                const name = m.trim();
                if (name && name !== '—') allSpeakers.add(name);
            });
        }
        if (session.speakers) {
            session.speakers.forEach(speaker => {
                if (speaker && speaker !== '—') allSpeakers.add(speaker);
            });
        }
    });
    const speakers = Array.from(allSpeakers).sort();
    speakers.forEach(speaker => {
        const option = document.createElement('option');
        option.value = speaker;
        option.textContent = speaker;
        speakerFilterEl.appendChild(option);
    });

    // Event listeners
    dayTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('day-tab')) {
            dayTabs.querySelectorAll('.day-tab').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentDay = e.target.dataset.day;
            render();
        }
    });

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        searchTerm = value.toLowerCase();
        clearSearchBtn.style.display = value ? 'block' : 'none';
        updateAutocomplete(value);
        render();
    });

    searchInput.addEventListener('keydown', (e) => {
        if (!autocomplete.classList.contains('show')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedAutocompleteIndex = Math.min(selectedAutocompleteIndex + 1, autocompleteItems.length - 1);
            updateAutocompleteSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedAutocompleteIndex = Math.max(selectedAutocompleteIndex - 1, -1);
            updateAutocompleteSelection();
        } else if (e.key === 'Enter' && selectedAutocompleteIndex >= 0) {
            e.preventDefault();
            selectAutocompleteItem(autocompleteItems[selectedAutocompleteIndex]);
        } else if (e.key === 'Escape') {
            closeAutocomplete();
        }
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length >= 2) {
            updateAutocomplete(searchInput.value);
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !autocomplete.contains(e.target)) {
            closeAutocomplete();
        }
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchTerm = '';
        clearSearchBtn.style.display = 'none';
        closeAutocomplete();
        render();
        searchInput.focus();
    });

    searchModeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            searchModeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            searchMode = btn.dataset.mode;
            render();
        });
    });

    typeFilterEl.addEventListener('change', (e) => {
        typeFilter = e.target.value;
        render();
    });

    roomFilterEl.addEventListener('change', (e) => {
        roomFilter = e.target.value;
        render();
    });

    speakerFilterEl.addEventListener('change', (e) => {
        speakerFilter = e.target.value;
        render();
    });

    clearFiltersBtn.addEventListener('click', () => {
        typeFilter = '';
        roomFilter = '';
        speakerFilter = '';
        typeFilterEl.value = '';
        roomFilterEl.value = '';
        speakerFilterEl.value = '';
        render();
    });

    render();
}

// Initializes the application
init();

// Update live status every minute
setInterval(updateLiveStatus, 60000);
