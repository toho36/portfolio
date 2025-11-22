# Performance Best Practices

## Portfolio-Specific Performance

### Image Optimization (Critical for Portfolio)

- Use Next.js Image component for automatic optimization
- Convert images to WebP/AVIF format for modern browsers
- Use responsive images with `sizes` attribute
- Implement lazy loading for below-the-fold images
- Use blur placeholders for better perceived performance
- Optimize hero images (largest contentful paint - LCP)
- Serve images at appropriate sizes (don't serve 2000px images on mobile)

### Animation Performance

- Use CSS transforms and opacity (GPU-accelerated)
- Avoid animating width, height, top, left (causes layout shifts)
- Use `will-change` sparingly and remove after animation
- Target 60fps for smooth animations
- Respect `prefers-reduced-motion` for accessibility
- Use `requestAnimationFrame` for JavaScript animations

### GSAP Code Splitting

- Code split GSAP components using dynamic imports to minimize bundle size
- GSAP adds ~40-50KB, so lazy load interactive animation components
- Use `next/dynamic` with `ssr: false` for client-only GSAP animations:
  ```tsx
  const InteractiveShowcase = dynamic(
    () => import('@/components/sections/InteractiveShowcase'),
    { ssr: false, loading: () => <InteractivePlaceholder /> }
  );
  ```
- Load GSAP components on user interaction or when scrolled into view
- Tree-shake unused GSAP plugins (only import what you need from 'gsap')
- For Interactive Showcase components:
  - Use GSAP Timeline for orchestrated sequences
  - Reset animation state for replay functionality
  - Check `prefers-reduced-motion` before initializing GSAP animations

### Font Loading

- Preload critical fonts (hero section, headings)
- Use `font-display: swap` to prevent invisible text
- Subset fonts if possible (only include needed characters)
- Limit number of font families (2-3 max)

### Critical CSS

- Inline critical CSS for above-the-fold content
- Defer non-critical CSS loading
- Use Next.js automatic CSS optimization
- Minimize CSS bundle size

## Frontend Performance

### Bundle Optimization

- Optimize bundle sizes: code splitting, tree shaking, dynamic imports
- Use dynamic imports for heavy components (animations, charts)
- Minimize JavaScript execution time
- Reduce render-blocking resources
- Analyze bundle with `@next/bundle-analyzer`

### Loading Strategies

- Implement lazy loading for images and components
- Use Suspense boundaries for code-split components
- Preload critical resources (hero images, fonts)
- Use CDN for static assets (Vercel, Cloudflare)

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s (optimize hero image)
- **FID (First Input Delay)**: < 100ms (minimize JavaScript)
- **CLS (Cumulative Layout Shift)**: < 0.1 (avoid layout shifts)

## Static Site Optimization

For portfolio sites (mostly static):

- Use Next.js static generation (`generateStaticParams`)
- Pre-render pages at build time
- Use ISR (Incremental Static Regeneration) for contact form or dynamic content
- Minimize client-side JavaScript
- Leverage browser caching for static assets

## API Performance (Minimal for Portfolio)

- Implement response compression (gzip/brotli)
- Keep API responses small and focused
- Use Server Actions instead of API routes when possible (Next.js)
- Implement rate limiting for contact forms
- Minimize payload sizes

## Monitoring

- Monitor performance metrics and set up alerts
- Track Core Web Vitals (LCP, FID, CLS)
- Monitor API response times
- Track database query performance
- Set up alerts for performance degradation

## Examples

```typescript
// Good - Optimized Next.js Image with proper sizing
import Image from 'next/image';

export function HeroImage({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt="Hero image"
      width={1200}
      height={800}
      priority // Load immediately (above fold)
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="100vw"
      className="hero-image"
    />
  );
}

// Good - Lazy loaded project images
export function ProjectImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={400}
      loading="lazy" // Lazy load (below fold)
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

// Good - Code splitting for heavy animations
import { lazy, Suspense } from 'react';

const AnimatedSection = lazy(() => import('./AnimatedSection'));

export function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <AnimatedSection>
        {/* Heavy animation component */}
      </AnimatedSection>
    </Suspense>
  );
}

// Good - Font optimization in layout
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Show fallback while loading
  preload: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="preload" href="/fonts/custom.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}

// Good - Static generation for portfolio pages
export async function generateStaticParams() {
  // Pre-render all project pages at build time
  const projects = getProjects(); // Hardcoded projects

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Good - CSS animation (GPU-accelerated)
// Bad - animating width/height
.animate-bad {
  animation: expand 0.3s; /* Causes layout reflow */
  width: 0;
}

@keyframes expand {
  to { width: 100%; }
}

// Good - animating transform/opacity
.animate-good {
  animation: fadeIn 0.3s; /* GPU-accelerated */
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Performance Checklist for Portfolio

### Critical (Must Have)

- [ ] Hero image optimized (WebP, proper size, priority loading)
- [ ] Images use Next.js Image component with proper `sizes`
- [ ] Critical fonts preloaded
- [ ] Core Web Vitals targets met (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Bundle size analyzed and optimized
- [ ] Static generation used where possible

### Important

- [ ] Lazy loading for below-the-fold images
- [ ] Code splitting for heavy components (animations)
- [ ] CSS optimized (critical CSS inlined, rest deferred)
- [ ] Animations use GPU-accelerated properties
- [ ] Reduced motion preferences respected

### Nice to Have

- [ ] Image blur placeholders for better UX
- [ ] Font subsetting for smaller file sizes
- [ ] CDN configured for static assets
- [ ] Compression enabled (gzip/brotli)
