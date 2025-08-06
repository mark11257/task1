# Feature Specifications - The Cosmic Architect Portfolio

## 🌟 Portfolio Website Features

### 🏠 Home Page ("The Bridge")

#### Hero Section
```typescript
interface HeroSection {
  // Visual Elements
  starfieldBackground: {
    particleCount: number; // 200-500 particles
    animationSpeed: number; // Slow drift
    interactivity: boolean; // Mouse movement parallax
  };
  
  // Content
  primaryHeading: {
    text: string; // User's name
    animation: 'typewriter' | 'fade-in' | 'glitch';
    delay: number; // 500ms after page load
  };
  
  subtitle: {
    text: string; // "Software Engineer" or custom tagline
    animation: 'fade-in' | 'slide-up';
    delay: number; // 1000ms after heading
  };
  
  callToAction: {
    text: string; // "Explore My Universe"
    action: 'scroll-to-projects' | 'navigate-to-projects';
    animation: 'glow-pulse' | 'button-materialize';
    delay: number; // 1500ms
  };
}
```

#### Features
- **Responsive Design**: Adapts to all screen sizes
- **Performance**: Lazy loading for background animations
- **Accessibility**: Keyboard navigation, screen reader support
- **SEO**: Meta tags, structured data
- **Analytics**: Page view tracking, scroll depth

### 📂 Projects Page ("The Hangar")

#### Project Grid
```typescript
interface ProjectGrid {
  layout: {
    desktop: '3-column-grid';
    tablet: '2-column-grid';
    mobile: '1-column-stack';
  };
  
  filtering: {
    categories: ['All', 'Web Apps', 'Mobile', 'APIs', 'Tools'];
    technologies: string[]; // Dynamic from database
    searchBar: boolean;
  };
  
  sorting: {
    options: ['Featured', 'Recent', 'Title A-Z'];
    default: 'Featured';
  };
  
  pagination: {
    type: 'infinite-scroll' | 'load-more' | 'pagination';
    itemsPerPage: number; // 9 projects initially
  };
}
```

#### Project Card Component
```typescript
interface ProjectCard {
  // Visual
  thumbnail: {
    src: string;
    alt: string;
    placeholder: 'blur' | 'skeleton';
  };
  
  // Content
  title: string;
  shortDescription: string; // Max 120 characters
  technologies: {
    primary: string; // Main tech (React, Python, etc.)
    secondary: string[]; // Supporting technologies
  };
  
  // Interactive States
  hover: {
    elevation: boolean; // Card lift effect
    borderGlow: boolean; // Glowing border
    contentShift: boolean; // Subtle content animation
  };
  
  // Actions
  onClick: 'open-modal' | 'navigate-to-detail';
}
```

#### Project Modal
```typescript
interface ProjectModal {
  // Layout
  size: 'large' | 'fullscreen';
  background: 'backdrop-blur' | 'overlay-dim';
  
  // Content Sections
  header: {
    title: string;
    closeButton: boolean;
    navigation: boolean; // Previous/Next project
  };
  
  image: {
    type: 'single' | 'carousel';
    aspectRatio: '16:9' | '4:3';
    lightbox: boolean;
  };
  
  description: {
    length: 'short' | 'medium'; // 2-3 paragraphs max
    formatting: 'plain' | 'markdown';
  };
  
  actions: {
    viewDetails: boolean; // Link to full project page
    liveDemo: boolean;
    sourceCode: boolean;
  };
  
  // Animations
  entrance: 'fade-scale' | 'slide-up' | 'zoom-in';
  exit: 'fade-out' | 'slide-down' | 'zoom-out';
}
```

#### Project Detail Page
```typescript
interface ProjectDetailPage {
  // SEO & Meta
  seo: {
    title: string; // Project name + site name
    description: string;
    keywords: string[];
    ogImage: string;
  };
  
  // Header Section
  header: {
    title: string;
    subtitle?: string;
    status: 'Live' | 'In Development' | 'Archived';
    lastUpdated: Date;
  };
  
  // Action Buttons
  actions: {
    liveDemo?: {
      url: string;
      label: string;
      icon: string;
    };
    sourceCode?: {
      url: string;
      label: string;
      icon: string;
    };
    documentation?: {
      url: string;
      label: string;
      icon: string;
    };
  };
  
  // Image Gallery
  gallery: {
    images: {
      src: string;
      alt: string;
      caption?: string;
      thumbnail: string;
    }[];
    layout: 'carousel' | 'grid' | 'lightbox';
    autoplay: boolean;
  };
  
  // Content Sections
  sections: {
    overview: {
      content: string; // Rich text/markdown
      maxLength: number; // ~300 words
    };
    features: {
      items: {
        title: string;
        description: string;
        icon?: string;
      }[];
      layout: 'list' | 'grid';
    };
    techStack: {
      categories: {
        name: string; // Frontend, Backend, etc.
        technologies: {
          name: string;
          icon: string;
          url?: string; // Link to technology
        }[];
      }[];
      displayStyle: 'icons' | 'badges' | 'cards';
    };
    challenges: {
      content: string;
      solutions: string[];
    };
    results: {
      metrics?: {
        label: string;
        value: string;
      }[];
      testimonials?: {
        quote: string;
        author: string;
        role?: string;
      }[];
    };
  };
  
  // Navigation
  projectNavigation: {
    previous?: {
      slug: string;
      title: string;
      thumbnail: string;
    };
    next?: {
      slug: string;
      title: string;
      thumbnail: string;
    };
  };
}
```

### 👤 About Page ("Personal Log")

#### Personal Information
```typescript
interface AboutPage {
  // Hero Section
  hero: {
    profileImage: {
      src: string;
      alt: string;
      shape: 'circle' | 'rounded-square';
      border: 'glow' | 'solid' | 'none';
    };
    name: string;
    title: string;
    tagline: string;
    location?: string;
  };
  
  // Bio Section
  bio: {
    introduction: string; // 2-3 paragraphs
    philosophy: string; // Professional approach
    interests: string[]; // Personal interests
    currentFocus: string; // What you're learning/working on
  };
  
  // Skills Section
  skills: {
    categories: {
      name: string; // Languages, Frameworks, Tools, etc.
      items: {
        name: string;
        proficiency: 1 | 2 | 3 | 4 | 5; // Skill level
        icon?: string;
        years?: number; // Years of experience
      }[];
      displayStyle: 'progress-bars' | 'star-rating' | 'radar-chart';
    }[];
  };
  
  // Experience Timeline
  experience: {
    jobs: {
      title: string;
      company: string;
      location: string;
      startDate: Date;
      endDate?: Date; // Current job if undefined
      description: string;
      achievements: string[];
      technologies: string[];
      logo?: string;
    }[];
    education: {
      degree: string;
      institution: string;
      graduationDate: Date;
      gpa?: string;
      relevantCourses?: string[];
      logo?: string;
    }[];
    certifications?: {
      name: string;
      issuer: string;
      issueDate: Date;
      expirationDate?: Date;
      credentialUrl?: string;
      logo?: string;
    }[];
  };
  
  // Additional Sections
  extras: {
    achievements?: {
      title: string;
      description: string;
      date: Date;
      icon?: string;
    }[];
    languages?: {
      name: string;
      proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
    }[];
    hobbies?: {
      name: string;
      description?: string;
      icon?: string;
    }[];
  };
}
```

### 📞 Contact Page ("Communications Array")

#### Contact Methods
```typescript
interface ContactPage {
  // Quick Contact Buttons
  quickContact: {
    email: {
      address: string;
      action: 'mailto' | 'copy-to-clipboard';
      icon: string;
      label: string;
    };
    whatsapp?: {
      number: string;
      message?: string; // Pre-filled message
      url: string; // wa.me link
      icon: string;
      label: string;
    };
    messenger?: {
      username: string;
      url: string; // m.me link
      icon: string;
      label: string;
    };
    linkedin: {
      profileUrl: string;
      icon: string;
      label: string;
    };
    phone?: {
      number: string;
      action: 'tel' | 'copy-to-clipboard';
      icon: string;
      label: string;
    };
  };
  
  // Contact Form
  contactForm: {
    fields: {
      name: {
        required: true;
        validation: 'min-length';
        placeholder: string;
      };
      email: {
        required: true;
        validation: 'email-format';
        placeholder: string;
      };
      subject: {
        required: false;
        placeholder: string;
      };
      message: {
        required: true;
        validation: 'min-length';
        placeholder: string;
        maxLength: number;
      };
    };
    
    // Form Behavior
    validation: {
      realTime: boolean;
      showErrors: 'on-blur' | 'on-submit' | 'on-change';
      errorMessages: Record<string, string>;
    };
    
    submission: {
      endpoint: string; // API endpoint
      method: 'POST';
      headers: Record<string, string>;
      loading: {
        text: string; // "Sending Transmission..."
        animation: 'spinner' | 'pulse' | 'dots';
      };
      success: {
        message: string; // "Transmission Complete!"
        action: 'reset-form' | 'redirect' | 'show-message';
        duration: number; // Auto-hide after seconds
      };
      error: {
        message: string;
        retry: boolean;
        supportEmail: string;
      };
    };
    
    // Security
    security: {
      reCaptcha: boolean;
      honeypot: boolean; // Hidden field for bot detection
      rateLimiting: {
        maxSubmissions: number;
        timeWindow: number; // In minutes
      };
    };
  };
  
  // Additional Info
  availability: {
    timezone: string;
    preferredContactTime: string;
    responseTime: string; // "Usually responds within 24 hours"
  };
  
  location?: {
    city: string;
    country: string;
    showMap: boolean;
  };
}
```

## 🔧 Admin Dashboard Features

### 🔐 Authentication System

#### Login Page
```typescript
interface LoginPage {
  // Form
  loginForm: {
    fields: {
      email: {
        validation: 'email-format';
        placeholder: string;
      };
      password: {
        validation: 'min-length';
        placeholder: string;
        showToggle: boolean; // Show/hide password
      };
    };
    
    // Additional Options
    rememberMe: boolean;
    forgotPassword: {
      enabled: boolean;
      resetUrl: string;
    };
    
    // Security
    rateLimiting: {
      maxAttempts: number;
      lockoutDuration: number; // In minutes
    };
    twoFactorAuth?: boolean;
  };
  
  // Authentication Flow
  authFlow: {
    provider: 'local' | 'auth0' | 'firebase';
    redirectAfterLogin: string; // Dashboard home
    sessionDuration: number; // In hours
    refreshToken: boolean;
  };
}
```

#### Password Reset
```typescript
interface PasswordReset {
  requestReset: {
    email: string;
    emailTemplate: string;
    tokenExpiry: number; // In hours
  };
  
  resetForm: {
    newPassword: {
      validation: 'strong-password';
      confirmPassword: boolean;
    };
    tokenValidation: boolean;
  };
}
```

### 🏠 Dashboard Home

#### Overview Dashboard
```typescript
interface DashboardHome {
  // Statistics Cards
  stats: {
    totalProjects: {
      count: number;
      change: number; // Percentage change from last period
      timeframe: 'week' | 'month' | 'year';
    };
    publishedProjects: {
      count: number;
      percentage: number; // Of total projects
    };
    contactMessages: {
      unread: number;
      total: number;
      recentActivity: boolean;
    };
    portfolioViews?: {
      count: number;
      change: number;
      source: 'analytics-api';
    };
  };
  
  // Recent Activity
  recentActivity: {
    items: {
      type: 'project-created' | 'project-updated' | 'message-received' | 'profile-updated';
      title: string;
      description: string;
      timestamp: Date;
      link?: string;
    }[];
    maxItems: number; // 10-15 items
  };
  
  // Quick Actions
  quickActions: {
    buttons: {
      label: string;
      icon: string;
      route: string;
      color: 'primary' | 'secondary' | 'success';
    }[];
  };
  
  // System Status
  systemStatus: {
    portfolioSite: 'online' | 'offline' | 'maintenance';
    database: 'connected' | 'disconnected';
    fileStorage: 'available' | 'unavailable';
    lastUpdated: Date;
  };
}
```

### 📂 Project Management

#### Projects List View
```typescript
interface ProjectsList {
  // Table/Grid View
  display: {
    viewMode: 'table' | 'grid' | 'list';
    sortable: boolean;
    columns: {
      thumbnail: boolean;
      title: boolean;
      status: boolean;
      technologies: boolean;
      lastModified: boolean;
      actions: boolean;
    };
  };
  
  // Filtering & Search
  filters: {
    status: ['all', 'published', 'draft', 'archived'];
    technology: string[]; // Dynamic from database
    dateRange: {
      from?: Date;
      to?: Date;
    };
    featured: boolean;
  };
  
  search: {
    fields: ['title', 'description', 'technologies'];
    debounceMs: number; // 300ms
    realTime: boolean;
  };
  
  // Bulk Actions
  bulkActions: {
    selection: 'checkbox' | 'none';
    actions: [
      'delete',
      'change-status',
      'add-technology',
      'export'
    ];
  };
  
  // Pagination
  pagination: {
    itemsPerPage: number; // 20
    showTotal: boolean;
    quickJump: boolean;
  };
}
```

#### Project Editor
```typescript
interface ProjectEditor {
  // Form Layout
  layout: {
    sections: [
      'basic-info',
      'content',
      'media',
      'technologies',
      'links',
      'seo',
      'settings'
    ];
    autosave: {
      enabled: boolean;
      intervalMs: number; // 30 seconds
      indicator: boolean;
    };
  };
  
  // Basic Information
  basicInfo: {
    title: {
      required: true;
      maxLength: number;
      slugGeneration: boolean; // Auto-generate from title
    };
    slug: {
      editable: boolean;
      validation: 'url-safe';
      uniqueCheck: boolean;
    };
    status: {
      options: ['draft', 'published', 'archived'];
      default: 'draft';
    };
    featured: {
      type: 'boolean';
      description: string;
    };
  };
  
  // Content Sections
  content: {
    shortDescription: {
      type: 'textarea';
      maxLength: number; // 200 characters
      characterCounter: boolean;
    };
    fullDescription: {
      type: 'rich-text-editor';
      features: [
        'bold', 'italic', 'underline',
        'headings', 'lists', 'links',
        'code-blocks', 'blockquotes'
      ];
      placeholder: string;
    };
    features?: {
      type: 'repeater';
      fields: {
        title: string;
        description: string;
        icon?: string;
      };
    };
    challenges?: {
      type: 'rich-text-editor';
      features: ['basic-formatting'];
    };
  };
  
  // Media Management
  media: {
    images: {
      type: 'file-upload';
      multiple: boolean;
      maxFiles: number; // 10
      fileTypes: ['jpg', 'jpeg', 'png', 'webp'];
      maxSize: number; // 5MB per file
      dragAndDrop: boolean;
      preview: boolean;
      ordering: boolean; // Drag to reorder
      altText: boolean; // Required for each image
    };
    thumbnail: {
      type: 'file-upload';
      required: boolean;
      autoGenerate: boolean; // From first image
      cropTool: boolean;
    };
  };
  
  // Technologies
  technologies: {
    type: 'tag-input';
    suggestions: string[]; // Pre-defined technologies
    categories: ['language', 'framework', 'tool', 'database'];
    icons: {
      autoDetect: boolean; // Based on technology name
      customUpload: boolean;
    };
    validation: {
      maxTags: number; // 15
      uniqueCheck: boolean;
    };
  };
  
  // External Links
  links: {
    liveDemo: {
      type: 'url';
      validation: 'valid-url';
      preview: boolean; // Show link preview
    };
    sourceCode: {
      type: 'url';
      validation: 'valid-url';
      multiple: boolean; // Multiple repositories
    };
    documentation: {
      type: 'url';
      validation: 'valid-url';
      optional: boolean;
    };
  };
  
  // SEO Settings
  seo: {
    metaTitle: {
      type: 'text';
      maxLength: number; // 60 characters
      autoGenerate: boolean; // From project title
    };
    metaDescription: {
      type: 'textarea';
      maxLength: number; // 160 characters
      autoGenerate: boolean; // From short description
    };
    keywords: {
      type: 'tag-input';
      suggestions: string[];
      maxTags: number; // 10
    };
    ogImage: {
      type: 'file-upload';
      autoGenerate: boolean; // From project thumbnail
      dimensions: '1200x630';
    };
  };
  
  // Publishing Settings
  settings: {
    publishDate: {
      type: 'datetime';
      futurePublishing: boolean;
    };
    visibility: {
      options: ['public', 'unlisted', 'private'];
      default: 'public';
    };
    comments: {
      enabled: boolean;
      moderation: boolean;
    };
  };
  
  // Form Actions
  actions: {
    save: {
      label: 'Save Draft';
      shortcut: 'Ctrl+S';
    };
    publish: {
      label: 'Publish';
      confirmation: boolean;
    };
    preview: {
      label: 'Preview';
      newTab: boolean;
    };
    delete: {
      label: 'Delete';
      confirmation: boolean;
      permanentAction: boolean;
    };
  };
}
```

### 👤 Profile Management

#### Profile Editor
```typescript
interface ProfileEditor {
  // Personal Information
  personalInfo: {
    name: {
      type: 'text';
      required: boolean;
      maxLength: number;
    };
    title: {
      type: 'text';
      placeholder: string; // "Software Engineer"
      maxLength: number;
    };
    tagline: {
      type: 'text';
      placeholder: string; // "Architecting Digital Worlds"
      maxLength: number;
    };
    bio: {
      type: 'rich-text-editor';
      features: ['basic-formatting', 'links'];
      maxLength: number; // 1000 words
    };
    profileImage: {
      type: 'file-upload';
      aspectRatio: '1:1';
      cropTool: boolean;
      maxSize: number; // 2MB
    };
    resume: {
      type: 'file-upload';
      fileTypes: ['pdf'];
      maxSize: number; // 5MB
      downloadable: boolean;
    };
  };
  
  // Professional Experience
  experience: {
    type: 'repeater';
    fields: {
      title: {
        type: 'text';
        required: boolean;
      };
      company: {
        type: 'text';
        required: boolean;
      };
      location: {
        type: 'text';
        placeholder: string; // "City, Country"
      };
      startDate: {
        type: 'date';
        required: boolean;
      };
      endDate: {
        type: 'date';
        optional: boolean; // Current position
      };
      description: {
        type: 'rich-text-editor';
        features: ['basic-formatting', 'lists'];
      };
      achievements: {
        type: 'text-list';
        placeholder: string; // "Key achievement"
      };
      technologies: {
        type: 'tag-input';
        suggestions: string[];
      };
      companyLogo: {
        type: 'file-upload';
        optional: boolean;
      };
    };
    ordering: boolean; // Drag to reorder
    maxItems: number; // 20
  };
  
  // Education
  education: {
    type: 'repeater';
    fields: {
      degree: {
        type: 'text';
        required: boolean;
      };
      institution: {
        type: 'text';
        required: boolean;
      };
      graduationDate: {
        type: 'date';
        required: boolean;
      };
      gpa: {
        type: 'text';
        optional: boolean;
      };
      relevantCourses: {
        type: 'text-list';
        optional: boolean;
      };
      institutionLogo: {
        type: 'file-upload';
        optional: boolean;
      };
    };
  };
  
  // Skills
  skills: {
    type: 'grouped-repeater';
    groups: {
      name: {
        type: 'text';
        placeholder: string; // "Programming Languages"
      };
      items: {
        type: 'repeater';
        fields: {
          name: {
            type: 'text';
            required: boolean;
          };
          proficiency: {
            type: 'range';
            min: 1;
            max: 5;
            default: 3;
          };
          yearsOfExperience: {
            type: 'number';
            optional: boolean;
          };
          icon: {
            type: 'file-upload';
            optional: boolean;
            suggestions: string[]; // Common technology icons
          };
        };
      };
    };
  };
  
  // Contact Information
  contact: {
    email: {
      type: 'email';
      required: boolean;
      validation: 'email-format';
    };
    phone: {
      type: 'tel';
      optional: boolean;
      formatting: boolean; // Auto-format phone number
    };
    location: {
      city: {
        type: 'text';
        optional: boolean;
      };
      country: {
        type: 'text';
        optional: boolean;
      };
      timezone: {
        type: 'select';
        options: string[]; // List of timezones
      };
    };
    socialLinks: {
      linkedin: {
        type: 'url';
        validation: 'linkedin-url';
      };
      github: {
        type: 'url';
        validation: 'github-url';
      };
      twitter: {
        type: 'url';
        validation: 'twitter-url';
        optional: boolean;
      };
      whatsapp: {
        type: 'tel';
        formatting: 'international';
        optional: boolean;
      };
      messenger: {
        type: 'text';
        placeholder: string; // "Facebook username"
        optional: boolean;
      };
    };
  };
}
```

### 📨 Contact Messages

#### Messages Dashboard
```typescript
interface MessagesDashboard {
  // Message List
  messagesList: {
    display: {
      viewMode: 'table' | 'card';
      defaultSort: 'newest-first';
      columns: {
        status: boolean; // New, Read, Replied
        sender: boolean;
        subject: boolean;
        date: boolean;
        actions: boolean;
      };
    };
    
    // Status Management
    statusFilters: {
      all: boolean;
      new: boolean;
      read: boolean;
      replied: boolean;
      archived: boolean;
    };
    
    // Bulk Actions
    bulkActions: {
      markAsRead: boolean;
      markAsReplied: boolean;
      archive: boolean;
      delete: boolean;
    };
    
    // Auto-refresh
    realTime: {
      enabled: boolean;
      intervalMs: number; // 30 seconds
      notification: boolean; // Browser notification for new messages
    };
  };
  
  // Message Detail View
  messageDetail: {
    layout: 'modal' | 'side-panel' | 'full-page';
    
    // Message Information
    messageInfo: {
      sender: {
        name: string;
        email: string;
        ipAddress: string; // For security/spam detection
        userAgent: string;
      };
      timestamp: Date;
      subject?: string;
      message: string;
      status: 'new' | 'read' | 'replied' | 'archived';
    };
    
    // Actions
    actions: {
      reply: {
        enabled: boolean;
        template: string; // Email template
        openInEmailClient: boolean;
      };
      markAsRead: boolean;
      markAsReplied: boolean;
      archive: boolean;
      delete: {
        enabled: boolean;
        confirmation: boolean;
      };
      markAsSpam: {
        enabled: boolean;
        autoBlock: boolean; // Block email/IP
      };
    };
    
    // Additional Info
    metadata: {
      showTechnicalDetails: boolean;
      responseTime: string; // Time since message received
      messageCount: number; // Total messages from this sender
    };
  };
  
  // Reply System
  replySystem: {
    quickReplies: {
      templates: {
        name: string;
        subject: string;
        body: string;
      }[];
      customTemplates: boolean;
    };
    
    composer: {
      richTextEditor: boolean;
      attachments: boolean;
      scheduling: boolean; // Schedule reply for later
      autoSignature: boolean;
    };
    
    tracking: {
      markAsReplied: boolean; // Auto-mark when reply sent
      recordReplyTime: boolean;
    };
  };
}
```

### ⚙️ Settings Management

#### General Settings
```typescript
interface GeneralSettings {
  // Site Information
  siteInfo: {
    siteName: {
      type: 'text';
      required: boolean;
      maxLength: number;
    };
    siteDescription: {
      type: 'textarea';
      maxLength: number;
    };
    siteUrl: {
      type: 'url';
      validation: 'valid-url';
    };
    favicon: {
      type: 'file-upload';
      fileTypes: ['ico', 'png'];
      dimensions: '32x32';
    };
    logo: {
      type: 'file-upload';
      fileTypes: ['png', 'svg'];
      optional: boolean;
    };
  };
  
  // SEO Defaults
  seoDefaults: {
    defaultMetaTitle: {
      type: 'text';
      maxLength: number; // 60 characters
    };
    defaultMetaDescription: {
      type: 'textarea';
      maxLength: number; // 160 characters
    };
    defaultKeywords: {
      type: 'tag-input';
      maxTags: number;
    };
    ogImage: {
      type: 'file-upload';
      dimensions: '1200x630';
    };
    googleAnalyticsId: {
      type: 'text';
      pattern: 'GA-' | 'G-';
      optional: boolean;
    };
    googleSearchConsole: {
      type: 'text';
      optional: boolean;
    };
  };
  
  // Email Configuration
  emailSettings: {
    fromEmail: {
      type: 'email';
      required: boolean;
      description: string;
    };
    fromName: {
      type: 'text';
      required: boolean;
    };
    replyToEmail: {
      type: 'email';
      optional: boolean;
    };
    emailProvider: {
      type: 'select';
      options: ['resend', 'sendgrid', 'mailgun', 'smtp'];
    };
    apiKey: {
      type: 'password';
      required: boolean;
      description: string;
    };
  };
  
  // File Storage
  fileStorage: {
    provider: {
      type: 'select';
      options: ['cloudinary', 'aws-s3', 'vercel-blob'];
    };
    configuration: {
      cloudName?: string;
      apiKey?: string;
      apiSecret?: string;
      bucket?: string;
      region?: string;
    };
    limits: {
      maxFileSize: {
        type: 'number';
        unit: 'MB';
        max: 50;
      };
      allowedTypes: {
        type: 'multi-select';
        options: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'pdf', 'doc', 'docx'];
      };
    };
  };
  
  // Security Settings
  security: {
    sessionTimeout: {
      type: 'number';
      unit: 'hours';
      min: 1;
      max: 168; // 1 week
    };
    passwordPolicy: {
      minLength: {
        type: 'number';
        min: 8;
        max: 50;
      };
      requireUppercase: boolean;
      requireNumbers: boolean;
      requireSymbols: boolean;
    };
    rateLimiting: {
      contactForm: {
        maxSubmissions: number;
        timeWindow: number; // minutes
      };
      loginAttempts: {
        maxAttempts: number;
        lockoutDuration: number; // minutes
      };
    };
    twoFactorAuth: {
      enabled: boolean;
      method: 'app' | 'sms' | 'email';
    };
  };
  
  // Backup & Maintenance
  maintenance: {
    automaticBackups: {
      enabled: boolean;
      frequency: 'daily' | 'weekly' | 'monthly';
      retention: number; // number of backups to keep
    };
    maintenanceMode: {
      enabled: boolean;
      message: string;
      allowedIPs: string[]; // IPs that can access during maintenance
    };
    systemHealth: {
      monitoring: boolean;
      alertEmail: string;
      uptimeChecks: boolean;
    };
  };
}
```

## 🔧 Additional Features

### 📊 Analytics & Reporting
```typescript
interface Analytics {
  // Dashboard Widgets
  widgets: {
    portfolioViews: {
      timeRange: 'day' | 'week' | 'month' | 'year';
      chart: 'line' | 'bar';
      realTime: boolean;
    };
    popularProjects: {
      metric: 'views' | 'clicks' | 'time-spent';
      limit: number;
    };
    trafficSources: {
      chart: 'pie' | 'donut';
      showPercentages: boolean;
    };
    contactFormConversions: {
      successRate: boolean;
      abandonmentRate: boolean;
    };
  };
  
  // Reports
  reports: {
    monthly: {
      automated: boolean;
      emailDelivery: boolean;
      format: 'pdf' | 'html';
    };
    custom: {
      dateRange: boolean;
      exportFormats: ['csv', 'pdf', 'json'];
    };
  };
}
```

### 🔔 Notifications System
```typescript
interface NotificationSystem {
  // Admin Notifications
  adminNotifications: {
    newMessages: {
      enabled: boolean;
      method: 'browser' | 'email' | 'both';
      frequency: 'immediate' | 'hourly' | 'daily';
    };
    systemAlerts: {
      enabled: boolean;
      types: ['downtime', 'errors', 'security'];
    };
    weeklyReports: {
      enabled: boolean;
      day: 'monday' | 'friday';
      time: string; // HH:MM format
    };
  };
  
  // User Notifications (Portfolio visitors)
  userNotifications: {
    newProjectAlerts: {
      enabled: boolean;
      subscriptionForm: boolean;
      emailTemplate: string;
    };
    blogUpdates: {
      enabled: boolean;
      rssFeeds: boolean;
    };
  };
}
```

### 🔄 Import/Export Features
```typescript
interface ImportExport {
  // Data Export
  export: {
    projects: {
      format: 'json' | 'csv' | 'markdown';
      includeImages: boolean;
    };
    profile: {
      format: 'json' | 'pdf';
    };
    messages: {
      format: 'csv' | 'json';
      dateRange: boolean;
    };
    fullBackup: {
      format: 'zip';
      includeAssets: boolean;
      encryption: boolean;
    };
  };
  
  // Data Import
  import: {
    projects: {
      sources: ['json', 'csv', 'github-repos'];
      bulkUpload: boolean;
      validation: boolean;
      preview: boolean;
    };
    assets: {
      sources: ['zip', 'folder-upload'];
      autoOrganization: boolean;
    };
  };
}
```

This comprehensive feature specification provides a detailed blueprint for implementing both the portfolio website and admin dashboard with all the requested space-themed functionality and professional content management capabilities.