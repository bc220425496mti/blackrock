# Portfolio Application

## Overview

This is a modern full-stack portfolio application built with React/TypeScript for the frontend and Express.js for the backend. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers. It features a sleek, animated design with glassmorphism effects, particle backgrounds, and smooth scroll animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark theme with gradient accents
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Custom CSS animations with Intersection Observer API for scroll-triggered animations

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API endpoints for contacts, experiences, skills, and projects
- **Error Handling**: Centralized error middleware with structured error responses
- **Development**: Custom Vite integration for hot module replacement and development server

### Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver for cloud deployment
- **Schema**: Shared TypeScript schema definitions between frontend and backend
- **Validation**: Zod schemas for runtime type validation and API contract enforcement
- **Fallback**: In-memory storage implementation for development and testing

### Component Architecture
- **Design System**: Consistent component library with variant-based styling
- **Layout**: Responsive design with mobile-first approach
- **Performance**: Lazy loading, intersection observers, and optimized animations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

### Development Experience
- **Build System**: Vite for fast development and optimized production builds
- **Type Safety**: Full TypeScript coverage with strict type checking
- **Code Quality**: ESLint and Prettier integration (configured via package.json)
- **Development Tools**: Hot reload, error overlays, and development banners

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL database for production
- **Connection**: Database URL-based connection with environment variable configuration

### UI/UX Libraries
- **Radix UI**: Comprehensive set of accessible, headless UI components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Touch-friendly carousel component

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **Replit Integration**: Development environment optimizations and deployment tools

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Fonts and Assets
- **Google Fonts**: Inter, JetBrains Mono, and other modern typefaces
- **Unsplash**: Placeholder images for professional appearance
- **Font Awesome**: Icon library for enhanced visual elements

### Deployment
- **Replit**: Cloud-based development and deployment platform
- **Environment Variables**: Secure configuration management for database connections
- **Production Build**: Optimized static assets with ESM module bundling