# Technical Architecture - The Cosmic Architect Portfolio

## 🏗️ System Overview

The Cosmic Architect portfolio consists of two main applications:
1. **Portfolio Website** - Public-facing space-themed portfolio
2. **Admin Dashboard** - Content management system for portfolio updates

### Architecture Pattern
- **Frontend**: Modern SPA (Single Page Application) with SSG (Static Site Generation)
- **Backend**: Serverless API with microservices architecture
- **Database**: NoSQL document store for flexibility
- **Hosting**: JAMstack deployment with CDN

## 🔧 Technology Stack

### Portfolio Website (Frontend)
```javascript
{
  "framework": "Next.js 14",
  "language": "TypeScript",
  "styling": "Tailwind CSS + Framer Motion",
  "stateManagement": "Zustand",
  "routing": "Next.js App Router",
  "animations": "Framer Motion + Three.js",
  "forms": "React Hook Form + Zod",
  "testing": "Jest + Testing Library"
}
```

### Admin Dashboard (Frontend)
```javascript
{
  "framework": "React 18",
  "language": "TypeScript", 
  "styling": "Tailwind CSS + Shadcn/ui",
  "stateManagement": "TanStack Query + Zustand",
  "routing": "React Router v6",
  "forms": "React Hook Form + Zod",
  "richTextEditor": "Tiptap",
  "authentication": "Auth0 / NextAuth.js"
}
```

### Backend API
```javascript
{
  "runtime": "Node.js 18+",
  "framework": "Express.js / Fastify",
  "language": "TypeScript",
  "database": "MongoDB Atlas",
  "orm": "Mongoose",
  "authentication": "JWT + Auth0",
  "fileStorage": "Cloudinary / AWS S3",
  "email": "Resend / SendGrid",
  "validation": "Zod",
  "deployment": "Vercel Functions / Netlify Functions"
}
```

### DevOps & Deployment
```yaml
deployment:
  hosting: "Vercel / Netlify"
  cdn: "Cloudflare"
  monitoring: "Vercel Analytics"
  errors: "Sentry"
  
development:
  bundler: "Vite / Next.js"
  linting: "ESLint + Prettier"
  typeChecking: "TypeScript"
  git: "GitHub with Actions"
```

## 🗄️ Database Schema

### Projects Collection
```typescript
interface Project {
  _id: ObjectId;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  images: {
    url: string;
    alt: string;
    order: number;
  }[];
  technologies: {
    name: string;
    icon: string;
    category: 'language' | 'framework' | 'tool';
  }[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}
```

### User Profile Collection
```typescript
interface UserProfile {
  _id: ObjectId;
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    profileImage: string;
    resume: string;
  };
  experience: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    description: string;
    technologies: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    graduationDate: Date;
    gpa?: string;
  }[];
  skills: {
    category: string;
    items: {
      name: string;
      proficiency: number; // 1-5
      icon?: string;
    }[];
  }[];
  contact: {
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    whatsapp?: string;
    messenger?: string;
  };
  updatedAt: Date;
}
```

### Contact Messages Collection
```typescript
interface ContactMessage {
  _id: ObjectId;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ipAddress: string;
  userAgent: string;
  createdAt: Date;
  repliedAt?: Date;
}
```

### Site Settings Collection
```typescript
interface SiteSettings {
  _id: ObjectId;
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
```

## 🔗 API Endpoints

### Public API (Portfolio Website)
```typescript
// GET /api/projects
// GET /api/projects/[slug]
// GET /api/profile
// GET /api/settings
// POST /api/contact
```

### Admin API (Dashboard)
```typescript
// Authentication
// POST /api/auth/login
// POST /api/auth/logout
// GET /api/auth/me

// Projects CRUD
// GET /api/admin/projects
// POST /api/admin/projects
// PUT /api/admin/projects/[id]
// DELETE /api/admin/projects/[id]

// Profile Management
// GET /api/admin/profile
// PUT /api/admin/profile

// Contact Messages
// GET /api/admin/messages
// PUT /api/admin/messages/[id]
// DELETE /api/admin/messages/[id]

// File Upload
// POST /api/admin/upload
// DELETE /api/admin/upload/[id]

// Settings
// GET /api/admin/settings
// PUT /api/admin/settings
```

## 🔐 Security Architecture

### Authentication & Authorization
```typescript
// JWT-based authentication for admin
// Route protection middleware
// Role-based access control (RBAC)
// Session management with refresh tokens

interface AuthContext {
  user: {
    id: string;
    email: string;
    role: 'admin' | 'editor';
  } | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}
```

### Data Protection
- **Input Validation**: Zod schemas for all inputs
- **SQL Injection**: MongoDB with parameterized queries
- **XSS Protection**: Content Security Policy headers
- **CSRF Protection**: Same-site cookies and CSRF tokens
- **Rate Limiting**: Express rate limit middleware
- **File Upload**: Secure file validation and storage

### Environment Variables
```env
# Database
DATABASE_URL=mongodb+srv://...
DATABASE_NAME=cosmic_portfolio

# Authentication
JWT_SECRET=...
JWT_EXPIRES_IN=7d
AUTH0_DOMAIN=...
AUTH0_CLIENT_ID=...

# File Storage
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Email Service
RESEND_API_KEY=...
SMTP_FROM_EMAIL=...

# External APIs
GOOGLE_ANALYTICS_ID=...
```

## 🚀 Performance Optimization

### Portfolio Website
- **Static Generation**: Pre-render pages at build time
- **Image Optimization**: Next.js Image component with WebP
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Components and images
- **CDN**: Serve static assets from edge locations
- **Caching**: Aggressive caching strategies

### Admin Dashboard
- **Virtual Scrolling**: For large data lists
- **Optimistic Updates**: Immediate UI feedback
- **Background Sync**: Queue updates when offline
- **Image Compression**: Client-side before upload
- **Debounced Search**: Prevent excessive API calls

### Backend API
- **Database Indexing**: Optimized queries
- **Response Caching**: Redis for frequently accessed data
- **Compression**: Gzip/Brotli compression
- **Connection Pooling**: Efficient database connections
- **Query Optimization**: Aggregation pipelines

## 📱 Progressive Web App (PWA)

### Service Worker
```typescript
// Cache strategies for different resource types
// Offline fallback pages
// Background sync for form submissions
// Push notifications for admin updates
```

### Manifest Configuration
```json
{
  "name": "The Cosmic Architect",
  "short_name": "Cosmic Portfolio",
  "description": "Software Engineer Portfolio",
  "theme_color": "#0A192F",
  "background_color": "#00001a",
  "display": "standalone",
  "orientation": "portrait",
  "start_url": "/",
  "icons": [...]
}
```

## 🔄 State Management

### Portfolio Website
```typescript
// Zustand store for client state
interface PortfolioStore {
  // UI State
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  modalOpen: boolean;
  
  // Data State
  projects: Project[];
  profile: UserProfile;
  
  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  toggleSidebar: () => void;
  setProjects: (projects: Project[]) => void;
}
```

### Admin Dashboard
```typescript
// TanStack Query for server state
// Zustand for UI state
interface AdminStore {
  // UI State
  sidebarCollapsed: boolean;
  currentView: string;
  
  // Form State
  isDirty: boolean;
  isSubmitting: boolean;
  
  // Actions
  setSidebarCollapsed: (collapsed: boolean) => void;
  setCurrentView: (view: string) => void;
}
```

## 🧪 Testing Strategy

### Unit Testing
- **Components**: React Testing Library
- **Utilities**: Jest for pure functions
- **API Routes**: Supertest for endpoint testing
- **Database**: MongoDB Memory Server

### Integration Testing
- **User Flows**: Playwright for E2E testing
- **API Integration**: Test complete request/response cycles
- **Authentication**: Test login/logout flows

### Performance Testing
- **Lighthouse**: Automated performance audits
- **Bundle Analysis**: Monitor bundle size
- **Load Testing**: Stress test API endpoints

## 📊 Monitoring & Analytics

### Application Monitoring
- **Error Tracking**: Sentry for error monitoring
- **Performance**: Vercel Analytics / Google Analytics
- **Uptime**: StatusCake or similar service
- **API Monitoring**: Custom health check endpoints

### User Analytics
- **Page Views**: Google Analytics 4
- **User Behavior**: Hotjar for heatmaps
- **Conversion Tracking**: Contact form submissions
- **Performance Metrics**: Core Web Vitals

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
name: Deploy Portfolio
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build project
        run: npm run build
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
```

## 🌐 Deployment Architecture

### Production Environment
```yaml
Portfolio Website:
  - Vercel (Primary)
  - Cloudflare CDN
  - Custom Domain with SSL

Admin Dashboard:
  - Vercel (Separate deployment)
  - Password protected subdomain
  - Admin-only access

Database:
  - MongoDB Atlas (M0 - M2 cluster)
  - Automated backups
  - Connection pooling

File Storage:
  - Cloudinary for images
  - Automatic optimization
  - CDN distribution
```

### Development Environment
```yaml
Local Development:
  - Docker Compose for services
  - MongoDB local instance
  - Hot reload for all applications
  - Mock services for testing

Staging Environment:
  - Preview deployments on Vercel
  - Separate database instance
  - Feature branch deployments
```

This architecture provides a scalable, maintainable, and performant foundation for the space-themed portfolio website and admin dashboard.