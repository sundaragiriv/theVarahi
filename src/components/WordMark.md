# Varahi Corporate WordMark

## Design Philosophy

The new Varahi wordmark represents:
- **Corporate Authority**: Bold, geometric design conveying enterprise strength
- **Print Compatibility**: Solid colors and clean lines for all media applications
- **Professional Credibility**: Premium visual hierarchy and refined details
- **Universal Scalability**: Works seamlessly from business cards to billboards

## Usage Examples

### Full Logo (Default)
```tsx
<WordMark size="md" animated={true} theme="light" />
```

### Icon Only (For compact spaces)
```tsx
<WordMark variant="icon-only" size="sm" />
```

### Text Only (For wide layouts)
```tsx
<WordMark variant="text-only" size="lg" theme="dark" />
```

## Size Variants

- **sm**: Small contexts (16px icon, text-xl)
- **md**: Standard usage (20px icon, text-2xl) 
- **lg**: Headers (24px icon, text-4xl)
- **xl**: Hero sections (32px icon, text-5xl)

## Theme Options

- **light**: Dark gradient text on light backgrounds
- **dark**: White text with glow effects on dark backgrounds
- **auto**: Automatically adapts based on context

## Technical Features

### Typography
- **Font**: Space Grotesk (900 weight) - Premium geometric sans-serif
- **Letter Spacing**: 0.2em - 0.3em for corporate authority
- **Case**: UPPERCASE for maximum impact
- **Colors**: Solid blues (#1e40af, #3b82f6) - Print compatible
- **Rendering**: Optimized legibility with advanced font features

### Icon Design
- **Shape**: Clean transparent box with blue outline
- **Style**: Outline-only design with V monogram inside
- **Colors**: Blue border (#3b82f6) with transparent background
- **V Monogram**: Solid blue V inside the outlined box
- **Print Friendly**: Perfect for single-color applications
- **Accessibility**: High contrast, screen reader friendly

### Print Specifications
- **Colors**: Pure solid colors, no gradients or effects
- **Minimum Size**: 16px for digital, 0.5" for print
- **Black & White**: Automatically converts for monochrome printing
- **File Formats**: SVG for vector scalability, PNG for raster needs

### Performance
- **Font Loading**: Preloaded with font-display: swap
- **Animations**: Respect prefers-reduced-motion
- **Bundle Size**: Optimized SVG icons, no external dependencies