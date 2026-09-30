export type Language = 'en' | 'ar';
export type Track = 'all' | 'flutter' | 'cyber';
export type Theme = 'dark' | 'light';

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  tagline: string;
  taglineAr: string;
  category: 'flutter' | 'cyber' | 'web';
  image: string;
  tags: string[];
  description: string;
  descriptionAr: string;
  highlights: string[];
  highlightsAr: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoType?: 'mobile' | 'terminal' | 'web';
}

export interface Certificate {
  id: string;
  title: string;
  titleAr: string;
  issuer: string;
  date: string;
  certId?: string;
  category: 'flutter' | 'cyber' | 'web';
  type: 'certificate' | 'recommendation';
  recommender?: string;
  summary: string;
  summaryAr: string;
  externalUrl?: string;
  driveUrl?: string;
  localPath?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  track: 'flutter' | 'cyber' | 'general';
  skills: {
    name: string;
    level: string;
    levelAr: string;
    featured?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  roleAr: string;
  organization: string;
  organizationAr: string;
  period: string;
  periodAr: string;
  type: 'cyber' | 'flutter' | 'education';
  achievements: string[];
  achievementsAr: string[];
}
