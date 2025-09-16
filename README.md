varahi

## UX Enhancements

This branch implements three premium UX features:

### 1. Sticky Section Sub-menu (Scroll Spy)
- Desktop-only floating subnav appears after hero.
- Anchors to sections, highlights active as you scroll.
- Smooth scroll, no layout jumps.
- Respects reduced motion.
- Usage: `<StickySubnav sections={[{id:'services',label:'Services'}, ...]} />`

### 2. Circle Glow Orbs
- Subtle, layered radial glows behind hero/CTAs.
- Static by default; can animate with slow drift (disabled for reduced motion).
- Usage: `<GlowOrbs tint="#0070F2" opacity={0.12} />`

### 3. Grid Sparkle
- Lightweight canvas shimmer flows diagonally across grid.
- Ultra-subtle, premium glint effect.
- Disabled for reduced motion.
- Usage: `<GridSparkle client:visible speed={0.7} density={0.0016} />`

### Reduced Motion Behavior
- All motion/animation is disabled if user prefers-reduced-motion is enabled.
- Site remains static and elegant.

### Acceptance
- Subnav appears below hero, anchors work, active state follows scroll.
- No layout shifts, no console warnings.
- 60fps on mid-range laptops.
- Lighthouse desktop: Perf/A11y/Best/SEO ≥95.
- CSP passes (no inline scripts).

See `src/pages/index.astro` for a demo wiring all enhancements.
