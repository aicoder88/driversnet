# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a standalone Next.js 15 presentation application using the Pages Router for DriverNetwork's business presentation. The app is a single-page interactive slideshow with 18 comprehensive slides covering services, case studies, and business proposals.

### Key Components Structure

- **Main Component**: `/pages/index.tsx` - Contains all presentation logic, slide content, and state management in a single large component (~2000+ lines)
- **UI Components**: `/src/components/ui/` - shadcn/ui pattern components (Button, Card, Badge, Container)
- **Utilities**: `/src/lib/utils.ts` - Single utility function for className merging using tailwind-merge and clsx

### State Management

The main component uses React useState hooks for:
- `activeTab` - Current slide identifier from predefined tabs array
- Analytics tracking (slide views, navigation actions, time spent)
- UI states (fullscreen, thumbnails, speaker notes, search, touch gestures)
- Presentation features (timer, search results, export status)

### Slide Navigation System

- **Slide IDs**: Managed in `tabs` array with 19 predefined slide identifiers
- **Navigation Methods**: Keyboard shortcuts, touch gestures, click navigation
- **Analytics**: Comprehensive tracking of user interactions and viewing patterns
- **Persistence**: Saves progress to localStorage

### Technology Stack

- **Framework**: Next.js 15 with Pages Router
- **Styling**: Tailwind CSS with shadcn/ui components using CSS custom properties
- **Charts**: Recharts library for data visualizations
- **SEO**: next-seo for meta tags
- **TypeScript**: Strict mode enabled

### Key Features

- Interactive presentation with 18 slides
- Full responsive design with mobile touch support
- Dark mode compatibility via CSS custom properties
- Search functionality across slide content
- Analytics and presentation timer
- Export capabilities and speaker notes
- Keyboard shortcuts (arrows, space, F for fullscreen, S for search)

### Component Patterns

- Uses class-variance-authority (cva) for component variants
- shadcn/ui pattern with Tailwind CSS custom properties
- Comprehensive prop interfaces with TypeScript
- forwardRef pattern for component composition

### Data Visualization

Charts are defined inline within the main component using static data arrays. Recharts components (BarChart, PieChart, LineChart, AreaChart) are imported and configured directly in JSX.