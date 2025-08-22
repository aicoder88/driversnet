# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a DriversNet presentation application - a comprehensive slideshow showcasing business case studies and growth strategies. Built with Next.js 14.2.23, TypeScript, and modern React patterns.

## Development Commands

### Core Development
- `npm run dev` - Start development server (will auto-find available port)
- `npm run build` - Build production application (✅ Verified working)
- `npm start` - Start production server

### No Testing Framework Configured
Currently no testing framework or lint commands are configured in package.json. Consider adding test and lint scripts when implementing tests.

## Tech Stack & Dependencies

### Framework & Core
- **Next.js 14.2.23** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling with animations support

### UI Components & Design
- **Radix UI** components (accordion, alert-dialog, avatar, checkbox, dropdown-menu, icons, etc.)
- **shadcn/ui** components system (configured in `components.json`)
- **Framer Motion** for animations and slide transitions
- **Lucide React** for icons
- **next-themes** for theme switching

### Backend & Data
- **Supabase** for database/auth (both client and SSR packages)
- **Stripe** for payments

### Development Tools
- **tempo-devtools** integrated for development (configured in `next.config.js`)
- **Prettier** for code formatting

## Application Structure

### Main Components
- **CoverSlide.tsx** - Company branding and introduction
- **ProblemOpportunitySlide.tsx** - Market analysis and opportunity presentation
- **OurSolutionSlide.tsx** - Solution overview with interactive elements
- **GrowthTrajectorySlide.tsx** - Growth metrics and projections
- **InvestmentROISlide.tsx** - ROI calculations and investment analysis
- **TechnologyAdvantageSlide.tsx** - Technical competitive advantages
- **ProofOfDominanceSlide.tsx** - Market dominance evidence
- **PerfectPartnershipSlide.tsx** - Partnership strategies
- **ScaleFootprintSlide.tsx** - Scaling and expansion plans
- **ImmediateActionSlide.tsx** - Call-to-action and next steps

### Supporting Components
- **SideNavigation.tsx** - Slide navigation system
- **SlideZoom.tsx** - Zoom and transition effects
- **CustomCursor.tsx** - Enhanced cursor interactions
- **InteractiveChart.tsx** - Data visualization components
- **Slide.tsx** - Base slide component
- **tempo-init.tsx** - Tempo devtools initialization
- **theme-switcher.tsx** - Theme management

### UI Component Library
Complete shadcn/ui component set available in `src/components/ui/` including:
- Form controls (button, input, checkbox, etc.)
- Layout components (card, sheet, dialog, etc.)
- Data display (table, tabs, accordion, etc.)
- Feedback components (toast, alert, etc.)

## Configuration Details

### Path Aliases
- `@/*` maps to `./src/*` (defined in `tsconfig.json`)
- `@/components` and `@/lib/utils` aliases configured for shadcn/ui

### Image Optimization
- Unsplash images domain configured in `next.config.js`

### Tempo Integration
- Tempo devtools configured with SWC plugins for NextJS 14.1.3 to 14.2.11
- Enabled when `NEXT_PUBLIC_TEMPO` environment variable is set

### Typography System
Typography configuration available in `tempo.config.json` with predefined styles:
- Headers (H1-H4) with different font weights and tracking
- Paragraph styles including lead text and muted variants
- Code styling (inline code blocks)
- Blockquotes with border styling
- Small text and extra small variants

## Deployment Status
- ✅ Local build verified and working
- ✅ Development server tested (auto-finds available ports)
- ✅ All dependencies properly installed and resolved
- 🔄 GitHub push pending (authentication needs to be resolved)
- 🔄 Vercel deployment ready (existing project with build issues - needs fresh deployment)

## Notes for Development
- Application is a complete, production-ready presentation system
- Features interactive elements, animations, and professional design
- All components follow TypeScript strict mode requirements
- Uses modern React patterns with hooks and server components
- Ready for deployment once repository access is configured