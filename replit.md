# Medical AI Diagnostic Assistant

## Overview

This is a full-stack medical image analysis application that uses AI to analyze medical images and provide diagnostic insights. The system allows users to upload medical images, provide clinical history, and receive AI-powered analysis with explanations and recommendations.

**Key Features:**
- Medical image upload and analysis
- Clinical history integration
- AI-powered diagnostic insights
- Detailed explanations of AI reasoning
- Medical recommendations
- Educational disclaimer for demonstration purposes

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: React Query (TanStack Query) for server state
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom theming

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful endpoints
- **File Handling**: Multer for multipart/form-data processing
- **Development**: Hot module replacement via Vite integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured via Drizzle)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Fallback Storage**: In-memory storage implementation for development
- **File Storage**: Base64 encoding for image data storage
- **Session Management**: Connect-pg-simple for PostgreSQL session store

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication structure
- **Medical Analyses Table**: Stores image data, clinical history, and AI analysis results
- **Type Safety**: Zod schemas for runtime validation

### AI Integration (`server/services/openai.ts`)
- **AI Provider**: OpenAI GPT-4o for image analysis
- **Analysis Pipeline**: Medical image processing with clinical context
- **Output Formats**: Structured findings, explanations, and recommendations

### Frontend Components
- **Medical Upload**: Drag-and-drop image upload with validation
- **Clinical History Form**: Patient information and medical background
- **Analysis Results**: Structured display of AI findings
- **AI Explanation**: Detailed methodology and reasoning
- **Recommendations**: Categorized medical guidance
- **Documentation Page**: Comprehensive user guide and technical specifications
- **About Page**: Platform information, features, and technology stack
- **Contact Page**: Professional contact form with email integration
- **Navigation Header**: Active page highlighting and route management

### Storage Abstraction (`server/storage.ts`)
- **Interface**: IStorage for consistent data access patterns
- **Memory Implementation**: Development-focused in-memory storage
- **Database Ready**: Prepared for PostgreSQL integration

## Data Flow

1. **Image Upload**: User uploads medical image via drag-and-drop interface
2. **Clinical History**: Optional patient information and medical background
3. **AI Processing**: Image converted to base64 and sent to OpenAI API
4. **Analysis Generation**: AI analyzes image with clinical context
5. **Result Storage**: Analysis results stored in database/memory
6. **UI Display**: Structured presentation of findings and recommendations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database operations
- **express**: Web server framework
- **multer**: File upload handling
- **openai**: AI analysis integration
- **@sendgrid/mail**: Email service for contact form functionality

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **wouter**: Lightweight React router

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Type Checking**: TypeScript compilation verification

### Environment Configuration
- **Database**: `DATABASE_URL` for PostgreSQL connection
- **AI Service**: `OPENAI_API_KEY` for image analysis
- **Node Environment**: `NODE_ENV` for development/production modes

### Production Deployment
- **Start Command**: `node dist/index.js`
- **Static Assets**: Served from `dist/public`
- **Database Migrations**: `drizzle-kit push` for schema updates

### Development Setup
- **Dev Server**: `tsx server/index.ts` with hot reload
- **Frontend**: Vite dev server with HMR
- **Type Safety**: Incremental TypeScript compilation

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 28, 2025. Initial setup
- June 28, 2025. Added comprehensive documentation and about pages with navigation
- June 28, 2025. Added contact form with SendGrid email integration and demo fallback
- June 28, 2025. Updated with developer contact details and branding for Lokesh Gavara