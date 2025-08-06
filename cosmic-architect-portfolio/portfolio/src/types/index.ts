export interface Project {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  images: ProjectImage[];
  technologies: Technology[];
  links: ProjectLinks;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  seo?: SEOData;
}

export interface ProjectImage {
  url: string;
  alt: string;
  order: number;
  thumbnail?: string;
  caption?: string;
}

export interface Technology {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool' | 'database';
  url?: string;
}

export interface ProjectLinks {
  live?: string;
  github?: string;
  demo?: string;
  documentation?: string;
}

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
}

export interface UserProfile {
  _id: string;
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: SkillCategory[];
  contact: ContactInfo;
  updatedAt: Date;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  profileImage: string;
  resume?: string;
  location?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  graduationDate: Date;
  gpa?: string;
  relevantCourses?: string[];
  logo?: string;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
  years?: number;
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  whatsapp?: string;
  messenger?: string;
  location?: {
    city: string;
    country: string;
  };
}

export interface ContactMessage {
  _id?: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
  createdAt?: Date;
}

export interface SiteSettings {
  _id: string;
  general: {
    siteName: string;
    siteDescription: string;
    siteUrl: string;
    favicon: string;
  };
  seo: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    ogImage: string;
    googleAnalyticsId?: string;
  };
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    whatsapp?: string;
    messenger?: string;
  };
  contact: {
    email: string;
    phone?: string;
    location?: string;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
  updatedAt: Date;
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface FilterOptions {
  search?: string;
  technologies?: string[];
  status?: string;
  featured?: boolean;
  limit?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
    };
  };
}

export interface ThreeJSProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color?: string;
  opacity?: number;
}

export interface StarFieldConfig {
  count: number;
  depth: number;
  factor: number;
  saturation: number;
  fade: boolean;
  speed: number;
}

export interface ParallaxConfig {
  offset: number;
  speed: number;
  disabled?: boolean;
}

export interface FormFieldProps {
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'password';
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: string) => boolean | string;
  };
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: Date;
  icon?: string;
  url?: string;
}

export type Theme = 'light' | 'dark' | 'cosmic';
export type ViewMode = 'grid' | 'list' | 'masonry';
export type ProjectStatus = 'all' | 'published' | 'featured';
export type AnimationType = 'fade' | 'slide' | 'scale' | 'rotate' | 'typewriter';
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type NotificationType = 'success' | 'error' | 'warning' | 'info';