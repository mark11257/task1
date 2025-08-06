import { NavigationItem, SocialLink, StarFieldConfig } from '@/types';

// Space Theme Constants
export const SPACE_COLORS = {
  navy: '#0A192F',
  black: '#00001a',
  purple: '#4a2a69',
  teal: '#64FFDA',
  silver: '#CCD6F6',
  grey: '#8892B0',
  gold: '#FFC300',
  glowBlue: '#64FFDA80',
  constellation: '#4a2a6950',
} as const;

// Site Configuration
export const SITE_CONFIG = {
  name: 'The Cosmic Architect',
  description: 'Software Engineer crafting digital experiences in the cosmos of code',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cosmic-architect.dev',
  author: 'Your Name',
  email: 'contact@cosmic-architect.dev',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
} as const;

// Navigation Items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'The Bridge',
    href: '/',
    description: 'Mission Control Center',
  },
  {
    label: 'The Hangar',
    href: '/projects',
    description: 'Project Database',
  },
  {
    label: 'Personal Log',
    href: '/about',
    description: 'Commander Profile',
  },
  {
    label: 'Communications',
    href: '/contact',
    description: 'Contact Array',
  },
];

// Social Links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
    label: 'View source code',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
    label: 'Professional network',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/1234567890',
    icon: 'MessageCircle',
    label: 'Quick message',
  },
  {
    platform: 'Email',
    url: 'mailto:contact@cosmic-architect.dev',
    icon: 'Mail',
    label: 'Send transmission',
  },
];

// Animation Configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    page: 0.8,
  },
  ease: {
    default: [0.25, 0.1, 0.25, 1],
    bounce: [0.68, -0.55, 0.265, 1.55],
    smooth: [0.4, 0, 0.2, 1],
  },
  stagger: {
    children: 0.1,
    cards: 0.15,
  },
} as const;

// Starfield Configuration
export const STARFIELD_CONFIG: StarFieldConfig = {
  count: 300,
  depth: 50,
  factor: 4,
  saturation: 0,
  fade: true,
  speed: 0.5,
};

// Technology Categories
export const TECH_CATEGORIES = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  tools: 'Tools & Platforms',
  databases: 'Databases',
} as const;

// Common Technologies with Icons
export const TECHNOLOGIES = {
  // Languages
  javascript: { name: 'JavaScript', icon: '/icons/technologies/javascript.svg', category: 'languages' },
  typescript: { name: 'TypeScript', icon: '/icons/technologies/typescript.svg', category: 'languages' },
  python: { name: 'Python', icon: '/icons/technologies/python.svg', category: 'languages' },
  java: { name: 'Java', icon: '/icons/technologies/java.svg', category: 'languages' },
  go: { name: 'Go', icon: '/icons/technologies/go.svg', category: 'languages' },
  rust: { name: 'Rust', icon: '/icons/technologies/rust.svg', category: 'languages' },
  
  // Frameworks
  react: { name: 'React', icon: '/icons/technologies/react.svg', category: 'frameworks' },
  nextjs: { name: 'Next.js', icon: '/icons/technologies/nextjs.svg', category: 'frameworks' },
  vue: { name: 'Vue.js', icon: '/icons/technologies/vue.svg', category: 'frameworks' },
  angular: { name: 'Angular', icon: '/icons/technologies/angular.svg', category: 'frameworks' },
  svelte: { name: 'Svelte', icon: '/icons/technologies/svelte.svg', category: 'frameworks' },
  express: { name: 'Express.js', icon: '/icons/technologies/express.svg', category: 'frameworks' },
  fastapi: { name: 'FastAPI', icon: '/icons/technologies/fastapi.svg', category: 'frameworks' },
  
  // Tools
  docker: { name: 'Docker', icon: '/icons/technologies/docker.svg', category: 'tools' },
  kubernetes: { name: 'Kubernetes', icon: '/icons/technologies/kubernetes.svg', category: 'tools' },
  aws: { name: 'AWS', icon: '/icons/technologies/aws.svg', category: 'tools' },
  vercel: { name: 'Vercel', icon: '/icons/technologies/vercel.svg', category: 'tools' },
  git: { name: 'Git', icon: '/icons/technologies/git.svg', category: 'tools' },
  vscode: { name: 'VS Code', icon: '/icons/technologies/vscode.svg', category: 'tools' },
  
  // Databases
  mongodb: { name: 'MongoDB', icon: '/icons/technologies/mongodb.svg', category: 'databases' },
  postgresql: { name: 'PostgreSQL', icon: '/icons/technologies/postgresql.svg', category: 'databases' },
  redis: { name: 'Redis', icon: '/icons/technologies/redis.svg', category: 'databases' },
  mysql: { name: 'MySQL', icon: '/icons/technologies/mysql.svg', category: 'databases' },
} as const;

// Page Titles (Space Theme)
export const PAGE_TITLES = {
  home: 'The Bridge - Mission Control',
  projects: 'The Hangar - Project Database',
  about: 'Personal Log - Commander Profile',
  contact: 'Communications Array - Contact Station',
  projectDetail: 'Mission Details',
} as const;

// Form Configuration
export const CONTACT_FORM_CONFIG = {
  maxMessageLength: 1000,
  requiredFields: ['name', 'email', 'message'],
  emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  nameMinLength: 2,
  messageMinLength: 10,
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  projects: '/api/projects',
  projectDetail: (slug: string) => `/api/projects/${slug}`,
  profile: '/api/profile',
  contact: '/api/contact',
  settings: '/api/settings',
  upload: '/api/upload',
} as const;

// Loading States
export const LOADING_MESSAGES = {
  projects: 'Scanning project database...',
  profile: 'Accessing personal log...',
  contact: 'Establishing communication link...',
  upload: 'Transferring data to starbase...',
  default: 'Processing request...',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Communication link disrupted. Please try again.',
  validation: 'Invalid data detected. Please check your input.',
  server: 'Starbase is temporarily offline. Please try again later.',
  notFound: 'The requested resource was not found in our database.',
  unauthorized: 'Access denied. Authentication required.',
  rateLimit: 'Too many requests. Please wait before trying again.',
  default: 'An unexpected error occurred. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  contact: 'Transmission received! Your message has been successfully sent.',
  subscribe: 'Successfully joined the mission updates!',
  upload: 'File uploaded to starbase successfully.',
  default: 'Operation completed successfully.',
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Animation Variants for Framer Motion
export const VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  },
  stagger: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  cardHover: {
    rest: { scale: 1, boxShadow: '0 0 20px rgba(100, 255, 218, 0.3)' },
    hover: { 
      scale: 1.02, 
      boxShadow: '0 0 40px rgba(100, 255, 218, 0.6)',
      transition: { duration: 0.2 },
    },
  },
} as const;

// Three.js Scene Configuration
export const THREEJS_CONFIG = {
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: [0, 0, 5],
  },
  renderer: {
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  },
  controls: {
    enableDamping: true,
    dampingFactor: 0.05,
    enableZoom: false,
    enablePan: false,
  },
} as const;

// Contact Form Rate Limiting
export const RATE_LIMIT_CONFIG = {
  maxSubmissions: 3,
  timeWindow: 60 * 60 * 1000, // 1 hour in milliseconds
  cooldownMessage: 'Communication frequency exceeded. Please wait before sending another transmission.',
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  defaultTitle: 'The Cosmic Architect - Software Engineer Portfolio',
  titleTemplate: '%s | The Cosmic Architect',
  defaultDescription: 'Exploring the cosmos of code, architecting digital solutions that transcend boundaries. Discover my journey through software engineering.',
  siteUrl: SITE_CONFIG.url,
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@yourusername',
} as const;

// Image Optimization
export const IMAGE_CONFIG = {
  quality: 90,
  formats: ['image/webp', 'image/avif'],
  sizes: {
    thumbnail: { width: 400, height: 300 },
    card: { width: 600, height: 400 },
    hero: { width: 1200, height: 800 },
    og: { width: 1200, height: 630 },
  },
} as const;