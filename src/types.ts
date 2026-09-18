export type PageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'education'
  | 'achievements'
  | 'activities'
  | 'resume'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export interface QuickStat {
  label: string;
  value: string;
  subtext: string;
  highlight?: boolean;
}

export interface SkillItem {
  name: string;
  description: string;
  tools?: string[];
  iconName: string;
}

export interface SkillCategory {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  description: string;
  isCurrent?: boolean;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  description: string;
  category: string;
  badge: string;
  focusAreas: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  description: string;
  metric?: string;
  iconName: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  summary: string;
  professionalFraming?: string;
  keyTakeaways: string[];
  iconName: string;
}

export interface PlannedProject {
  number: string;
  title: string;
  status: 'Coming Soon';
  category: string;
  description: string;
  plannedTools: string[];
  plannedObjectives: string[];
  learningFocus: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: string;
}
