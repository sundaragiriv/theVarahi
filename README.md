# Varahi - Premium CX and AI Services

Astro + React + Tailwind site with premium UX enhancements.

## Quick Start

```bash
npm install
npm run dev
```

## Local QA Steps

1. **Visual QA with Debug Sparkles:**
   ```bash
   VITE_DEBUG_SPARKLE=1 npm run dev
   ```
   - Visit http://localhost:4321
   - Verify sparkles are visible in hero section
   - Check glow orbs behind CTA sections

2. **Navigation Testing:**
   - Test all header links navigate to real pages
   - Verify sticky subnav on homepage
   - Check section anchors scroll properly
   - Visit /_diagnostics for route verification

3. **Reduced Motion:**
   - Enable "Reduce motion" in OS accessibility settings
   - Verify animations are disabled
   - Layout should remain unchanged

## UX Features

### 1. Sticky Section Sub-menu (Scroll Spy)
- Desktop-only floating subnav below header
- Anchors to sections, highlights active as you scroll
- Smooth scroll, no layout jumps
- Respects reduced motion

### 2. Circle Glow Orbs
- Subtle radial glows behind hero/CTAs
- Static, elegant background elements
- Z-index: -z-10

### 3. Grid Sparkle
- Lightweight canvas shimmer flows diagonally
- Ultra-subtle premium effect
- Disabled for reduced motion
- Z-index: -z-20

## Routes

- `/` - Homepage with all UX features
- `/services` - CX Services
- `/ai` - AI Services  
- `/system` - Varahi System
- `/case-studies` - Case Studies
- `/insights` - Insights
- `/about` - About
- `/contact` - Contact
- `/_diagnostics` - Local QA page

## Build

```bash
npm run build
npm run preview
```
