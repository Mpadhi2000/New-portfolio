export type ProjectCategory =
  | "All"
  | "AI & GenAI"
  | "Full-Stack SaaS"
  | "Web & Platform";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & GenAI" | "Full-Stack SaaS" | "Web & Platform";
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  techStack: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  role: string;
  deliveryTime?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
  isSecondary?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface BuildProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  artifacts: string[];
}

export interface AILabItem {
  id: string;
  title: string;
  badge: "Production" | "Architecture Experiment" | "R&D Prototype";
  description: string;
  architecture: string[];
  keyCapabilities: string[];
  technologies: string[];
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  tagline: string;
  context: string;
  problem: string;
  solution: string;
  architectureBreakdown: string[];
  engineeringDecisions: string[];
  resultsAndLearnings: string[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  metric: string;
  label: string;
  description: string;
  verified: boolean;
}

export interface CertificationItem {
  id: string;
  issuer: string;
  logo: string;
  logoColor: string;
  logoImage?: string;
  title: string;
  issued: string;
  credentialUrl?: string;
  certificateImage?: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  positioning: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  stats: {
    experienceYears: string;
    productionWebsites: string;
    securityFirewalls: string;
    speedOptimization: string;
  };
}
