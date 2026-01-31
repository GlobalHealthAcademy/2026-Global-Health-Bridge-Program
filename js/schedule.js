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
// Array of all conference sessions.
// 
// --- SESSION FORMAT EXAMPLE ---
// {
//   id: 'mon-3',                  // Unique ID for the session (required)
//   day: 0,                       // Day index (0=Day 1, 1=Day 2, etc.)
//   date: '2026-02-02',           // YYYY-MM-DD format
//   start: '09:00',               // 24-hour HH:MM format
//   end: '10:30',                 // 24-hour HH:MM format
//   type: 'Lecture',              // Type for styling (Lecture, Panel, Workshop, Special, Break, Meal, Networking)
//   title: 'Session Title',       // Main title
//   subtitle: 'Format: Lecture',  // Subtitle (optional)
//   description: 'Description...', // Markdown/HTML description
//   objectives: [                 // Array of learning objectives (shown above questions)
//     'Objective 1',
//     'Objective 2'
//   ],
//   questions: [                  // Array of questions for discussion
//     'Question 1?',
//     'Question 2?'
//   ],
//   resources: [                  // Array of related resources
//     { label: 'Label', url: 'https://...' }
//   ],
//   moderator: 'Name',            // String (comma separated for multiple)
//   speakers: ['Name 1', 'Name 2'], // Array of speaker names
//   room: 'Room Name',            // Location
//   note: 'Note text...',         // Additional note (italicized at bottom)
//   
//   // SUB-SESSION FORMAT EXAMPLE (Optional)
//   // If present, these will be listed at the bottom of the session page
//   subSessions: [
//     {
//       id: 'sub-1',              // Unique ID for sub-session detail page
//       title: 'Sub Title',       // Title of the sub-presentation
//       presenter: 'Name',        // Main presenter
//       duration: '15 minutes',   // Duration (used for auto-calculating time)
//       description: '...',       // Description for the sub-session page
//       objectives: ['...'],      // Objectives for the sub-session page
//       // start: '09:00',        // Optional: Manual start time
//       // end: '09:15'           // Optional: Manual end time
//     }
//   ]
// }
// ------------------------------

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
    moderator: '',
    speakers: ['Aparna Oltikar'],
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
    objectives: [
      'Define global health, identify its key principles, and understand the scope of global health, including the interconnectedness of health issues across borders.',
      'Examine the major facets of global health and dive deeper in understanding the role of global health education in empowering the next generation of global health leaders worldwide and advancing the cause of health equity.',
      'Reflect upon the potentially negative impact that the “colonial mindset” has had on the wellbeing of institutions, patients, and communities worldwide.',
      'Understand the structure of the Global Health Program and Global Health Academy at Nuvance Health and recognize the opportunities that are available for participation in global health activities for trainees, faculty and staff.'
    ],
    questions: [
      'How does global health differ from public health?',
      'In the context of global health, what does decolonization primarily aim to address?',
      'What is a key objective of global health education?'
    ],
    resources: [
      { label: '1. Koplan JP, Bond TC, Merson MH, Reddy KS, Rodriguez MH, Sewankambo NK, Wasserheit JN; Consortium of Universities for Global Health Executive Board. Towards a common definition of global health. Lancet. 2009 Jun 6;373(9679):1993-5. doi: 10.1016/S0140-6736(09)60332-9. Epub 2009 Jun 1. PMID: 19493564; PMCID: PMC9905260.', url: 'https://doi.org/10.1016/S0140-6736(09)60332-9' },
      { label: '2. Hussain M, Sadigh M, Sadigh M, Rastegar A, Sewankambo N. Colonization and decolonization of global health: which way forward? Glob Health Action. 2023 Dec 31;16(1):2186575. doi: 10.1080/16549716.2023.2186575. PMID: 36940174; PMCID: PMC10035955.', url: 'https://doi.org/10.1080/16549716.2023.2186575' },
      { label: '3. Kulesa J, Brantuo NA. Barriers to decolonising educational partnerships in global health. BMJ Glob Health. 2021 Nov;6(11):e006964. doi: 10.1136/bmjgh-2021-006964. PMID: 34789513; PMCID: PMC8601064.', url: 'https://doi.org/10.1136/bmjgh-2021-006964' },
      { label: '4. Salm M, Ali M, Minihane M, Conrad P. Defining global health: findings from a systematic review and thematic analysis of the literature. BMJ Glob Health. 2021 Jun;6(6):e005292. doi: 10.1136/bmjgh-2021-005292. PMID: 34083243; PMCID: PMC8183196.', url: 'https://doi.org/10.1136/bmjgh-2021-005292' }
    ],
    moderator: '',
    speakers: ['Bulat A. Ziganshin'],
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
    objectives: [
      'Identify four major existential crises of global public health',
      'Describe the role of the US in these crises thus far',
      'Explain at least three proposals for the US to have a major role in addressing these crises'
    ],
    questions: [
      'How do these four existential crises feed into each other?',
      'Which barriers have prevented effective US action on these crises?',
      'How are deep, structural solutions different from those implemented thus far?',
      'Should crises be addressed one at a time and in any particular order?'
    ],
    resources: [
      { label: '1. Chancel, L., Gómez-Carrera, R., Moshrif, R., & Piketty, T. (2026). World inequality report 2026. World Inequality Lab. Retrieved from https://wir2026.wid.world', url: 'https://wir2026.wid.world' },
      { label: '2. Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services. (2019). Summary for policymakers of the global assessment report on biodiversity and ecosystem services of the Intergovernmental Science-Policy Platform on Biodiversity and Ecosystem Services. S. Díaz, J. Settele, E. S. Brondízio, H. T. Ngo, M. Guèze, J. Agard, … C. N. Zayas (Eds.). Bonn, Germany: IPBES secretariat. Retrieved from https://doi.org/10.5281/zenodo.3553579', url: 'https://doi.org/10.5281/zenodo.3553579' },
      { label: '3. Romanello, M., Walawender, M., Hsu, S., Moskeland, A., Palmeiro-Silva, Y., Scamman, D., Smallcombe, J. W., … Costello, A. (2025, October 28). The 2025 report of the Lancet Countdown on health and climate change: Climate change action offers a lifeline. Lancet Countdown, 406(10521), 2804–2857.', url: 'https://www.thelancet.com/countdown-health-climate' }
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
    objectives: [
      'Describe the major infectious diseases that disproportionately affect populations in the Global South, including their epidemiology and drivers of transmission.',
      'Explain how social, economic, political, and environmental determinants shape infectious disease burden and outcomes in low- and middle-income countries (LMICs).',
      'Compare infectious disease priorities and challenges in the Global South versus high-income countries, including access to diagnostics, treatment, and prevention.',
      'Recognize the ethical and equity considerations involved in global infectious disease control, including resource allocation, research priorities, and global partnerships.'
    ],
    questions: [
      'Why do certain infectious diseases remain highly prevalent in the Global South despite being preventable or treatable? <br> o	Consider infrastructure, poverty, health systems, and global inequities.',
      'How do factors such as climate change, urbanization, and political instability influence infectious disease emergence and spread in low-resource settings?',
      'What responsibilities do high-income countries “if any!” - have in addressing infectious diseases in the Global South? <br> o	The USA has just withdrawn from the WHO: consider aid, research funding, vaccine access, and capacity building.'
    ],
    resources: [
      { label: '1. https://www.cdc.gov/global-health/annual-report-2024/index.html', url: 'https://www.cdc.gov/global-health/annual-report-2024/index.html' },
      { label: '2. Walker, R.J., Kingpriest, P.T., Gong, J. et al. Global perspectives on infectious diseases at risk of escalation and their drivers. Sci Rep 15, 38630 (2025). https://doi.org/10.1038/s41598-025-22573-3', url: 'https://doi.org/10.1038/s41598-025-22573-3' },
      { label: '3. Valenzuela O, de Siqueira IC. Editorial: Global excellence in infectious diseases - Surveillance, prevention and treatment: Central and South America. Front Med (Lausanne). 2022 Nov 28;9:1084753. doi: 10.3389/fmed.2022.1084753. PMID: 36518739; PMCID: PMC9742520 https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2022.1084753/full', url: 'https://doi.org/10.3389/fmed.2022.1084753' }
    ],
    moderator: '',
    speakers: ['Stephen Scholand'],
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
    end: '1:30',
    type: 'Lecture',
    title: 'Healthcare in Armenia: Global Perspective and Challenges',
    subtitle: 'Format: Lecture',
    objectives: [
      'Describe the structure and evolution of Armenia’s healthcare system, including its post-Soviet legacy, current mixed financing model, and ongoing reforms toward universal health coverage.',
      'Analyze how cultural, ethnic, and family-centered decision-making influences healthcare access and utilization, particularly in sensitive areas such as genetics, prenatal care, and chronic disease management.',
      'Evaluate the role of medical genetics as a cost-effective public health strategy in a relatively monoethnic population, using Familial Mediterranean Fever (FMF) and prenatal screening as key examples.',
      'Critically compare healthcare system models (Brinkerhoff vs. Frenk) and justify why transitional systems like Armenia’s may require hybrid, context-sensitive approaches rather than idealized universal models.'
    ],
    questions: [
      'How do cultural norms and family-centered decision-making challenge Western concepts of individual autonomy in healthcare, and how should systems adapt to this reality?',
      'In resource-limited settings, should high-cost services like medical genetics be prioritized as preventive investments rather than viewed as luxury care? Why or why not?',
      'What are the risks of designing healthcare reforms based solely on formal structures (“the map”) without accounting for informal patient pathways (“invisible routes”)?',
      'Can Armenia’s experience with FMF serve as a model for other countries with founder effects or high prevalence of rare diseases? What conditions are necessary for success?'
    ],
    resources: [
      { label: '1. Brinkerhoff, D. W. (2004). Accountability and Health Systems: Toward Conceptual Clarity and Policy Relevance. Health Policy and Planning.', url: '' },
      { label: '2. World Health Organization (WHO). Health System Transformation in Post-Soviet Countries.', url: '' },
      { label: '3. Ben-Chetrit, E., Touitou, I. (2009). Familial Mediterranean Fever in the World. Arthritis & Rheumatism.', url: '' }
    ],
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
    title: 'Global Health at the Edge of America',
    subtitle: 'Format: Lecture',
    objectives: [
      'Understand foundational aspects of a Federally Qualified Health Center, to include history and compliance requirements.',
      'Understand the unique challenges of providing care along the rural US/Mexico border.',
      'Understand effective strategies of overcoming barriers to care in a global health setting in the United States.'
    ],
    questions: [
      'The formation of Federally Qualified Health Centers (FQHCs) can be traced back to the passage of which legislation:<br>A. 1964 Civil Rights Act<br>B. 1935 Social Security Act<br>C. 1965 Title XIX of the Social Security Act<br>D. 2010 Patient Protection and Affordable Care Act',
      'Barriers to care associated with primary care work along the rural US/Mexico border include all of the following except:<br>A. Misrepresentation of the US/Mexico border by media and elected officials<br>B. Day-to-day danger to health workers that are targeted by criminal organizations<br>C. Distance to referral hospitals and specialty care<br>D. Poverty',
      'The practice of community health is:<br>A. the same as general practice that takes place in a community business<br>B. the same as hospital-based outpatient care in the community institution<br>C. the practice of health care blended with concepts of public and population health<br>D. entirely independent from the practice of global health',
      'Residents that live in rural zip codes are statistically more likely to live a shorter lifespan than their urban/suburban counterparts.<br>A. True<br>B. False'
    ],
    resources: [
      { label: 'Opportunities and Challenges for the Federally Qualified Health Center Program: A Critical Review: https://doi.org/10.1146/annurev-publhealth-082224-022250', url: 'https://doi.org/10.1146/annurev-publhealth-082224-022250' },
      { label: 'Healthy Border 2030 U.S. Section United States - Mexico Border Health Commission 2024 Collaborative Action to Improve the Health and Wellbeing of the United States - Mexico Border Population; https://www.hhs.gov/sites/default/files/hb2030-collaborative-action-improve-health-well-being-united-states-mexico-border-population.pdf', url: 'https://www.hhs.gov/sites/default/files/hb2030-collaborative-action-improve-health-well-being-united-states-mexico-border-population.pdf' },
      { label: 'Rural and Urban Health | Health Policy Institute | Georgetown University', url: '' }
    ],
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
    end: '16:30',
    type: 'Panel',
    title: 'Bridging the Gap in Global Mental Health Education Between High- and Low/Middle-Income Countries',
    subtitle: 'Format: Interactive Panel Discussion',
    objectives: [
      'Understand Global Mental Health Disparities. Identify the key inequities in mental health services and education across low- and middle-income countries (LMICs) and high-income countries (HICs), and explore how these disparities affect vulnerable populations.',
      'Promote Culturally Competent Mental Health Care. Analyze the role of cultural competence, language barriers, and stigma in mental health access and care, especially in marginalized groups, and discuss strategies to overcome these obstacles.',
      'Strengthen Global Mental Health Education. Explore capacity-building initiatives in global mental health education, such as the Rudy Ruggles GMH Scholars Program, and examine how international collaboration can address the global psychiatry recruitment crisis.',
      'Enhance Partnerships for Global Mental Health. Discuss the importance of partnerships between governments, NGOs, and academic institutions in advancing global mental health education, particularly in LMICs.',
      'Align Mental Health Initiatives with Sustainable Development Goals (SDGs). Examine how global mental health education and collaboration contribute to several United Nations SDGs, including SDG 3 (Good Health and Well-Being) and SDG 10 (Reduced Inequalities), and identify actionable steps toward achieving these goals.'
    ],
    questions: [
      'How can international partnerships contribute to reducing disparities in mental health education and services between low- and middle-income countries (LMICs) and high-income countries (HICs)? ',
      'What are some effective strategies for promoting culturally competent mental health care and overcoming stigma in marginalized communities? How might these strategies differ depending on cultural and regional contexts?',
      'How can mental health literacy and awareness be improved globally to address misconceptions and reduce stigma, especially in communities with limited access to formal mental health education and resources?'
    ],
    resources: [
      { label: '1. https://www.who.int/teams/mental-health-and-substance-use/world-mental-health-report', url: 'https://www.who.int/teams/mental-health-and-substance-use/world-mental-health-report' },
      { label: '2. https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-respone', url: 'https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-respone' },
      { label: '3. https://worldhappiness.report/ed/2024/happiness-of-the-younger-the-older-and-those-in-between/#ranking-of-happiness-2021-2023', url: 'https://worldhappiness.report/ed/2024/' },
      { label: '4. https://www.commonwealthfund.org/publications/fund-reports/2024/sep/mirror-mirror-2024', url: 'https://www.commonwealthfund.org/publications/fund-reports/2024/sep/mirror-mirror-2024' },
      { label: '5. https://iris.who.int/bitstream/handle/10665/345946/9789240036703-eng.pdf?sequence=1', url: 'https://iris.who.int/bitstream/handle/10665/345946/9789240036703-eng.pdf?sequence=1' }
    ],
    moderator: 'Charles Herrick',
    speakers: ['Charles Herrick', 'Majd Soudan', 'Sabih Rahman', 'Makerere University Psychiatry Residents'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'mon-11',
    day: 0,
    date: '2026-02-02',
    start: '16:15',
    end: '16:30',
    type: 'Special',
    title: 'GH Bridge Group Photo',
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
  // Tuesday, February 3, 2026 (Day 1)
  {
    id: 'tue-1',
    day: 1,
    date: '2026-02-03',
    start: '08:00',
    end: '09:15',
    type: 'Lecture',
    title: 'Decolonizing Global Health',
    subtitle: 'Format: Lecture',
    objectives: [
      'Explain why decolonizing global health is critical',
      'Identify major global health approaches',
      'Describe evidence-based, sustainable, and effective methods for community empowerment',
      'Identify major agendas in global health work'
    ],
    questions: [
      'How can we follow the community voice in global health?',
      'Can we decolonize global health without following the community voice?',
      'Which approaches and agendas assist in decolonizing global health?'
    ],
    resources: [
      { label: 'August, E., Tadesse, L., O’Neill, M. S., Eisenberg, J. N. S., Wong, R., Kolars, J. C., & Bekele, A. (2022). What is global health equity? A proposed definition. Annals of Global Health, 88(1). http://doi.org/10.5334/aogh.3754', url: 'http://doi.org/10.5334/aogh.3754' },
      { label: 'Lasker, J. (2016). Hoping to help: The promises and pitfalls of global health volunteering. Ithaca, NY: ILR Press.', url: '' },
      { label: 'Seager, G. (2012). When healthcare hurts: An evidence based guide for best practices in global health initiatives [Kindle version]. Retrieved from https://www.amazon.com', url: '' },
      { label: 'Scirto, K. (2022). Doing global health work: Approaches that really make a difference. Oakland, CA: Hesperian Health Guides. Retrieved from https://store.hesperian.org/prod/Doing_Global_Health_Work.html', url: 'https://store.hesperian.org/prod/Doing_Global_Health_Work.html' },
      { label: 'Werner, D., & Bower, B. (2012). Helping health workers learn: A book of methods, aids, and ideas for instructors. Berkeley, CA: Hesperian Health Guides.', url: '' }
    ],
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
    objectives: [
      'To discuss what working in global health might look like',
      'To discuss the ethics of working abroad'
    ],
    questions: [
      'What are the different ways physicians can incorporate global health into their careers, and how do these pathways differ in terms of clinical work, research, education, and policy?',
      'What ethical principles should guide medical trainees and physicians working in international settings, particularly during short-term clinical or volunteer experiences?',
      'What are some common professional, personal, and ethical challenges faced by global health practitioners, and how can these challenges be navigated responsibly?',
      'How can medical students begin preparing for a career in global health in a way that promotes sustainability, equity, and meaningful partnership with host communities?'
    ],
    resources: [
      { label: '• https://globalvolunteers.org/ethical-volunteer-vacations/', url: 'https://globalvolunteers.org/ethical-volunteer-vacations/' },
      { label: '• https://www.cdc.gov/global-health/careers/?CDC_AAref_Val=https://www.cdc.gov/globalhealth/employment/default.htm', url: 'https://www.cdc.gov/global-health/careers/' },
      { label: '• https://www.cugh.org/online-tools/job-board/', url: 'https://www.cugh.org/online-tools/job-board/' }
    ],
    moderator: 'Stephen Scholand',
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
    title: 'Malaria in Resource-Limited Environments: Diagnosis, Treatment, and Prevention',
    subtitle: 'Format: Presentation, case reports',
    objectives: [
      'Describe the epidemiology and global burden of malaria, with emphasis on populations most affected in resource-limited settings.',
      'Explain the challenges of malaria diagnosis in low-resource environments, including the use and limitations of rapid diagnostic tests and microscopy.',
      'Compare first-line malaria treatment strategies in resource-limited settings, including the role of artemisinin-based combination therapies.',
      'Discuss prevention strategies for malaria and the barriers to their implementation, including vector control, chemoprophylaxis, and vaccination.'
    ],
    questions: [
      'What factors contribute to the persistence of malaria in resource-limited settings despite effective treatments and preventive tools?<br>o	Consider health systems, poverty, climate, and political instability.',
      'How do diagnostic limitations affect malaria outcomes in low-resource environments?<br>o	Discuss over-treatment, missed diagnoses, and antimicrobial resistance.',
      'What are the trade-offs between individual-level malaria prevention and population-level control strategies?<br>o	Examples: bed nets vs indoor residual spraying vs vaccination.',
      'How should global health programs balance innovation (new drugs, vaccines) with strengthening basic healthcare infrastructure?'
    ],
    resources: [
      { label: '1. Centers for Disease Control and Prevention (CDC). Malaria – Diagnosis and Treatment Guidelines. https://www.cdc.gov/malaria/hcp/clinical-guidance/index.html', url: 'https://www.cdc.gov/malaria/hcp/clinical-guidance/index.html' },
      { label: '2. World Health Organization (WHO). World Malaria Report. https://www.mmv.org/sites/default/files/content/document/world-malaria-report-2023_0.pdf', url: 'https://www.mmv.org/sites/default/files/content/document/world-malaria-report-2023_0.pdf' },
      { label: '3. White NJ. Severe malaria. Malar J. 2022 Oct 6;21(1):284. doi: 10.1186/s12936-022-04301-8. PMID: 36203155; PMCID: PMC9536054. https://pmc.ncbi.nlm.nih.gov/articles/PMC9536054/', url: 'https://doi.org/10.1186/s12936-022-04301-8' }
    ],
    moderator: '',
    speakers: ['Stephen Scholand'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-5',
    day: 1,
    date: '2026-02-03',
    start: '13:30',
    end: '14:30',
    type: 'Lecture',
    title: 'Healthcare in Zimbabwe: Global Perspective and Challenges',
    subtitle: 'Format: Lecture',
    objectives: [
      'Describe the structure and delivery of healthcare services in Zimbabwe ',
      'Discuss global health perspectives of healthcare in Zimbabwe Discuss key global health challenges Zimbabwe faces and strategies to address the challenges'
    ],
    questions: [
      'Discuss access to healthcare in Zimbabwe in relation to the structure of Zimbabwe’s healthcare system.',
      'What are the main resource constraints in the healthcare system and how are these addressed in the delivery system of healthcare in Zimbabwe?',
      'Explain how global health partnerships affect healthcare delivery in Zimbabwe.',
      'Discuss Zimbabwe’s efforts in response to Social Development Goals 3 (SGD3).'
    ],
    resources: [
      { label: '1. WHO Zimbabwe Country Profile: Overview of health trends, challenges, and WHO support.', url: '' },
      { label: '2. Zimbabwe Demographic and Health Survey (ZDHS): Data on health indicators, HIV, TB, and more.', url: '' },
      { label: '3. UNICEF Zimbabwe Health Reports: Insights on maternal, newborn, and child health.', url: '' },
      { label: '4. World Bank Zimbabwe Health Data: Health statistics and economic context.', url: '' }
    ],
    moderator: '',
    speakers: ['Fiona Makoni'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-6',
    day: 1,
    date: '2026-02-03',
    start: '14:30',
    end: '15:30',
    type: 'Lecture',
    title: 'Healthcare in the Philippines: Global Perspective and Challenges',
    subtitle: 'Format: Lecture',
    objectives: [
      'Describe the structure and governance of the Philippine health system and its alignment with global health models.',
      'Examine the role of decentralization and its implications for equity and access. Situate the Philippine health system within regional (ASEAN) and global health frameworks.'
    ],
    questions: [
      'How is healthcare delivery organized across national, regional, and local levels in the Philippines?',
      'What are the advantages and limitations of a devolved health system? How does the Philippine health system compare with other lower-middle-income countries?',
    ],
    resources: [
      { label: 'World Health Organization. Philippines: Health System Review (Asia Pacific Observatory Series).', url: '' },
      { label: 'Department of Health. National Objectives for Health: Philippines', url: '' },
      { label: 'World Bank. Primary Health Care Performance in the Philippines.', url: '' }
    ],
    moderator: '',
    speakers: ['Jasper Tolarba'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-7',
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
    id: 'tue-8',
    day: 1,
    date: '2026-02-03',
    start: '15:45',
    end: '17:15',
    type: 'Lecture',
    title: 'The Role of Public and Global Health in Addressing Armed Conflict',
    subtitle: 'Format: Lecture',
    objectives: [
      'Describe key pathways through which armed conflict affects population health and health systems (direct violence, displacement, service disruption, infrastructure and workforce impacts).',
      'Identify practical public health approaches for measuring and documenting conflict-related health impacts under access and data constraints (e.g., surveillance, surveys, mortality estimation, rapid assessment).',
      'Discuss ethical challenges in conflict and humanitarian research/practice, including risk/benefit, informed consent under duress, and data protection/ownership.',
      'Consider how public health professionals and institutions can contribute to harm reduction, accountability, and (where feasible) prevention.'
    ],
    questions: [
      'In conflict settings, what are the most important direct vs. indirect drivers of excess morbidity and mortality, and how would you prioritize them in a real response?',
      'When routine health information systems break down, what are the most feasible methods to estimate mortality/morbidity, and what tradeoffs do they involve (bias, security, timeliness, validity)?',
      'Who should “own” and control crisis data, and how can equitable data governance be operationalized with local partners?',
      'What are realistic roles for schools of public health and practitioners in reducing harms from conflict (e.g., documentation, service support, advocacy, protection of health care)?'
    ],
    resources: [
      { label: 'Video to Watch: Public Health in Times of War and Conflict', url: 'https://www.youtube.com/watch?v=anxc-LEGWRE' },
      { label: 'A systematic literature review of the ethics of conducting research in the humanitarian Setting; Bruno and Haar Conflict and Health, BMJ, (2020) 14:27', url: 'https://doi.org/10.1186/s13031-020-00271-x' },
      { label: 'Razum, O., & Shapira, S. (2025, December 17). Armed Conflict, War and Public Health. Oxford Research Encyclopedia of Global Public Health.', url: 'https://doi.org/10.1093/acrefore/9780190632366.013.435' }
    ],
    moderator: '',
    speakers: ['Kaveh Khoshnood'],
    room: 'Creasy Auditorium'
  },
  {
    id: 'tue-9',
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
// 
// --- SPEAKER PHOTO FORMAT ---
// "Speaker Full Name": "https://url-to-photo.jpg",
// -----------------------------
const SPEAKER_PHOTOS = {
  "Bulat A. Ziganshin": "images/speakers/Bulat_Ziganshin.jpg",
  "Aparna Oltikar": "images/speakers/Aparna_Oltikar.png",
  "Kirk Scirto": "images/speakers/Kirk_Scirto.png",
  "Stephen Scholand": "images/speakers/Stephen_Scholand.png",
  "Gohar Shahsuvaryan": "images/speakers/Gohar_Shahsuvaryan.jpg",
  "Jonathan Melk": "images/speakers/Jon_Melk.png",
  "Charles Herrick": "images/speakers/Charles_Herrick.jpg",
  "Majd Soudan": "images/speakers/Majd_Soudan.png",
  "Sabih Rahman": "images/speakers/Sabih_Rahman.png",
  "Fiona Makoni": "images/speakers/Fiona_Makoni.avif",
  "Jasper Tolarba": "images/speakers/Jasper_Tolarba.avif",
  "Kaveh Khoshnood": "images/speakers/Kaveh_Khoshnood.png"
};

// -----------------------------------------------------------------------------
// 3. Speaker Information
// -----------------------------------------------------------------------------
// Detailed information including titles, bios, and areas of expertise.
//
// --- SPEAKER INFO FORMAT ---
// "Speaker Full Name": {
//   title: "Professional Title",
//   biography: "Full biography text...",
//   expertise: [
//     "Skill 1",
//     "Skill 2"
//   ]
// },
// ----------------------------
const SPEAKER_INFO = {
  "Bulat A. Ziganshin": {
    title: "MD, PhD<br>Executive Director of the Nuvance Health Global Health Program<br>Nuvance Health",
    biography: "Dr. Bulat Ziganshin has served as Executive Director of the Nuvance Health Global Health (GH) Program since September 2023. An Associate Research Scientist in the Department of Surgery, Section of Cardiac Surgery at Yale University School of Medicine, and Research Director of the Aortic Institute of Yale-New Haven Hospital, Dr. Ziganshin brings rich experience to his new role. His current research is focused on studying the diseases of the thoracic aorta, their natural history, genetics/genomics, and surgical treatment.<br><br>Dr. Ziganshin received his Medical Doctor (MD) Degree from Kazan State Medical University (Kazan, Russia) in 2007 followed by clinical training in General Surgery through an Internship program (2008) and a two-year clinical residency program in Cardiovascular Surgery in (2010), both at the Department of Surgical Diseases # 2 of Kazan State Medical University. In April 2017, Dr. Ziganshin was awarded a PhD degree in Pharmacology from Kazan State Medical University. He is also currently enrolled as a graduate student in Genetics and Development at Columbia University (expected graduation in 2024).<br><br>Dr. Ziganshin has a long-lasting interest in GH. From 2006 until 2015, he was employed as the Senior Officer for International Medical Exchange programs at the GH Center of Kazan State Medical University. Since 2016, he has directed the GH Elective Program for American University of the Caribbean and Ross University School of Medicine, furthering curriculum development, research projects, and program growth. We warmly welcome Dr. Bulat Ziganshin and look forward to the continued progress and achievements he will bring to the GH Program and Academy.",
    //expertise: ["Global Health Education", "International Collaboration"]
  },
  "Aparna Oltikar": {
    title: "MD<br>Vice President of Global Health<br>Joseph L. Belsky Endowed Chair of Medicine<br>Nuvance Health, Danbury Hospital",
    biography: "Aparna Oltikar, MD, currently serves as Vice President of Global Health, Vice President of Medical Affairs, Joseph L. Belsky Endowed Chair of Medicine, and Chair of the Executive Board of the Global Health Academy. She is also Chair of the Department of Medicine at Danbury and New Milford Hospitals within Nuvance Health.<br><br>Dr. Oltikar has been a strong and longstanding supporter of global health at Nuvance Health. She has accompanied and supervised medical students and residents in the Dominican Republic, Zimbabwe, and Arizona, and has been instrumental in hosting international scholars at Nuvance Health. In addition to her role as Chair of the Executive Board, Dr. Oltikar also serves as the faculty representative for Nuvance Health.",
    //expertise: ["Conference Coordination", "Global Health Education"]
  },
  "Kirk Scirto": {
    title: "MD<br>Family Medicine<br>Buffalo, NY",
    biography: "Kirk Scirto holds a master's degree in global public health and is a family physician, HIV specialist, and tropical medicine specialist. His global health work has allowed him to contribute to and lead a variety of initiatives over 23 years in 11 resource-limited nations. He serves as a professor of global health at the Universities of Buffalo and Rochester, and currently works as the Family Physician of the Tonawanda Seneca (Indigenous) Nation.",
    expertise: ["Global Public Health", "HIV Specialist", "Tropical Medicine"]
  },
  "Stephen Scholand": {
    title: "MD",
    biography: "Dr. Stephen Scholand is an infectious disease specialist in Meriden, Connecticut and is affiliated with multiple hospitals in the area, including MidState Medical Center and Banner-University Medical Center South. He received his medical degree from George Washington University School of Medicine and has been in practice for more than 20 years.",
    expertise: ["Infectious Disease", "HIV/AIDS Medicine", "International Health, Travel & Tropical"]
  },
  "Gohar Shahsuvaryan": {
    title: "MD<br>Family Physician<br>Medical Geneticist<br>National Institute of Health Armenia",
    biography: "Graduated from Yerevan State Medical University. She holds three medical specializations: Pediatrics, Family Medicine, and Clinical Genetics. Dr. Shahsuvaryan has over 25 years of clinical experience as a doctor and more than 10 years of experience teaching medical students. Her professional interests focus on rare and hereditary diseases, including familial Mediterranean fever and other autoinflammatory disorders. She is an active member of multiple professional associations and a co-author of scientific articles and books. Dr. Shahsuvaryan is involved in international academic collaborations and global health initiatives aimed at improving access to genetic medicine.",
    expertise: ["Pediatrics", "Family Medicine", "Clinical Genetics"]
  },
  "Jonathan Melk": {
    title: "MD, FAAP<br>Chief Executive Officer<br>Chiricahua Community Health Centers, Inc.",
    biography: "Dr. Jonathan Melk is a community pediatrician committed to eliminating the significant health disparities in the borderlands of rural southeastern Arizona. Raised on a small family farm, he developed a keen drive to “make a positive impact” for rural people early in life. Later, public health work amongst children living in poverty in both the United States and abroad resulted in his pursuit of a medical degree from Weill Cornell Medical College and training as a pediatrician at Phoenix Children’s Hospital. To master Spanish, Dr. Melk led public health and community health worker projects in Costa Rica with the intention of one day practicing in a global health environment. He was long fascinated with the US/Mexico border, and that combined with his deep interest in working with rural and medically underserved communities brought him to Cochise County, Arizona in 2006 to serve as the first pediatrician in the border community of Douglas, Arizona with the not-for-profit Federally Qualified Health Center (FQHC), Chiricahua Community Health Centers, Inc. (Chiricahua). He quickly became captured by the comprehensive, community-based, mission-driven healthcare made possible to all people regardless of ability to pay by the FQHC healthcare model embodied by Chiricahua. He became Director of Community Pediatrics in 2008, then Chief Medical Officer in 2012. Beginning in 2014, he assumed the role of Chief Executive Officer and is honored to lead a team of highly capable, motivated professionals who are dedicated to the health and well-being of the people of Cochise County (a service area the size of Rhode Island and Connecticut combined). Since 2014, CCHCI has grown rapidly from approximately a $13 million budget to $70 million budget with 80 providers and 400 employees and has ambitious plans to reduce and eliminate health disparities in its service area. Dr. Melk and his family live in Douglas, just blocks away from the border wall.<br><br>During his free time, Dr. Melk works with his wife (also a pediatrician and Chief Medical Officer of Chiricahua) and others on an all-volunteer nonprofit development organization (Rosa Vera Fund, Inc.) that has provided medical treatment for children and employment/education for healthcare workers in the Republic of Bolivia since 2003. He also relishes spending time with his wife and children, especially adventuring in the Arizona desert, Mexico and beyond.",
    //expertise: ["Pediatrics", "Family Medicine", "Clinical Genetics"]
  },
  "Charles Herrick": {
    title: "MD<br>System Chair of Psychiatry and Psychiatry Residency Program Director<br>Northwell/Nuvance Health Network",
    biography: "Dr. Herrick first joined Danbury Hospital in June, 1998, having moved from Manhattan where he worked at Jacobi Medical Center.  Dr. Herrick became the Chair of Psychiatry at Danbury Hospital in October 2006, and chair of psychiatry for Western Connecticut Health Network in April 2018.  He is now system chair of Nuvance Health Network since August 2020 and most recently Program Director for the psychiatry residency training program since April 2022.  He has worked in and overseen various programs at Danbury Hospital, including Consultation Services, Crisis Intervention Services, Inpatient Services, and Chemical Dependency Services. He has also served on numerous committees both for the hospital and medical group, including the Quality Committee, Finance Committee, Compensation Committee, and Ethics Committee.<br><br>Dr. Herrick graduated from Southern Illinois University School of Medicine, completed his residency training in general psychiatry at Tufts, New England Medical Center Hospitals, and in child and adolescent psychiatry at the University of California, San Francisco.  Dr. Herrick’s clinical experience has been diverse in terms of patient population, practice setting, and geographic location.  He has worked in Boston, San Francisco and New York City before coming to Danbury. He has coauthored books on depression, bipolar disorder, alcoholism and smoking cessation for patients and their family members, and has lectured on a variety of psychiatric and ethics topics to both medical audiences and the general public.<br><br>Dr. Herrick is a member of the faculty at University of Vermont Medical College, Ross University School of Medicine, American University of the Caribbean, and University of Medicine and Health Sciences, where he serves as clinical chair.   Dr. Herrick worked on the application for the Nuvance Health Psychiatry Residency Training Program, which began July, ’20. Dr. Herrick has served on various boards, including Regional Hospice and Home Care of Western Connecticut, and the Newtown-Sandy Hook Community Foundation, which provides oversight of funding for the victims of Sandy Hook.  In 2016, Dr. Herrick traveled to Uganda with the Global Health program to begin the alliance with Makerere University in Kampala.  Two of his senior residents attended in 2023.",
    expertise: ["Global Mental Health", "Psychiatry", "Child & Adolescent Psychiatry"]
  },
  "Fiona Makoni": {
    title: "MuDrStom (CSR), MPH (USA), PDG ResEthics (RSA), MScHPE(ZIM)<br>Dean, Faculty of Medicine and Health Sciences<br>University of Zimbabwe",
    biography: "She has 25 years’ experience in academia and research with the University of Zimbabwe. She is the Executive Dean of the Faculty of Medicine and Health Sciences, University of Zimbabwe. Prior to this appointment she was the Chairperson of the Department of Oral Health and Senior Lecturer in the same faculty. She is a dental surgeon with postgraduate qualifications in public health (USA), research ethics (RSA) and health professions education (ZIM) with experience in curriculum review. She is also a licenced counsellor. Among her academic awards are graduating with distinction in dentistry, a fellow of the the WK Kellogg Foundation for her Masters in Public Health in USA, and inaugural recipient of the Tony Volpe Award by the Global Dental Child Network in the United Kingdom.<br><br>She has held various leadership positions as the Director of Government Dental Services in Zimbabwe, President of the Zimbabwe Dental Association and member of several boards including the first council of the Women’s University in Africa. Her main areas of research have been in dental caries epidemiology and the Atraumatic Restorative Treatment technique as a treatment modality for dental caries, being involved in the early studies that led to the adoption of the technique by WHO.<br><br>She is dedicated to professional excellence in clinical practice and professional service and has keen interest in clinical and research ethics, health professions education and global health.",
    //expertise: ["Healthcare in Zimbabwe", "Dental Surgery"]
  },
  "Jasper Tolarba": {
    title: "EdD, DNP, RN, CGNC, CNE, FACHE, FAAN<br>Beatrice Hofstadter-White Endowed Chair for Nursing Practice, Education, Research, and Innovation<br>Assistant Director, Global Health Program Nursing Division<br>Sigma Liaison to the United Nations 2024-2027<br>Nuvance Health",
    biography: "A global expert and international consultant on nursing workforce migration. A Fulbright Research Scholar to the Middle East with a doctorate degree in Executive Leadership and Health Policy from Yale University and granted Fellow status by the American healthcare executive, and the American Academy of nursing. He’s also the current United Nations liaison 2024 to 2027 of Sigma Theta Tau International. Jasper is presently the Beatrice Hofstadter-White Endowed Chair for practice education, research and innovation at Nuvance Health System.",
    //expertise: ["Healthcare in the Philippines", "Nursing Education", "Global Health Nursing"]
  },
  "Kaveh Khoshnood": {
    title: "PhD, MPH<br>Associate Professor of Epidemiology<br>Yale School of Public Health",
    biography: "Dr. Khoshnood is an Associate Professor and Director of Undergraduate Studies at the Yale School of Public Health and executive committee member at Yale Council on Middle East Studies. He is the Founder of the Humanitarian Research Lab. Dr. Khoshnood is trained as an infectious disease epidemiologist and has more than three decades of domestic and international experience in HIV prevention research among people who use drugs and other at-risk populations.",
    expertise: ["Epidemiology and prevention of HIV/AIDS", "Research ethics", "Humanitarian health"]
  },
  "Majd Soudan": {
    title: "MD<br>Psychiatrist<br>Norwalk Hospital",
    biography: "Dr. Majd Soudan is a psychiatrist in Westport, Connecticut and is affiliated with multiple hospitals in the area, including Norwalk Hospital and University of Vermont Medical Center. He received his medical degree from Other and has been in practice between 6-10 years.",
    expertise: ["Psychiatry"]
  },
  "Makerere University Psychiatry Residents": {
    title: "Makerere University",
    biography: "Students from the Makerere University Psychiatry Residency Program in Kampala, Uganda. They will be joining us virtually for the 2026 Global Health Bridge.",
    //expertise: ["Psychiatry"]
  },
  "Sabih Rahman": {
    title: "MD<br>Psychiatrist<br>Danbury Hospital",
    biography: "Dr. Sabih Rahman is a psychiatrist in Danbury, Connecticut and is affiliated with multiple hospitals in the area, including Danbury Hospital and University of Vermont Medical Center.",
    expertise: ["Psychiatry"]
  }
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
