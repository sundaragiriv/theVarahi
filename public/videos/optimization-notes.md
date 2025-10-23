# Video Optimization Guidelines

## Current Implementation
- Video: `/ai.mp4` (40% opacity)
- Poster: External Unsplash image
- Preload: metadata only
- Accessibility: aria-hidden="true" for decorative video

## Recommended Optimizations

### 1. Create Local Poster Image
```bash
# Extract a frame from ai.mp4 as poster
ffmpeg -i ai.mp4 -ss 00:00:01.000 -vframes 1 ai-poster.jpg
```

### 2. Video Compression Settings
- Target size: < 5MB for background video
- Resolution: 1920x1080 max
- Bitrate: 1-2 Mbps
- Format: MP4 (H.264)

### 3. Multiple Format Support
```html
<source src="/ai.webm" type="video/webm" />
<source src="/ai.mp4" type="video/mp4" />
```

### 4. Performance Considerations
- Use `preload="metadata"` (current ✅)
- Implement intersection observer for lazy loading
- Add reduced motion support

## Implementation Status
✅ Added preload="metadata"
✅ Added proper ARIA attributes
✅ Added fallback message
⚠️  Need local poster image
⚠️  Consider WebM format for better compression