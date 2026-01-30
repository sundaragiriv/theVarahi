# Varahi Enterprise CX & AI Platform - AI Agent Instructions

## Project Architecture

**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + React Router DOM + React Helmet Async + EmailJS

**Structure:** Single-page application with client-side routing, component-based architecture focused on enterprise CX and AI services presentation.

**Build System:** Vite with manual code splitting (`vite.config.ts`):
- `vendor` chunk: React core libraries
- `router` chunk: React Router DOM
- `animations` chunk: Framer Motion
- `icons` chunk: Lucide React

## Core Patterns

### Component Organization
- **Pages** (`src/pages/`): Route-level components with SEO optimization via React Helmet Async
- **Components** (`src/components/`): Reusable UI components with consistent animation patterns
- **Router** (`src/router/AppRouter.tsx`): Centralized routing with nested paths for services, industries, about, resources, contact sections
- **Services** (`src/services/`): Business logic layer (e.g., `emailService.ts` for EmailJS integration)
- **Utils** (`src/utils/seoConfig.ts`): Structured SEO configuration for all pages with business schema data

### Animation & UX Standards
- **Framer Motion**: Consistent animation patterns using `motion.div` with `whileHover`, `whileTap`, `whileInView`
- **Accessibility**: All animations MUST respect `prefers-reduced-motion` (enforced in `src/styles/animations.css`)
- **Performance**: ALWAYS use `viewport={{ once: true }}` for scroll-triggered animations to prevent re-triggering
- **Stagger patterns**: Use `FluidTypography` component with `staggerChildren` prop for sequential text animations
- **Common animation pattern**:
  ```tsx
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
  ```

### Styling Architecture
- **Tailwind Config** (`tailwind.config.js`): Extended color palette with `brand`, `accent`, `turmeric`, `finquick`, `gradient-finquick` scales
- **Component Classes** (`src/index.css`): Standardized utilities:
  - Buttons: `.btn-primary`, `.btn-secondary`, `.btn-accent`
  - Cards: `.card`, `.glass-card`
  - Navigation: `.nav-pill`
  - Text: `.gradient-text`, `.text-vibrant-green`
- **Grid Background**: Reusable `GridBackground` component with configurable `opacity`, `gridSize`, `strokeWidth`, `color` props
- **Typography**: Single font system using Inter (eliminated SAP 72 for consistency)
- **Glass morphism**: Standard pattern is `bg-white/80 backdrop-blur-xl border border-border rounded-lg shadow-lg`

### Premium Effects System
- **Glass Cards**: Consistent `backdrop-blur-sm` + `bg-white/80` pattern for premium card effects
- **Glow Effects**: CSS classes `.glow-effect` (defined in `src/index.css` lines 284-289) for button enhancement
- **Scroll margin**: All `section[id]` elements have `scroll-margin-top` to account for sticky header + subnav
- **Debug Mode**: `VITE_DEBUG_SPARKLE=1 npm run dev` reveals visual debugging for premium effects

### Navigation & Routing
- **HeaderNav** (`src/components/HeaderNav.tsx`): 
  - Adaptive header with scroll detection using `isScrolled` state
  - Theme switching: light/dark based on page (`isHomePage` detection)
  - Glass morphism: `bg-white/95 backdrop-blur-xl` when scrolled
  - Logo uses `WordMark` component with dynamic sizing (`homepage` vs `xl`)
- **MegaPanel** (`src/components/nav/MegaPanel.tsx`): Dropdown navigation for complex service hierarchies
- **Mobile-first**: Responsive navigation with `isMobileMenuOpen` state
- **Routing structure**: Nested routes for:
  - `/services/*` - SAP Solutions, Enterprise CX, AI Orchestration, Joule Enablement, SAP Upgrade
  - `/industries/*` - Manufacturing, CPG, Utilities, Financial Services
  - `/about/*` - Our Story, Team, Careers, Partnerships
  - `/resources/*` - Blog, Case Studies, Whitepapers, Videos, Events, Research Reports, Thought Leadership
  - `/contact/*` - Sales, General Inquiry, Support, Investors
  - `/solutions/*` - AI Strategy sub-routes (Assessment, Governance, RASP, Predictive, Conversational, Telemetry)

## Development Workflows

### Local Development
```bash
npm install                    # Install dependencies
npm run dev                    # Start dev server (Vite) on http://localhost:5173
VITE_DEBUG_SPARKLE=1 npm run dev  # Enable visual debugging for premium effects
npm run build                  # Production build with code splitting
npm run preview                # Preview production build
npm run lint                   # Run ESLint
```

### Environment Variables
Create `.env` file with EmailJS credentials (see `src/services/emailService.ts`):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_CONTACT=template_contact
VITE_EMAILJS_TEMPLATE_NEWSLETTER=template_newsletter
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_DEBUG_SPARKLE=1  # Optional: Enable debug mode
```

### Testing & QA
- **Visual QA**: Use `VITE_DEBUG_SPARKLE=1` to verify premium effects (sparkles, glow effects)
- **Accessibility**: Test with OS "Reduce motion" settings - all animations should disable (enforced via `@media (prefers-reduced-motion: reduce)`)
- **Navigation**: Verify all header links route to actual pages, check scroll spy behavior
- **Premium Effects**: Verify glass cards with backdrop-blur and glow button effects
- **Responsive**: Test mobile navigation states and breakpoint behavior (md:, lg: breakpoints heavily used)
- **Performance**: Check Framer Motion animations use `viewport={{ once: true }}` for scroll triggers
- **SEO**: Verify React Helmet meta tags render correctly (view page source)

## Critical Conventions

### Component Props Pattern
Always include optional `className` for composition and TypeScript interfaces:
```typescript
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Example: GridBackground component
interface GridBackgroundProps {
  className?: string;
  opacity?: number;        // Default: 0.03
  gridSize?: number;       // Default: 40
  strokeWidth?: number;    // Default: 1
  color?: string;          // Default: '#000000'
}

// Example: FluidTypography component
interface FluidTypographyProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  animation?: 'fade-up' | 'slide-in' | 'stagger' | 'typewriter' | 'scale-in';
  delay?: number;
  duration?: number;
  staggerChildren?: number;  // Default: 0.1
}
```

### Animation Variants
Standard pattern for stagger animations (see `FluidTypography.tsx`):
```typescript
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    staggerChildren: 0.1,
    delayChildren: 0 
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};
```

### SEO Implementation
Every page MUST implement:
1. **React Helmet Async** for meta tags (title, description, keywords, canonical)
2. **Structured Data** for Organization schema (see `HomePage.tsx` lines 11-42)
3. **OpenGraph tags** via `seoConfig.ts` configuration
4. **Page-specific config** in `seoConfig.ts` with `title`, `description`, `keywords`, `ogImage`

Example from `HomePage.tsx`:
```tsx
<Helmet>
  <title>Varahi - Enterprise CX & SAP Solutions | Proven Results Since 2009</title>
  <meta name="description" content="..." />
  <meta name="keywords" content="..." />
  <link rel="canonical" href="https://varahi.com/" />
  <script type="application/ld+json">
    {JSON.stringify(structuredData)}
  </script>
</Helmet>
```

### EmailJS Integration
Contact forms use `EmailService` class from `src/services/emailService.ts`:
```typescript
import { EmailService, type ContactFormData } from '../services/emailService';

const formData: ContactFormData = {
  name: '...',
  email: '...',
  company: '...',
  message: '...',
  // Optional: phone, inquiryType, urgency, budget, timeline
};

const result = await EmailService.sendContactForm(formData);
// Returns: { success: boolean; message: string }
```

### Business Domain
- **Services**: SAP S/4HANA, CX optimization, AI orchestration, SAP Joule enablement, enterprise automation
- **Industries**: Manufacturing, Financial Services, CPG (Consumer Packaged Goods), Utilities
- **Positioning**: Premium enterprise consulting with measurable ROI (40% improvement, 15-35% efficiency gains, 90-day deployment)
- **Experience**: 16 years in business, 50+ Fortune 1000 clients
- **Locations**: Philadelphia HQ (USA), Bangalore (India)

## Key Files for Context
- `src/router/AppRouter.tsx` - Complete routing structure with all page imports and nested routes
- `src/components/HeaderNav.tsx` - Navigation patterns, scroll detection, responsive behavior, theme switching
- `src/pages/HomePage.tsx` - SEO implementation example, structured data patterns, component composition
- `tailwind.config.js` - Design system: extended color palette (brand, accent, turmeric, finquick, gradient-finquick)
- `src/utils/seoConfig.ts` - Page-specific SEO configurations and business information
- `src/index.css` - Component utility classes (.btn-primary, .glass-card, .glow-effect), reduced motion queries
- `src/components/FluidTypography.tsx` - Reusable animation patterns with stagger support
- `src/components/GridBackground.tsx` - Configurable background grid pattern utility
- `src/services/emailService.ts` - EmailJS integration patterns and form handling
- `vite.config.ts` - Build configuration with manual code splitting strategy

## Integration Points
- **Framer Motion**: Used extensively for micro-interactions and scroll animations
  - Import pattern: `import { motion } from 'framer-motion'`
  - Always use `viewport={{ once: true }}` for scroll-triggered `whileInView` animations
  - Common props: `whileHover`, `whileTap`, `whileInView`, `initial`, `animate`, `transition`
- **Lucide React**: Icon system for consistent visual language
  - Import pattern: `import { IconName } from 'lucide-react'`
  - Examples: `ArrowRight`, `Check`, `ChevronDown`, `Menu`, `X`
- **React Router DOM**: Client-side routing with nested paths
  - Version 7.9.4 - uses modern API
  - Import: `import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'`
- **React Helmet Async**: SEO meta tag management
  - Import: `import { Helmet } from 'react-helmet-async'`
  - Wrap app with `<HelmetProvider>` in `main.tsx`
- **EmailJS**: Form submission without backend server
  - Configuration in `.env` file
  - Service class pattern in `src/services/emailService.ts`

## Production Notes
- **Status**: Production-ready (95/100 readiness score per FINAL-STYLING-AUDIT.md)
- **Performance**: 
  - Optimized animations with `prefers-reduced-motion` compliance
  - Code splitting configured for vendor, router, animations, icons chunks
  - Source maps enabled for production debugging
  - Chunk size warning limit: 1000KB
- **Browser Support**: Modern browsers with CSS custom properties and backdrop-filter support
- **Deployment**: Static site suitable for CDN deployment (Vercel configuration in `vercel.json`)
- **Accessibility**: 
  - All animations disabled via `@media (prefers-reduced-motion: reduce)` in `src/index.css` lines 217-225
  - Focus styles defined: `*:focus-visible` with 2px solid brand color outline
  - Scroll margin on all sections: `scroll-margin-top: calc(var(--header-h) + var(--subnav-h) + 16px)`

## Common Patterns to Follow

### Adding a New Page
1. Create page component in appropriate directory (`src/pages/`, `src/pages/services/`, etc.)
2. Import and add route in `src/router/AppRouter.tsx`
3. Add SEO config to `src/utils/seoConfig.ts` in `pages` object
4. Implement `<Helmet>` with title, description, keywords, canonical URL
5. Use consistent layout: Header (automatic), page content, Footer (automatic)
6. Apply animations with `viewport={{ once: true }}`

### Adding a New Component
1. Create TypeScript component with proper interface:
   ```tsx
   interface ComponentNameProps {
     className?: string;
     // Other props with types
   }
   
   const ComponentName: React.FC<ComponentNameProps> = ({ className = '', ... }) => {
     return <div className={`base-classes ${className}`}>...</div>;
   };
   
   export default ComponentName;
   ```
2. Use Framer Motion for animations if interactive
3. Respect `className` prop for composition
4. Export as default

### Styling Conventions
- Use Tailwind utility classes first
- Reference custom utilities from `src/index.css`: `.btn-primary`, `.btn-secondary`, `.btn-accent`, `.card`, `.glass-card`, `.nav-pill`, `.gradient-text`
- Glass morphism pattern: `bg-white/80 backdrop-blur-xl border border-border rounded-lg shadow-lg`
- Gradient text: `bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent`
- Responsive: Use `md:` (768px) and `lg:` (1024px) breakpoints
- Font: Inter only (`font-family: 'Inter', system-ui, sans-serif`)

When adding new components, follow the established animation patterns, include proper TypeScript interfaces, ensure accessibility compliance with reduced motion preferences, and maintain consistent styling with the design system. Always test with `VITE_DEBUG_SPARKLE=1` for visual effects verification.