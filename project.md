# Portfolio Landing Page - Implementation Plan

## Tech Stack Decision

**Base Plan**: PORTFOLIO_PLAN.md (more detailed, better structured, aligns with Cursor rules)

**Animation Strategy**:

- **GSAP** for complex orchestrated motion (standalone interactive section with multiple moving parts on click)
- **Framer Motion** for all other animations (hero, projects, scroll reveals, hover effects)
- Code split GSAP component to minimize bundle impact

## Core Dependencies

```json
{
  "dependencies": {
    "next": "^15.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.5",
    "lucide-react": "^0.400.0",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-dialog": "^1.0.8",
    "@next/mdx": "^15.0.0",
    "@mdx-js/loader": "^3.0.0",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.2.0",
    "zod": "^3.22.0",
    "react-hook-form": "^7.49.0",
    "@hookform/resolvers": "^3.3.0"
  }
}
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage (landing)
│   ├── globals.css          # Global styles
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Hobbies.tsx
│   │   ├── Skills.tsx
│   │   ├── InteractiveShowcase.tsx  # Complex GSAP animation
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── Navigation.tsx
│   └── ProjectCard.tsx
├── components/animations/
│   ├── ScrollReveal.tsx     # Framer Motion wrapper
│   ├── FadeIn.tsx           # Intersection Observer
│   └── HoverEffects.tsx     # CSS transitions
├── lib/
│   ├── utils.ts             # cn() helper, etc.
│   ├── content.ts            # Content loading functions
│   ├── metadata.ts           # SEO helpers
│   └── animations.ts          # Animation utilities
├── content/
│   ├── projects/
│   │   ├── project-1.mdx
│   │   └── project-2.mdx
│   ├── hobbies/
│   │   └── hobby-1.mdx
│   └── about.mdx
└── public/
    ├── images/
    └── ...
```

## Implementation Phases

### Phase 1: Project Setup

1. Initialize Next.js 15 project with TypeScript
2. Install and configure Tailwind CSS
3. Set up shadcn/ui (`npx shadcn@latest init`)
4. Install animation libraries: `framer-motion`, `gsap`
5. Configure ESLint and Prettier
6. Set up content directory structure
7. Configure path aliases (@/components, @/lib, etc.)

### Phase 2: Core Components & Layout

1. Create base UI components (Button, Card) from shadcn/ui
2. Implement Navigation component
3. Create reusable section wrapper component
4. Set up responsive layout system
5. Create Footer component

### Phase 3: Content Management

1. Set up MDX configuration in `next.config.ts`
2. Create content loading utilities in `lib/content.ts`
3. Define TypeScript types for projects, hobbies (types/index.ts)
4. Create initial content files structure

### Phase 4: Main Sections (Framer Motion)

1. **Hero Section** (`components/sections/Hero.tsx`)

   - Server Component for initial render
   - Framer Motion fade-in animation
   - CTA buttons with hover effects
   - Optimized hero image

2. **About Section** (`components/sections/About.tsx`)

   - Bio/Introduction content
   - Skills showcase with badges
   - Social links
   - Scroll-triggered reveal (Framer Motion)

3. **Projects Section** (`components/sections/Projects.tsx`)

   - Project grid with ProjectCard components
   - Filter/tag functionality (optional)
   - Hover effects (CSS transitions)
   - Scroll reveals (Framer Motion stagger)

4. **Hobbies Section** (`components/sections/Hobbies.tsx`)

   - Visual hobby showcase
   - Personal interests display
   - Subtle animations

### Phase 5: Complex Interactive Animation (GSAP)

**Standalone Interactive Section** (`components/sections/InteractiveShowcase.tsx`)

**Requirements**:

- Click-triggered complex orchestrated motion
- Multiple moving parts animating in sequence/parallel
- Code-split component (dynamic import) to minimize bundle
- Respect `prefers-reduced-motion`
- 60fps performance target
- Proper TypeScript types

**Implementation**:

1. Create `InteractiveShowcase.tsx` as Client Component
2. Use GSAP Timeline for orchestrated animations
3. Multiple animated elements (particles, shapes, text, etc.)
4. Click handler to trigger animation sequence
5. Reset functionality for replay
6. Lazy load via dynamic import in `app/page.tsx`:
   ```tsx
   const InteractiveShowcase = dynamic(
     () => import('@/components/sections/InteractiveShowcase'),
     { ssr: false, loading: () => <InteractivePlaceholder /> }
   );
   ```

7. Add to homepage between Projects and Contact sections

**GSAP Animation Pattern**:

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
      .to('.part-3', { opacity: 1, x: 0, duration: 0.6 }, '-=0.4')
      // ... more orchestrated parts
      .to('.final', { scale: 1, duration: 0.5 }, '-=0.3');
    
    tlRef.current = tl;
  };

  return (
    <section ref={containerRef} className="interactive-showcase">
      {/* Multiple animated parts */}
    </section>
  );
}
```

### Phase 6: Contact Section

1. Contact form (React Hook Form + Zod validation)
2. API route for form submission (`app/api/contact/route.ts`)
3. Email service integration (Resend or SendGrid)
4. Form animations (Framer Motion)
5. Success/error states

### Phase 7: Performance & SEO

1. Add metadata API to `app/layout.tsx`
2. Implement sitemap generation
3. Set up robots.txt
4. Optimize Core Web Vitals:

   - Lazy load InteractiveShowcase (GSAP)
   - Code split heavy animations
   - Optimize images (WebP/AVIF)
   - Minimize bundle size

5. Add loading states and error boundaries

### Phase 8: Polish & Deployment

1. Test animations across devices/browsers
2. Verify reduced motion preferences
3. Accessibility audit (keyboard navigation, ARIA)
4. Performance audit (Lighthouse)
5. Set up Vercel deployment
6. Configure environment variables
7. Test production build

## Animation Library Usage Summary

| Use Case | Library | Reason |

|----------|---------|--------|

| Hero fade-in | Framer Motion | Simple, React-native |

| Scroll reveals | Framer Motion | Easy Intersection Observer integration |

| Hover effects | CSS Transitions | Lightweight, performant |

| Project cards | CSS + Framer Motion | Simple hover, complex reveals |

| **Interactive Showcase** | **GSAP** | **Complex orchestrated timelines, multiple moving parts** |

| Page transitions | Framer Motion | Built-in page transitions |

| Form animations | Framer Motion | Simple, declarative |

## Performance Considerations

1. **Code Split GSAP Component**:

   - Use dynamic import with `ssr: false`
   - Load on user interaction or scroll into view
   - Estimated bundle impact: ~40-50KB (GSAP is heavy)

2. **Bundle Optimization**:

   - Tree-shake unused GSAP plugins
   - Use `gsap/Core` instead of full GSAP if possible
   - Consider `gsap/ScrollTrigger` only if needed elsewhere

3. **Animation Performance**:

   - Use `will-change` sparingly
   - Animate `transform` and `opacity` (GPU-accelerated)
   - Avoid animating `width`, `height`, `top`, `left`
   - Test on low-end devices

## Alignment with Cursor Rules

✅ **TypeScript General**: Strict typing for all components

✅ **React Components**: Server Components by default, Client Components when needed

✅ **Portfolio API**: Contact form endpoint only

✅ **Security**: Input validation, image upload security

✅ **Performance**: Code splitting, lazy loading, optimization

✅ **Portfolio Patterns**: Section-based architecture

✅ **Image Handling**: Next.js Image optimization

**Animation Rules Status**: ✅ Complete
- `.cursor/rules/02-react-components.mdc` includes GSAP for complex animations with detailed patterns
- `.cursor/rules/08-performance.mdc` includes GSAP code splitting strategy with code examples
- `.cursor/commands/add-animations.md` includes GSAP Interactive Showcase patterns and examples

## Key Files to Create

1. `components/sections/InteractiveShowcase.tsx` - Main complex animation component
2. `lib/animations.ts` - Shared animation utilities
3. `types/index.ts` - TypeScript definitions
4. `app/page.tsx` - Homepage with dynamic import for InteractiveShowcase
5. `content/projects/*.mdx` - Project content files
6. `components/animations/*.tsx` - Reusable animation wrappers

## Success Criteria

- Portfolio loads with Lighthouse score 95+
- GSAP animation component is code-split and lazy loaded
- Complex animation runs at 60fps on mid-range devices
- All animations respect `prefers-reduced-motion`
- TypeScript strict mode passes
- Contact form works end-to-end
- SEO metadata properly configured
- Responsive design works on mobile/tablet/desktop