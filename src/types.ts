export type Theme = 'light' | 'dark';

export interface NavItem {
  name: string;
  href: string;
}

export interface SkillItem {
  name: string;
  category: 'programming' | 'web' | 'data' | 'database' | 'tools';
  categoryLabel: string;
  focus: string; // e.g. "Object-Oriented & Logic", "Data Analysis", etc.
  iconName: string;
}

export interface SkillCategoryGroup {
  id: 'programming' | 'web' | 'data' | 'database' | 'tools';
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrLevel: string;
  session?: string;
  passingYear?: string;
  gpa?: string;
  status?: string;
  isCurrent?: boolean;
  subjects: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  shortDescription: string;
  technologies: string[];
  features: string[];
  imagePlaceholderText?: string;
  imageSrc?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  facebook: string;
}
