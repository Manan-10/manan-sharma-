import {
  EducationItem,
  CertificationItem,
  AchievementItem,
  ActivityItem,
  SkillCategory,
  PlannedProject,
  ValueCard,
} from '../types';

export const PERSONAL_INFO = {
  name: 'MANAN SHARMA',
  shortName: 'Manan',
  status: 'B.Com (Computers) Student / Fresher',
  degree: 'B.Com (Computers)',
  college: "St. Joseph's Degree and PG College, Hyderabad",
  degreePeriod: '2025 – 2028',
  location: 'Koti, Hyderabad, Telangana, India',
  phone: '+91 91826 52225',
  email: 'manan.shr2511@gmail.com',
  availability: 'OPEN TO INTERNSHIP & ENTRY-LEVEL OPPORTUNITIES',
  primaryTitle: 'B.Com (Computers) Student',
  secondaryTitle: 'Aspiring Business & Technology Professional',
  heroDescription:
    'Motivated B.Com (Computers) student with a foundation in commerce, computer applications, MS Excel, basic accounting, and digital marketing. I am focused on building practical skills, gaining industry experience, and contributing to a professional organization.',
};

export const QUICK_STATS = [
  {
    label: 'DEGREE PROGRAM',
    value: 'B.Com (Computers)',
    subtext: "St. Joseph's Degree and PG College",
    highlight: true,
  },
  {
    label: 'ACADEMIC SCORE',
    value: '9.0 / 10',
    subtext: '1st Semester SGPA',
    highlight: true,
  },
  {
    label: 'TIMELINE',
    value: '2025 – 2028',
    subtext: 'Current Degree',
    highlight: false,
  },
  {
    label: 'LOCATION',
    value: 'Hyderabad',
    subtext: 'Telangana, India',
    highlight: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    id: 'computer-productivity',
    title: 'Computer & Productivity',
    subtitle: 'Practical computer applications and core productivity software for business operations.',
    skills: [
      {
        name: 'Microsoft Excel',
        description: 'Data entry, spreadsheet formatting, basic formulas, sorting, filtering, and data organization.',
        tools: ['Formulas', 'Data Tables', 'Spreadsheets'],
        iconName: 'FileSpreadsheet',
      },
      {
        name: 'Microsoft Word',
        description: 'Document preparation, business correspondence, structured reports, and text formatting.',
        tools: ['Documentation', 'Reports', 'Typography'],
        iconName: 'FileText',
      },
      {
        name: 'Microsoft PowerPoint',
        description: 'Slide design, professional presentation structuring, visual summaries, and academic decks.',
        tools: ['Slide Decks', 'Visual Summaries'],
        iconName: 'Presentation',
      },
      {
        name: 'Computer Operations',
        description: 'Operating systems navigation, file management, software installation, and IT fundamentals.',
        tools: ['OS Management', 'System Tools'],
        iconName: 'Monitor',
      },
      {
        name: 'Data Handling',
        description: 'Organizing structured records, clean data input, verification, and basic data hygiene.',
        tools: ['Data Cleanliness', 'Record Keeping'],
        iconName: 'Database',
      },
      {
        name: 'Email Communication',
        description: 'Professional inbox etiquette, formal correspondence, timely replies, and clear messaging.',
        tools: ['Business Writing', 'Correspondence'],
        iconName: 'Mail',
      },
      {
        name: 'Internet Research',
        description: 'Information discovery, market lookups, source verification, and business research.',
        tools: ['Search Strategies', 'Fact Checking'],
        iconName: 'Search',
      },
    ],
  },
  {
    number: '02',
    id: 'business-commerce',
    title: 'Business & Commerce',
    subtitle: 'Undergraduate commerce principles, accounting fundamentals, and operational logic.',
    skills: [
      {
        name: 'Basic Accounting Concepts',
        description: 'Double-entry principles, journal entries, ledger accounting, and financial terminology.',
        tools: ['Ledgers', 'Balance Concepts', 'Financial Terms'],
        iconName: 'Calculator',
      },
      {
        name: 'Business Understanding',
        description: 'Fundamental commerce workflows, trade concepts, commercial organizations, and business structures.',
        tools: ['Commerce Foundations', 'Organizational Logic'],
        iconName: 'Briefcase',
      },
      {
        name: 'Analytical Thinking',
        description: 'Breaking down business scenarios, identifying patterns, and approaching queries methodically.',
        tools: ['Problem Decomposition', 'Logic'],
        iconName: 'TrendingUp',
      },
    ],
  },
  {
    number: '03',
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'Modern online awareness, search optimization fundamentals, and promotional tactics.',
    skills: [
      {
        name: 'SEO Basics',
        description: 'Keyword awareness, on-page optimization principles, search engine fundamentals, and meta structures.',
        tools: ['Keyword Awareness', 'On-Page Fundamentals'],
        iconName: 'Globe',
      },
      {
        name: 'Social Media Marketing',
        description: 'Audience engagement, social platform presence, content scheduling, and organic reach tactics.',
        tools: ['Campaign Strategy', 'Audience Growth'],
        iconName: 'Share2',
      },
      {
        name: 'Online Promotion Strategies',
        description: 'Digital promotional channels, promotional copy awareness, and brand outreach basics.',
        tools: ['Brand Outreach', 'Digital Campaigns'],
        iconName: 'Megaphone',
      },
    ],
  },
  {
    number: '04',
    id: 'professional-skills',
    title: 'Professional Skills',
    subtitle: 'Interpersonal strengths cultivated through sports, team coordination, and college initiatives.',
    skills: [
      {
        name: 'Communication',
        description: 'Clear oral and written expression in group discussions, presentations, and team settings.',
        tools: ['Clear Expression', 'Active Listening'],
        iconName: 'MessageSquare',
      },
      {
        name: 'Problem Solving',
        description: 'Addressing challenges with practical, calm, step-by-step thinking to reach tangible results.',
        tools: ['Critical Thinking', 'Practical Resolution'],
        iconName: 'Lightbulb',
      },
      {
        name: 'Leadership',
        description: 'Guiding peer efforts, taking initiative in collegiate projects, and encouraging team cohesion.',
        tools: ['Initiative', 'Team Guidance'],
        iconName: 'Users',
      },
      {
        name: 'Teamwork',
        description: 'Collaborating respectfully with diverse individuals, sharing tasks, and supporting collective goals.',
        tools: ['Peer Support', 'Shared Responsibility'],
        iconName: 'Handshake',
      },
      {
        name: 'Adaptability',
        description: 'Fast receptiveness to feedback, readiness to learn new tools, and flexibility in dynamic workflows.',
        tools: ['Fast Learner', 'Agile Mindset'],
        iconName: 'RefreshCw',
      },
      {
        name: 'Understanding',
        description: 'Active listening, empathy towards team members, and comprehensive grasp of project requirements.',
        tools: ['Empathetic Listening', 'Clarity of Purpose'],
        iconName: 'HeartHandshake',
      },
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'bcom',
    degree: 'B.Com (Computers)',
    institution: "St. Joseph's Degree and PG College, Hyderabad",
    period: '2025 – 2028',
    scoreLabel: '1st Semester Score',
    scoreValue: '9.0 / 10',
    isCurrent: true,
    description:
      'Currently pursuing B.Com (Computers), building knowledge across commerce, business, computer applications, and related areas.',
    highlights: [
      'Comprehensive curriculum blending Commerce, Accounting, and Computer Applications',
      'First Semester Academic Performance: 9.0/10 SGPA',
      'Active participant in collegiate initiatives and NSS activities',
    ],
  },
  {
    id: 'intermediate',
    degree: 'Intermediate – IPE',
    institution: 'St. Francis Xavier Junior College',
    period: '2023 – 2025',
    scoreLabel: 'IPE Score',
    scoreValue: '643',
    description:
      'Completed higher secondary education under the Board of Intermediate Education with a strong emphasis on commerce and academic discipline.',
    highlights: [
      'Total Score: 643 in Board Examinations',
      'Developed solid foundation in analytical and commercial concepts',
      'Represented college in inter-institutional basketball events',
    ],
  },
  {
    id: 'ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: "St. Paul's High School",
    period: '2022 – 2023',
    scoreLabel: 'Board GPA',
    scoreValue: '8.0 / 10',
    description:
      'Completed secondary schooling with academic consistency, holistic extracurricular involvement, and active sports representation.',
    highlights: [
      'Secured 8.0/10 GPA in Board Examinations',
      'Key member of the school basketball team',
      'Cultivated disciplined study and teamwork habits',
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Digital Marketing Course',
    description:
      'Completed a digital marketing course covering SEO basics, social media marketing, and online promotion strategies.',
    category: 'Digital Strategy & Marketing',
    badge: 'Certified Course',
    focusAreas: ['SEO Fundamentals', 'Social Media Marketing', 'Online Promotion Strategies'],
  },
  {
    title: 'MS Excel Certification',
    description:
      'Completed MS Excel certification focused on data handling and productivity tools.',
    category: 'Computer Applications & Data',
    badge: 'Productivity Certified',
    focusAreas: ['Data Handling', 'Spreadsheet Organization', 'Productivity Tools'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Academic Performance',
    category: 'Academics',
    metric: '9.0 / 10 SGPA',
    description: 'Achieved 9.0/10 in the first semester of B.Com (Computers).',
    iconName: 'Award',
  },
  {
    title: 'Basketball Representation',
    category: 'Athletics & Leadership',
    metric: 'School & College Level',
    description: 'Represented school and college in basketball competitions.',
    iconName: 'Trophy',
  },
  {
    title: 'Volunteering & Community',
    category: 'Community Service',
    metric: 'NSS & College Events',
    description: 'Participated in college and NSS events.',
    iconName: 'HeartHandshake',
  },
];

export const ACTIVITIES: ActivityItem[] = [
  {
    id: 'basketball',
    title: 'Basketball',
    summary: 'Represented school and college in basketball competitions.',
    professionalFraming:
      'Participation in team sports has contributed to my development in teamwork, communication, discipline, and commitment.',
    keyTakeaways: ['High-pressure decision making', 'Unwavering team communication', 'Physical & mental discipline', 'Accountability'],
    iconName: 'Activity',
  },
  {
    id: 'college-activities',
    title: 'College Activities',
    summary: 'Participated in college events and activities.',
    professionalFraming:
      'Engaging actively in campus events has enhanced my organizational capabilities, interpersonal networking, and stage confidence.',
    keyTakeaways: ['Event coordination', 'Cross-class collaboration', 'Public interaction'],
    iconName: 'CalendarCheck',
  },
  {
    id: 'nss-volunteering',
    title: 'NSS Volunteering',
    summary: 'Volunteered in NSS-related and college activities.',
    professionalFraming:
      'Contributing to National Service Scheme initiatives has instilled a strong sense of civic duty, social empathy, and community-first service.',
    keyTakeaways: ['Community engagement', 'Empathetic teamwork', 'Ground-level coordination'],
    iconName: 'Users',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    summary:
      'Continuously developing skills in Excel, digital marketing, accounting, computer applications, and professional communication.',
    professionalFraming:
      'Maintaining a dedicated self-study regimen alongside university classes to acquire practical market-relevant capabilities.',
    keyTakeaways: ['Proactive upskilling', 'Resourcefulness', 'Curiosity for emerging digital tools'],
    iconName: 'BookOpenCheck',
  },
];

export const CAREER_INTERESTS = [
  {
    title: 'Business Operations',
    description: 'Assisting in day-to-day business administration, workflow scheduling, and operational tracking.',
    iconName: 'Briefcase',
  },
  {
    title: 'Data & Excel',
    description: 'Organizing datasets, running spreadsheet calculations, cleansing records, and drafting status reports.',
    iconName: 'FileSpreadsheet',
  },
  {
    title: 'Digital Marketing',
    description: 'Supporting online promotions, organic social engagement, keyword research, and campaign monitoring.',
    iconName: 'Share2',
  },
  {
    title: 'Business Administration',
    description: 'Document management, professional correspondence, meeting support, and office productivity.',
    iconName: 'Layers',
  },
  {
    title: 'Customer / Client Support',
    description: 'Interacting with clients, addressing inquiries courteously, and documenting feedback accurately.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Computer & Business Roles',
    description: 'Bridging commercial understanding with software utilities to optimize entry-level office pipelines.',
    iconName: 'Monitor',
  },
];

export const PLANNED_PROJECTS: PlannedProject[] = [
  {
    number: 'PROJECT 01',
    title: 'Excel & Data Project',
    status: 'Coming Soon',
    category: 'Spreadsheets & Data Handling',
    description:
      'An upcoming practical project focused on organizing, analyzing, and presenting data using Microsoft Excel.',
    plannedTools: ['Microsoft Excel', 'Data Tables', 'Conditional Formatting', 'Summary Charts'],
    plannedObjectives: [
      'Structure raw transactional or operational data into organized tables',
      'Implement essential Excel formulas for clean summaries',
      'Generate clear visual dashboards for decision makers',
    ],
    learningFocus: 'Data organization, spreadsheet modeling, and executive summary presentation.',
  },
  {
    number: 'PROJECT 02',
    title: 'Business Analysis Project',
    status: 'Coming Soon',
    category: 'Commerce & Business Logic',
    description:
      'An upcoming project focused on applying business concepts to a practical problem or dataset.',
    plannedTools: ['Commerce Principles', 'Financial Ratios', 'MS Word Documentation', 'Analytical Thinking'],
    plannedObjectives: [
      'Evaluate a real-world small business scenario or case study',
      'Analyze cash flow, expense structures, or inventory challenges',
      'Deliver actionable recommendations in a structured business report',
    ],
    learningFocus: 'Commercial problem decomposition, basic financial analysis, and structured reporting.',
  },
  {
    number: 'PROJECT 03',
    title: 'Digital Marketing Project',
    status: 'Coming Soon',
    category: 'SEO & Online Promotion',
    description:
      'An upcoming project focused on applying digital marketing concepts such as SEO, social media, and online promotion.',
    plannedTools: ['SEO Fundamentals', 'Keyword Research', 'Social Media Strategy', 'Content Calendars'],
    plannedObjectives: [
      'Conduct keyword intent research for a target local business category',
      'Develop an organic social media campaign calendar with promotional copy',
      'Propose an on-page SEO improvement checklist',
    ],
    learningFocus: 'Digital audience discovery, organic outreach strategy, and keyword mapping.',
  },
];

export const WHAT_I_BRING: ValueCard[] = [
  {
    title: 'PROBLEM SOLVING',
    description: 'Approaching tasks logically and focusing on practical solutions.',
    iconName: 'Lightbulb',
  },
  {
    title: 'COMMUNICATION',
    description:
      'Developing clear verbal and written communication skills for academic and professional environments.',
    iconName: 'MessageSquare',
  },
  {
    title: 'LEADERSHIP',
    description:
      'Building leadership and teamwork through sports, college activities, and group experiences.',
    iconName: 'Users',
  },
  {
    title: 'ADAPTABILITY',
    description:
      'Being open to learning new tools, collaborating across teams, and adapting quickly to evolving workplace requirements.',
    iconName: 'RefreshCw',
  },
];

export const HOW_I_DEVELOP = [
  {
    title: 'Learning',
    subtitle: 'Curated Academic & Self-Study',
    description: 'Building deep foundations through university commerce courses and modern industry-aligned certifications.',
    iconName: 'BookOpen',
  },
  {
    title: 'Practice',
    subtitle: 'Hands-on Application',
    description: 'Working through realistic Excel exercises, financial accounting sets, and digital promotional simulations.',
    iconName: 'Code',
  },
  {
    title: 'Teamwork',
    subtitle: 'Collaborative Excellence',
    description: 'Honing sportsmanship, group coordination, and active listening through basketball and NSS initiatives.',
    iconName: 'Users',
  },
  {
    title: 'Problem Solving',
    subtitle: 'Practical Pragmatism',
    description: 'Breaking down complex questions into straightforward, structured, and manageable operational steps.',
    iconName: 'CheckCircle2',
  },
];

export const CURRENT_FOCUS_POINTS = [
  'Improving Excel and data-handling skills',
  'Strengthening business knowledge',
  'Developing digital marketing understanding',
  'Building practical projects',
  'Improving professional communication',
  'Preparing for internship and entry-level opportunities',
];
