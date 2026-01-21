/**
 * Global Health Bridge Program Schedule Data
 * 
 * This file contains the shared data used across the application:
 * 1. sessions: The main schedule data array
 * 2. SPEAKER_PHOTOS: Mapping of speaker names to photo URLs
 * 3. SPEAKER_INFO: Detailed biography and expertise for speakers
 */

// -----------------------------------------------------------------------------
// 1. Session Data
// -----------------------------------------------------------------------------
// Array of all conference sessions, including dates, times, rooms, and descriptions.
const sessions = [
  // Monday, February 2, 2026 (Day 0)
  {
    id: 'mon-1',
    day: 0,
    date: '2026-02-02',
    start: '08:00',
    end: '08:15',
    type: 'Special',
    title: 'Welcome and Introductions',
    subtitle: 'Lead: Aparna Oltikar',
    moderator: 'Aparna Oltikar',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-2',
    day: 0,
    date: '2026-02-02',
    start: '08:15',
    end: '09:00',
    type: 'Lecture',
    title: 'Introduction to Global Health Bridge Course at Nuvance Health',
    subtitle: 'Format: Lecture',
    moderator: '',
    speakers: ['Bulat Ziganshin'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-3',
    day: 0,
    date: '2026-02-02',
    start: '09:00',
    end: '10:30',
    type: 'Lecture',
    title: 'Global Public Health: Existential Crises and the Role of the US',
    subtitle: 'Format: Lecture',
    description: 'An in-depth look at the major existential crises facing global public health today and the specific role that the United States plays in addressing (or exacerbating) these challenges.',
    questions: [
      'What do you believe is the single biggest threat to global public health today?',
      'How can the US better leverage its resources to support global health initiatives?'
    ],
    resources: [
      { label: 'CDC Global Health Strategy', url: 'https://www.cdc.gov/globalhealth/strategy/index.html' },
      { label: 'WHO Global Health Observatory', url: 'https://www.who.int/data/gho' }
    ],
    moderator: '',
    speakers: ['Kirk Scirto'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-4',
    day: 0,
    date: '2026-02-02',
    start: '10:30',
    end: '10:45',
    type: 'Break',
    title: 'Break',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-5',
    day: 0,
    date: '2026-02-02',
    start: '10:45',
    end: '12:00',
    type: 'Lecture',
    title: 'Infectious Diseases in the Global South',
    subtitle: 'Format: Presentation, case reports',
    moderator: '',
    speakers: ['Steve Scholand'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-6',
    day: 0,
    date: '2026-02-02',
    start: '12:00',
    end: '12:30',
    type: 'Meal',
    title: 'Lunch Break',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-7',
    day: 0,
    date: '2026-02-02',
    start: '12:30',
    end: '13:30',
    type: 'Lecture',
    title: 'Healthcare in Armenia: Global Perspective and Challenges',
    subtitle: 'Format: Lecture',
    moderator: '',
    speakers: ['Gohar Shahsuvaryan'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-8',
    day: 0,
    date: '2026-02-02',
    start: '13:30',
    end: '14:45',
    type: 'Lecture',
    title: 'Local Global Health: Perspectives from the Chiricahua Community Health Centers in Arizona (tentative title)',
    subtitle: 'Format: Lecture',
    moderator: '',
    speakers: ['Jonathan Melk'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-9',
    day: 0,
    date: '2026-02-02',
    start: '14:45',
    end: '15:00',
    type: 'Break',
    title: 'Break',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-10',
    day: 0,
    date: '2026-02-02',
    start: '15:00',
    end: '16:15',
    type: 'Panel',
    title: 'Bridging the Gap in Global Mental Health Education Between High- and Low/Middle-Income Countries',
    subtitle: 'Format: Interactive Panel Discussion',
    moderator: 'Charles Herrick',
    speakers: ['Majd Soudan', 'Sabih Rahman', 'Psychiatry Residents from Makerere University'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-11',
    day: 0,
    date: '2026-02-02',
    start: '16:15',
    end: '16:30',
    type: 'Special',
    title: 'Global Health Bridge Group Photo',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-12',
    day: 0,
    date: '2026-02-02',
    start: '16:30',
    end: '18:00',
    type: 'Networking',
    title: 'Global Health Reception, Networking, and Posters',
    moderator: '',
    speakers: [],
    room: 'Robilotti Conference Room'
  },
  // Tuesday, February 3, 2026
  {
    id: 'tue-1',
    day: 1,
    date: '2026-02-03',
    start: '08:00',
    end: '09:15',
    type: 'Lecture',
    title: 'Decolonizing Global Health',
    subtitle: 'Format: Lecture',
    moderator: '',
    speakers: ['Kirk Scirto'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-2',
    day: 1,
    date: '2026-02-03',
    start: '09:15',
    end: '09:30',
    type: 'Break',
    title: 'Break',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-3',
    day: 1,
    date: '2026-02-03',
    start: '09:30',
    end: '11:00',
    type: 'Panel',
    title: 'Global Health As a Career: Opportunities and Challenges',
    subtitle: 'Format: Interactive Panel Discussion',
    moderator: 'Steve Scholand',
    speakers: ['Gohar Shahsuvaryan', 'Jonathan Melk', 'Jasper Tolarba', 'Kirk Scirto', 'Fiona Makoni'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-4',
    day: 1,
    date: '2026-02-03',
    start: '11:00',
    end: '12:00',
    type: 'Lecture',
    title: 'Healthcare in the Philippines: Global Perspective and Challenges',
    subtitle: 'Format: Lecture',
    moderator: '',
    speakers: ['Jasper Tolarba'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-5',
    day: 1,
    date: '2026-02-03',
    start: '12:00',
    end: '13:30',
    type: 'Meal',
    title: 'Lunch and headshots/photos for residency applications',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-6',
    day: 1,
    date: '2026-02-03',
    start: '13:30',
    end: '14:30',
    type: 'Lecture',
    title: 'Healthcare in Zimbabwe: Global Perspective and Challenges',
    subtitle: 'Format: Virtual Lecture',
    moderator: '',
    speakers: ['Fiona Makoni'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-7',
    day: 1,
    date: '2026-02-03',
    start: '14:30',
    end: '15:30',
    type: 'Lecture',
    title: 'Malaria in Resource-Limited Environments: Diagnosis, Treatment, and Prevention (tentative title)',
    subtitle: 'Format: Presentation, case reports',
    moderator: '',
    speakers: ['Steve Scholand'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-8',
    day: 1,
    date: '2026-02-03',
    start: '15:30',
    end: '15:45',
    type: 'Break',
    title: 'Break',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-9',
    day: 1,
    date: '2026-02-03',
    start: '15:45',
    end: '17:15',
    type: 'Lecture',
    title: 'The Role of Public Health in Addressing Armed Conflict',
    subtitle: 'Format: Lecture',
    moderator: '',
    speakers: ['Kaveh Khoshnood'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-10',
    day: 1,
    date: '2026-02-03',
    start: '17:15',
    end: '17:30',
    type: 'Special',
    title: 'Adjourn Global Health Bridge',
    moderator: '',
    speakers: [],
    room: 'Creasy Auditorium'
  }
];

// -----------------------------------------------------------------------------
// 2. Speaker Photos
// -----------------------------------------------------------------------------
// Mapping of speaker names to their photo URLs.
// Format: "Speaker Name": "https://url-to-photo.jpg"
const SPEAKER_PHOTOS = {
  "Bulat Ziganshin": "https://static.wixstatic.com/media/a339cb_df74ae8b7be84e569791bdf13113e1cc~mv2.jpg",
  "Aparna Oltikar": "https://static.wixstatic.com/media/a339cb_44105c79e3a641e7941afb34c0a1e48f~mv2.png",
  // Add more speaker photos as needed
};

// -----------------------------------------------------------------------------
// 3. Speaker Information
// -----------------------------------------------------------------------------
// Detailed information including titles, bios, and areas of expertise.
const SPEAKER_INFO = {
  "Bulat Ziganshin": {
    title: "Global Health Conference Organizer & Moderator",
    biography: "Bulat Ziganshin is a prominent figure in global health education and conference organization. With extensive experience in facilitating international collaborations, Bulat has been instrumental in bringing together diverse voices from around the world to advance global health initiatives. His work focuses on creating inclusive platforms for knowledge exchange, fostering partnerships between institutions, and developing innovative formats for global health conferences that maximize engagement and impact.",
    expertise: [
      "Global Health Conference Organization",
      "International Partnership Development",
      "Educational Program Design",
      "Cross-Cultural Collaboration"
    ]
  },
  "Aparna Oltikar": {
    title: "Conference Coordinator & Moderator",
    biography: "Aparna Oltikar is dedicated to advancing global health education through innovative conference formats and collaborative partnerships.",
    expertise: [
      "Conference Coordination",
      "Global Health Education",
      "Partnership Development"
    ]
  }
  // Add more speakers as needed
};

// -----------------------------------------------------------------------------
// 4. Helper Functions & Constants
// -----------------------------------------------------------------------------
const LABEL_PREFIX = {
  'Plenary': 'PL',
  'Breakout': 'BR',
  'Meal': 'ME',
  'Special': 'SP',
  'Workshop': 'WS',
  'Networking': 'NW',
  'Poster': 'PO',
  'Break': 'BK',
  'Lecture': 'LC',
  'Panel': 'PN'
};

function generateSubcodes() {
  const out = {};
  const groups = {};
  sessions.forEach(s => {
    const type = s.type || 'Unknown';
    if (!groups[type]) groups[type] = [];
    groups[type].push(s);
  });

  for (const [type, arr] of Object.entries(groups)) {
    arr.sort((a, b) => {
      const dateCompare = a.date.localeCompare(b.date);
      if (dateCompare !== 0) return dateCompare;
      const timeCompare = a.start.localeCompare(b.start);
      if (timeCompare !== 0) return timeCompare;
      return a.title.localeCompare(b.title);
    });

    const pref = LABEL_PREFIX[type] || (type || 'XX').split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2) || 'XX';
    arr.forEach((s, i) => {
      out[s.id] = `${pref}${String(i + 1).padStart(2, '0')}`;
    });
  }
  return out;
}

const SUBCODES = generateSubcodes();

function formatTime(time, includeEST = false) {
  const [hours, minutes] = time.split(':');
  const h = parseInt(hours);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  const formatted = `${h12}:${minutes} ${ampm}`;
  return includeEST ? `${formatted} (EST)` : formatted;
}

function formatFullDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function getInitials(name) {
  return name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

// -----------------------------------------------------------------------------
// 5. Shared UI Helpers
// -----------------------------------------------------------------------------

function getSpeakerUrl(name) {
  return `speaker.html?name=${encodeURIComponent(name)}`;
}

function avatarHTML(name) {
  const url = SPEAKER_PHOTOS[name];
  const hasBioInfo = SPEAKER_INFO[name] ? true : false;
  // Always create a link to speaker page (even if no bio info yet)
  const speakerUrl = getSpeakerUrl(name);

  let avatarContent;
  if (url) {
    avatarContent = `<img loading="lazy" referrerpolicy="no-referrer" alt="${name}" src="${url}" onerror="this.parentElement.setAttribute('data-fallback', ''); this.remove();">`;
  } else {
    avatarContent = getInitials(name);
  }

  return `<a href="${speakerUrl}" class="avatar" aria-label="${name}" title="${name}" ${!url ? 'data-fallback' : ''}>${avatarContent}</a>`;
}
