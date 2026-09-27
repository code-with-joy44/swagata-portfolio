import { ContactInfo, EducationItem, ProjectItem, SkillCategoryGroup, SkillItem } from '../types';

/**
 PERSONAL INFORMATION & CONFIGURATION
 */

export const PERSONAL_INFO = {
  name: 'Swagata Sen Joy',
  logoName: 'Joy',
  title: 'Computer Science & Technology Student',
  secondaryTitle: 'Aspiring AI Engineer & Software Developer',
  education: {
    degree: 'Diploma in Computer Science & Technology',
    institution: 'Dhaka Polytechnic Institute',
    location: 'Dhaka, Bangladesh',
  },
  bio: {
    hero: 'I am a Computer Science & Technology student with a strong passion for software development and artificial intelligence. I enjoy building practical software projects and continuously developing my technical skills to create reliable, thoughtful solutions.',
    about: [
      'I am currently studying Computer Science & Technology at Dhaka Polytechnic Institute in Bangladesh. My passion lies at the intersection of practical software engineering and artificial intelligence.',
      'As an aspiring AI engineer and software developer, I focus on building real, functional projects that reinforce my problem-solving ability. I take pride in understanding core principles, clean code structure, and modern developer workflows.',
      'I am dedicated to continuous self-improvement, refining my programming capabilities across Python, Java, and modern web development while systematically expanding my foundation in data manipulation and database systems.',
    ],
  },
  /*PROFILE PHOTO */
  photoUrl: '/profile-photo.png',

  /*RESUME CONFIGURATION */
  cvPdfUrl: '/Joy resume.pdf',

  /* SOCIAL & CONTACT INFORMATION*/
  contact: {
    email: 'joyswagatasen@gmail.com',
    phone: '+880 1883221355',
    location: 'Dhaka, Bangladesh',
    github: 'https://github.com/code-with-joy44',
    linkedin: 'https://linkedin.com/in/swagata-sen-joy-253565360',
    facebook: 'https://www.facebook.com/swagata.sen.188',
  } as ContactInfo,

  /*CONTACT FORM CONFIGURATION */
  contactFormEndpoint: '',
};

/** SOCIAL & LINKS */
export const socialLinks = {
  github: PERSONAL_INFO.contact.github,
  linkedin: PERSONAL_INFO.contact.linkedin,
  facebook: 'https://www.facebook.com/swagata.sen.188',
};

export const contactLinks = {
  github: PERSONAL_INFO.contact.github,
  linkedin: PERSONAL_INFO.contact.linkedin,
  facebook: 'https://www.facebook.com/swagata.sen.188',
  email: PERSONAL_INFO.contact.email,
};

/** EDUCATIONAL BACKGROUND */
export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'dpi',
    institution: 'Dhaka Polytechnic Institute',
    degreeOrLevel: 'Computer Science & Technology',
    session: '2022-23',
    status: 'In Progress',
    isCurrent: true,
    subjects: ['DSA', 'Networking', 'DBMS', 'OOP'],
  },
  {
    id: 'ssc',
    institution: 'Dolairpar High School',
    degreeOrLevel: 'Secondary School Certificate (SSC)',
    passingYear: '2022',
    gpa: '5.00',
    isCurrent: false,
    subjects: ['Physics', 'Mathematics', 'Chemistry'],
  },
];

/** SKILL */
export const SKILL_CATEGORIES: SkillCategoryGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core programming languages & object-oriented logic',
    iconName: 'Code2',
    skills: [
      {
        name: 'Python',
        category: 'programming',
        categoryLabel: 'Programming',
        focus: 'Core Logic, Scripting & Problem Solving',
        iconName: 'Code2',
      },
      {
        name: 'Java',
        category: 'programming',
        categoryLabel: 'Programming',
        focus: 'Object-Oriented Programming & GUI Development',
        iconName: 'Coffee',
      },
      {
        name: 'JavaScript',
        category: 'programming',
        categoryLabel: 'Programming',
        focus: 'DOM Manipulation & Dynamic Functionality',
        iconName: 'FileCode2',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    subtitle: 'Frontend markup, responsive styling & component frameworks',
    iconName: 'Layout',
    skills: [
      {
        name: 'HTML',
        category: 'web',
        categoryLabel: 'Web',
        focus: 'Semantic Structure & Accessible Layouts',
        iconName: 'Layout',
      },
      {
        name: 'CSS',
        category: 'web',
        categoryLabel: 'Web',
        focus: 'Responsive Styling & Modern UI Design',
        iconName: 'Palette',
      },
      {
        name: 'Bootstrap',
        category: 'web',
        categoryLabel: 'Web',
        focus: 'Responsive Grid Systems & Components',
        iconName: 'Component',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    subtitle: 'Numerical computation & tabular data processing',
    iconName: 'Binary',
    skills: [
      {
        name: 'NumPy',
        category: 'data',
        categoryLabel: 'Data',
        focus: 'Numerical Computation & Array Operations',
        iconName: 'Binary',
      },
      {
        name: 'Pandas',
        category: 'data',
        categoryLabel: 'Data',
        focus: 'Data Structures, Cleaning & Transformation',
        iconName: 'Database',
      },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    subtitle: 'Relational SQL & document-oriented NoSQL storage',
    iconName: 'Server',
    skills: [
      {
        name: 'MySQL',
        category: 'database',
        categoryLabel: 'Database',
        focus: 'Relational Database Design & SQL Queries',
        iconName: 'Server',
      },
      {
        name: 'MongoDB',
        category: 'database',
        categoryLabel: 'Database',
        focus: 'Document-Oriented NoSQL Data Modeling',
        iconName: 'Boxes',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools / Design',
    subtitle: 'Development workflow, version control & visual design',
    iconName: 'Terminal',
    skills: [
      {
        name: 'Git',
        category: 'tools',
        categoryLabel: 'Tools / Design',
        focus: 'Version Control & Branching Workflows',
        iconName: 'GitBranch',
      },
      {
        name: 'GitHub',
        category: 'tools',
        categoryLabel: 'Tools / Design',
        focus: 'Repository Hosting & Collaboration',
        iconName: 'FolderGit2',
      },
      {
        name: 'VS Code',
        category: 'tools',
        categoryLabel: 'Tools / Design',
        focus: 'Primary Development Environment & Debugging',
        iconName: 'Terminal',
      },
      {
        name: 'Figma',
        category: 'tools',
        categoryLabel: 'Tools / Design',
        focus: 'UI/UX Layouts, Wireframing & Prototyping',
        iconName: 'Figma',
      },
    ],
  },
];

export const SKILLS_DATA: SkillItem[] = SKILL_CATEGORIES.flatMap((cat) => cat.skills);


/** PROJECTS*/
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'scientific-calculator',
    name: 'Scientific Calculator',
    technologies: ['Java', 'Java Swing'],
    features: [
      'Basic arithmetic operations',
      'Scientific calculations',
      'Trigonometric functions',
      'Logarithm',
      'Square root',
      'Power calculation',
      'Pi',
      'Factorial',
      'Graphical user interface',
    ],
    shortDescription:
      'A Java Swing based scientific calculator application designed to perform both basic and scientific mathematical operations through a graphical user interface.',
  },
  {
    id: 'travel-agency-website',
    name: 'Travel Agency Website',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQLite'],
    features: [
      'Travel package browsing',
      'User authentication',
      'Login / Signup',
      'Travel booking functionality',
      'Responsive interface',
      'Destination/package presentation',
    ],
    shortDescription:
      'A travel agency web project designed to present travel packages and provide users with authentication and booking-related functionality.',
  },
];
