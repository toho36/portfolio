# Add Animations

Add smooth animations and transitions to portfolio components following performance best practices.

## What to do:
1. Identify components that need animations:
   - Page sections (scroll-triggered reveals)
   - Project cards (hover effects)
   - Buttons (interactions)
   - Navigation (transitions)
2. Implement animations using:
   - CSS transitions for simple effects (preferred)
   - Framer Motion for most animations (scroll reveals, hover effects, page transitions)
   - GSAP for complex orchestrated timelines with multiple moving parts (code split with dynamic imports)
   - Intersection Observer for scroll-triggered animations
3. Follow animation guidelines:
   - Use GPU-accelerated properties (transform, opacity)
   - Keep duration 200-300ms for UI interactions
   - Respect `prefers-reduced-motion`
   - Target 60fps for smooth animations
   - Add proper easing functions
4. Test animations on different devices and browsers
5. Ensure animations enhance UX, don't distract

Follow all rules in:
- `.cursor/rules/02-react-components.mdc` (Animation guidelines)
- `.cursor/rules/08-performance.mdc` (Animation performance)
- `.cursor/rules/09-portfolio-patterns.mdc` (Animation patterns)

## Animation Types:

### Scroll-Triggered
- Fade in sections on scroll
- Slide up animations
- Stagger animations (projects grid)

### Hover Effects
- Project card hover
- Button hover states
- Link underline animations

### Page Transitions
- Smooth scroll to sections
- Route transitions (if multi-page)

### Micro-interactions
- Button clicks
- Form focus states
- Loading states

### Complex Orchestrated Animations
- Use GSAP for interactive animations with multiple moving parts
- Code split GSAP components (lazy load to minimize bundle size)
- GSAP Timeline for sequential/parallel animation sequences
- Examples: Interactive showcases, click-triggered multi-part animations

### GSAP Interactive Showcase Pattern
```tsx
'use client';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';

export function InteractiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const tlRef = useRef<gsap.core.Timeline>();

  const handleClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false)
    });
    
    // Orchestrated animation sequence
    tl.to('.part-1', { x: 100, rotation: 360, duration: 1, ease: 'power2.out' })
      .to('.part-2', { y: -50, scale: 1.2, duration: 0.8 }, '-=0.5')
      .to('.part-3', { opacity: 1, x: 0, duration: 0.6 }, '-=0.4');
    
    tlRef.current = tl;
  };

  return (
    <section ref={containerRef} className="interactive-showcase">
      {/* Multiple animated parts */}
    </section>
  );
}
```

Import in page with dynamic import:
```tsx
import dynamic from 'next/dynamic';

const InteractiveShowcase = dynamic(
  () => import('@/components/sections/InteractiveShowcase'),
  { ssr: false, loading: () => <InteractivePlaceholder /> }
);
```

## Examples:
- Intersection Observer for fade-in
- CSS transitions for hover effects
- Framer Motion for complex sequences
- GSAP for orchestrated timelines with multiple elements


