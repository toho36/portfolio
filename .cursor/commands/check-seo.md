# SEO Check

Review portfolio code for SEO best practices and Next.js 15 App Router optimization.

## SEO Review Areas:

1. **Metadata & Head Tags**
   - Next.js Metadata API implementation in `app/layout.tsx`
   - Root layout has required metadata (title, description)
   - Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:siteName)
   - Twitter Card metadata (card type, title, description, image)
   - URLs are actual domains (not placeholders like `portfolio.example.com`)
   - Page-level metadata exists for each route (unique titles/descriptions) - if multi-page
   - Meta description length (150-160 characters optimal, 120-160 acceptable)
   - Title templates configured correctly
   - Robots meta tags configured correctly
   - Canonical URLs set (`alternates.canonical` in metadata)

2. **Structured Data (Schema Markup)**
   - JSON-LD structured data implementation
   - Person schema for portfolio owner
   - Portfolio/Project schema for projects (if applicable)
   - Organization schema (if applicable)
   - Structured data validity and proper format
   - Schema.org compliance

3. **Technical SEO**
   - `app/sitemap.ts` or `app/sitemap.tsx` exists (Next.js App Router)
   - `app/robots.ts` or `app/robots.tsx` exists (Next.js App Router)
   - Canonical URLs set in metadata
   - Clean URL structure (descriptive, no query parameters)
   - HTTPS configuration (production)
   - `next.config.ts` SEO optimizations (compress, poweredByHeader)

4. **Content SEO**
   - Proper heading hierarchy (one h1 per page, logical h2-h6 structure)
   - Semantic HTML usage (header, nav, main, section, article, footer)
   - All images have descriptive alt text
   - Descriptive link text (not "click here" or generic text)
   - Content is crawlable (not hidden from search engines with CSS/JS)
   - Internal linking structure between sections/pages

5. **Image SEO**
   - Next.js Image component used (not regular `<img>` tags)
   - Images have proper `alt` attributes
   - Responsive `sizes` attribute on images
   - Image optimization configured (WebP/AVIF formats in next.config.ts)
   - Images optimized for LCP (Largest Contentful Paint)
   - Hero images use `priority` prop
   - Below-fold images use `loading="lazy"`

6. **Performance SEO (Core Web Vitals)**
   - Image optimization configuration in next.config.ts
   - Lazy loading for below-fold images
   - Code splitting implementation for heavy components
   - Font loading optimization (font-display: swap)
   - Bundle size optimization
   - Compression enabled (next.config.ts)
   - Static generation where possible (generateStaticParams)

7. **Mobile SEO**
   - Responsive breakpoints in components (mobile-first approach)
   - Mobile-first CSS (base styles for mobile, md:/lg: for desktop)
   - Touch target sizes (minimum 44x44px)
   - Viewport meta tag (automatic in Next.js, but verify)
   - Mobile navigation implementation
   - Responsive typography

8. **Accessibility (SEO Impact)**
   - Semantic HTML elements used properly
   - ARIA labels where needed (aria-label, aria-labelledby)
   - Keyboard navigation support
   - Focus indicators visible
   - Color contrast (WCAG AA minimum)
   - Alt text for all images

9. **Next.js-Specific Checks**
   - App Router is being used (not Pages Router)
   - Proper use of `generateMetadata` for dynamic routes
   - `generateStaticParams` for static generation
   - Metadata exported properly (not in client components)
   - No SEO-blocking client-side rendering
   - Server Components by default
   - Client Components marked with 'use client'

## Detailed Checklist

### Metadata Check

```tsx
import type { Metadata } from 'next';

// ✅ Good - Complete metadata in app/layout.tsx (Next.js 15)
export const metadata: Metadata = {
  title: {
    default: 'Your Name - Full Stack Developer',
    template: '%s | Your Name',
  },
  description: '150-160 character description that accurately describes your portfolio and expertise...',
  openGraph: {
    title: 'Your Name - Full Stack Developer',
    description: 'Portfolio description',
    images: [
      {
        url: '/og-image.jpg', // ⚠️ Check if image exists
        width: 1200,
        height: 630,
        alt: 'Your Name Portfolio',
      },
    ],
    url: 'https://yourdomain.com', // ⚠️ Replace placeholder
    type: 'website',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Portfolio description',
    images: ['/og-image.jpg'], // ⚠️ Check if image exists
  },
  alternates: {
    canonical: 'https://yourdomain.com', // Canonical URL
  },
};

// ❌ Bad - Missing Open Graph images
openGraph: {
  images: [], // Empty array - should have image objects
}

// ❌ Bad - Placeholder URL
openGraph: {
  url: 'https://portfolio.example.com', // Should be actual domain
}

// ❌ Bad - Missing canonical URL
// Should include alternates.canonical

// ❌ Bad - No page-level metadata
// Each route should export its own metadata
// app/about/page.tsx should have:
// export const metadata = { title: 'About', description: '...' };
```

### Structured Data Check

```tsx
// ✅ Good - JSON-LD script in body (Next.js 15 App Router)
// Note: In App Router, you cannot use <head> directly. Script tags work in body too.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Full Stack Developer',
    url: 'https://yourdomain.com',
    sameAs: ['https://github.com/username', 'https://linkedin.com/in/username'],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}

// ✅ Alternative - Separate component approach (also valid)
// components/StructuredData.tsx
export function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Then use in layout.tsx:
// <StructuredData data={structuredData} />

// ❌ Bad - Trying to use <head> in App Router (not allowed)
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {' '}
        {/* ❌ Cannot manipulate head directly in App Router */}
        <script>...</script>
      </head>
      <body>{children}</body>
    </html>
  );
}

// ❌ Bad - No structured data found
```

### Technical SEO Check

```tsx
// ✅ Good - app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yourdomain.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ];
}

// ✅ Good - app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  };
}

// ❌ Bad - Missing sitemap.ts and robots.ts
```

### Content SEO Check

```tsx
// ✅ Good - Proper heading hierarchy
<h1>Welcome to My Portfolio</h1>
<h2>About</h2>
<h3>Skills</h3>

// ❌ Bad - Multiple h1 tags on one page
<h1>Welcome</h1>
<h1>About</h1> // Should be h2

// ✅ Good - Semantic HTML
<header>
  <nav>...</nav>
</header>
<main>
  <section>...</section>
</main>
<footer>...</footer>

// ❌ Bad - Generic link text
<a href="#projects">Click here</a> // Should be descriptive
```

### Image SEO Check

```tsx
// ✅ Good - Next.js Image with alt and sizes
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Developer working on laptop"
  width={1200}
  height={800}
  priority
  sizes="100vw"
/>

// ❌ Bad - Regular img tag
<img src="/hero.jpg" /> // Missing alt, no optimization

// ❌ Bad - Missing alt text
<Image src="/hero.jpg" width={1200} height={800} />
```

### Performance SEO Check

```tsx
// ✅ Good - next.config.ts optimizations
const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};

// ✅ Good - Code splitting for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  ssr: false,
});

// ❌ Bad - No image optimization
// next.config.ts missing images configuration
```

### Mobile SEO Check

```tsx
// ✅ Good - Mobile-first approach
<div className="flex flex-col md:flex-row">
  {/* Mobile: column, Desktop: row */}
</div>

// ✅ Good - Touch-friendly targets
<button className="p-4"> {/* 44x44px minimum */}
  Click
</button>

// ❌ Bad - Too small touch targets
<button className="p-1"> {/* Too small */}
  Click
</button>
```

### Next.js-Specific Check

```tsx
// ✅ Good - Server Component with metadata
export const metadata = {
  title: 'Page Title',
};

export default function Page() {
  return <div>Content</div>;
}

// ❌ Bad - Metadata in Client Component
('use client');
export const metadata = { title: 'Page' }; // Won't work!

// ✅ Good - Static generation
export async function generateStaticParams() {
  return [{ slug: 'project-1' }];
}
```

## Common Issues to Check

### Critical Issues (Must Fix)

- Missing `title` or `description` in metadata
- No `app/robots.ts` file (Next.js App Router)
- No `app/sitemap.ts` file (Next.js App Router)
- Placeholder URLs in metadata (`portfolio.example.com` or similar)
- Multiple h1 tags on a page
- Images without alt text
- Using `<img>` instead of Next.js `Image` component
- Empty `openGraph.images` array

### Important Issues (Should Fix)

- Missing structured data (JSON-LD)
- Meta descriptions too short/long (<120 or >160 characters)
- No page-level metadata for routes
- Missing canonical URLs (`alternates.canonical` in metadata)
- No responsive images (`sizes` attribute missing)
- Twitter Card missing `images` array
- Using `<head>` tag in RootLayout (not allowed in App Router)

### Recommendations (Nice-to-Have)

- Add Twitter Card images
- Implement Project schema for portfolio items
- Add breadcrumb structured data
- Optimize Core Web Vitals further
- Add social media links in structured data

## Output Format

When reviewing, provide:

1. **Summary** - Overall SEO score/status (e.g., "Good foundation, missing structured data")
2. **Critical Issues** - Must fix immediately (with code examples)
3. **Important Issues** - Should fix soon (with suggestions)
4. **Recommendations** - Nice-to-have improvements
5. **Code Fixes** - Specific code examples showing before/after

## References

Follow all rules in:

- `.cursor/rules/02-react-components.mdc` (SEO Metadata Patterns)
- `.cursor/rules/09-portfolio-patterns.mdc` (SEO Best Practices)
- `.cursor/rules/08-performance.mdc` (Performance SEO)
- `.cursor/rules/10-image-handling.mdc` (Image SEO)

Provide specific SEO recommendations and code fixes when issues are found.
