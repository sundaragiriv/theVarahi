# Varahi Enterprise CX & AI Platform - AI Agent Instructions

## Project Architecture

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router DOM + React Helmet Async + Lottie React

**Structure:** Single-page application with client-side routing, component-based architecture focused on enterprise CX and AI services presentation.

## Core Patterns

### Component Organization
- **Pages** (`src/pages/`): Route-level components with SEO optimization via React Helmet
- **Components** (`src/components/`): Reusable UI components with consistent animation patterns
- **Router** (`src/router/AppRouter.tsx`): Centralized routing with nested paths for services, industries, about sections
- **Utils** (`src/utils/seoConfig.ts`): Structured SEO configuration for all pages

### Animation & UX Standards
- **Framer Motion**: Consistent animation patterns using `motion.div` with `whileHover`, `whileTap`, `whileInView`
- **Accessibility**: All animations respect `prefers-reduced-motion` (see `src/styles/animations.css`)
- **Performance**: Use `viewport={{ once: true }}` for scroll-triggered animations to prevent re-triggering
- **Stagger patterns**: Container/item variants for sequential animations (see `IconTiles.tsx`)

### Styling Architecture
- **Tailwind Config** (`tailwind.config.js`): Extended color palette with `brand`, `accent`, `turmeric` scales for consistent theming
- **Component Classes**: Standardized button variants (`btn-primary`, `btn-secondary`) and spacing utilities
- **Grid Background**: Reusable `GridBackground` component with configurable opacity/size for subtle texture
- **SAP Design Influence**: Typography using SAP 72 font family, professional color schemes

### Premium Effects System
- **Glass Cards**: Consistent `backdrop-blur-sm` + `bg-white/80` pattern for premium card effects
- **Glow Effects**: CSS classes `glow-effect` and `hover:shadow-glow` for button enhancement
- **Effects CSS** (`src/styles/effects.css`): Animation utilities and reduced motion media queries
- **Debug Mode**: `VITE_DEBUG_SPARKLE=1` reveals visual debugging for premium effects

### Navigation & Routing
- **HeaderNav** (`src/components/HeaderNav.tsx`): Adaptive header with scroll detection, theme switching (light/dark based on page)
- **Mega Panel**: Dropdown navigation for complex service hierarchies
- **Mobile-first**: Responsive navigation with mobile menu states

## Development Workflows

### Local Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (Vite) on http://localhost:5173
VITE_DEBUG_SPARKLE=1 npm run dev  # Enable visual debugging for premium effects
npm run build       # Production build
npm run preview     # Preview production build
```

### Testing & QA
- **Visual QA**: Use `VITE_DEBUG_SPARKLE=1` to verify premium effects (sparkles, glow effects)
- **Accessibility**: Test with OS "Reduce motion" settings - all animations should disable
- **Navigation**: Verify all header links route to actual pages, check scroll spy behavior
- **Premium Effects**: Verify glass cards with backdrop-blur and glow button effects
- **Responsive**: Test mobile navigation states and breakpoint behavior
- **Performance**: Check Framer Motion animations use `viewport={{ once: true }}` for scroll triggers

## Critical Conventions

### Component Props Pattern
```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  // Always include optional className for composition
}

// Glass Card Component Example
interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
}
```

### Animation Variants
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
```

### SEO Implementation
- Each page uses `react-helmet-async` for meta tags
- Structured data for Organization schema (see `HomePage.tsx`)
- Canonical URLs and OpenGraph tags via `seoConfig.ts`

### Business Domain
- **Services**: SAP S/4HANA, CX optimization, AI orchestration, enterprise automation
- **Industries**: Manufacturing, Financial Services, CPG, Utilities
- **Positioning**: Premium enterprise consulting with measurable ROI (40% improvement, 90-day deployment)

## Key Files for Context
- `src/router/AppRouter.tsx` - Complete routing structure
- `src/components/HeaderNav.tsx` - Navigation patterns and responsive behavior  
- `src/pages/HomePage.tsx` - SEO and structured data patterns
- `tailwind.config.js` - Design system colors and utilities
- `src/utils/seoConfig.ts` - Page-specific SEO configurations

## Integration Points
- **Framer Motion**: Used extensively for micro-interactions and scroll animations
- **Lottie React**: For complex animations (network animations in hero)
- **Lucide React**: Icon system for consistent visual language
- **React Router DOM**: Client-side routing with nested paths for services/industries

## Production Notes
- **Status**: Production-ready with 95/100 readiness score (see `FINAL-STYLING-AUDIT.md`)
- **Performance**: Optimized animations with `prefers-reduced-motion` compliance
- **Browser Support**: Modern browsers with CSS custom properties and backdrop-filter
- **Deployment**: Static site suitable for CDN deployment

When adding new components, follow the established animation patterns, include proper TypeScript interfaces, and ensure accessibility compliance with reduced motion preferences. Reference `FINAL-STYLING-AUDIT.md` for production styling standards.