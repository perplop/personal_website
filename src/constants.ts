/** Public contact info for the site */
export const CONTACT_EMAIL = 'andychen3870@gmail.com';
export const CONTACT_PHONE_DISPLAY = '403-973-9330';
/** E.164 for tel: links */
export const CONTACT_PHONE_TEL = '+14039739330';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Hello from your website')}`;

export const CONTACT_GITHUB_URL = 'https://github.com/perplop';
export const CONTACT_LINKEDIN_URL = 'https://www.linkedin.com/in/andycbsci';

/** University College Dragon Boat Club — Linktree (interest form, Discord, socials) */
export const UCDBC_LINKTREE_URL =
  'https://linktr.ee/UCDBC?utm_source=ig&utm_medium=social&utm_content=link_in_bio';

export const PROJECTS = [
  {
    id: 'studysmart',
    title: 'StudySmart',
    description: 'Hackathon-winning full-stack study platform that transforms textbooks into personalized schedules and auto-generated quizzes using LLM APIs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkRBkvu88qZmyLR2jL3zuRZauaY_liK4_cctl5kMHoUP5v3LGpK8oAGkpzKQNSacgn86ZI3nMUTsmjSp-gytmL1U18DFfcClvkDNTK4mt0-YS0Uy8DnwS1dQxYOlfyHQZDtQTbO-Jo9WMOif7bS1c9aNoFr7aRYs_MnHL_VVp0fvc9KIgvBUyd5CmJi53d87AkZ6DPGzHvDtPFcyPl6wSiGkNuw0ZTeIpOICjoEFSC0baBw-AwDF-WTOVzL-KuAiWYvAxnJ8xvpKms',
    category: 'FULL STACK',
    isLarge: true
  },
  {
    id: 'stock-analysis-app',
    title: 'Real-Time Stock Analysis App',
    description: 'Modular Java application with real-time API ingestion, efficient caching, and clean architecture principles for scalable analytics.',
    icon: 'cpu',
    category: 'JAVA'
  },
  {
    id: 'utair',
    title: 'UTAIR (UofT Aerospace & Robotics)',
    description: 'Co-founded and scaled an engineering outreach club with workshops and technical sessions for 30+ student members.',
    icon: 'database',
    category: 'LEADERSHIP'
  },
  {
    id: 'utat-ml',
    title: 'UTAT Computer Vision Pipeline',
    description: 'Built a real-time object detection system with YOLOv8 and Jetson Nano, improving detection accuracy and reducing inference latency.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfKjZ8m6UlmLqVQlClQPA1kmI4xxS12bHWVwh858wEee5bIxP6OEKkJy2bbwLUHpJqQhX96sCcZZSiEmTmCK7sQ7xTHAsBdrOjgw9g38VffwHeXIUAoFx5AZG1l_TbJXxeyKb617m1oc_FOSQWoPIiwW9YvMnWJg_dHk-2G7kF5iweBX4qxNYY_2FxjS4mqbPJNvOmgOSTP1S7cVP5QNhdFXhNYA3Byz6jltXDDVPdqRlkvi53H9rRO6pwI8Basv3Lest7Y_Vauzqe',
    isWide: true
  }
];

/** Narrative blocks: IB → UTM → transfer to St. George */
export const EDUCATION_STORY = [
  {
    id: 'ib',
    title: 'International Baccalaureate (IB)',
    period: 'High school',
    body:
      'I went through the IB Diploma Programme — a pretty intense mix of higher-level STEM, the extended essay, and CAS. It pushed me to learn in depth, juggle long-term assignments with exams, and get comfortable being curious across subjects.',
  },
  {
    id: 'utm',
    title: 'University of Toronto Mississauga (UTM)',
    period: 'First year',
    body:
      'I started my undergraduate degree at UTM. That year was about finding my footing at university, leaning into math and computer science, and figuring out what I wanted the rest of my degree to look like.',
  },
  {
    id: 'utsg',
    title: 'University of Toronto — St. George',
    period: 'After first year',
    body:
      'After first year I transferred to the St. George campus to continue Honours Computer Science, Mathematics, and Physics — closer to the courses, research opportunities, and student communities I wanted to grow with downtown.',
  },
] as const;

/** Current degree (where you are now) */
export const CURRENT_DEGREE = {
  period: '2023 — 2027 (expected)',
  institution: 'University of Toronto — St. George',
  degree: 'Honours B.Sc. in Computer Science, Mathematics, and Physics',
  description:
    'Relevant coursework includes Data Structures & Algorithms, Software Engineering, Systems Programming, and Machine Learning.',
} as const;

export const EXPERIENCE = [
  {
    period: 'MAY 2023 — SEPT 2023',
    role: 'Software Developer Intern',
    company: 'PetroChina Canada',
    description: 'Built Python automation pipelines for large-scale document parsing, cutting processing time by 90% and improving data reliability across 5,000+ records.',
    icon: 'work'
  },
  {
    period: 'SEPT 2023 — PRESENT',
    role: 'Student Researcher, Undergraduate Physics Research',
    company: 'University of Toronto',
    description: 'Develop modular simulation and analysis code in Python to improve model reproducibility and apply statistical/regression methods for computational experiments.',
    icon: 'work'
  },
  {
    period: 'SEPT 2023 — SEPT 2025',
    role: 'Data Annotator',
    company: 'Outlier AI',
    description: 'Improved model robustness through large-scale edge-case evaluation and delivered structured technical reports with a 98% acceptance rate.',
    icon: 'work'
  }
];
