# Setup SEO

Configure SEO metadata and structured data for portfolio site.

## When to Use

- **Initial setup**: First time configuring SEO for the portfolio
- **Adding missing features**: Adding structured data, sitemap, robots.txt
- **Updating existing SEO**: Enhancing metadata, adding Open Graph images
- **New routes**: Adding page-level metadata for new routes/pages

This command **checks what already exists** and only adds what's missing or updates what needs improvement. It's safe to run multiple times.

## What to do:

1. **Review current SEO setup** (check what exists):
   - Metadata in layout.tsx
   - Page-level metadata for existing routes
   - Open Graph images
   - Structured data (JSON-LD)
   - sitemap.ts and robots.ts files
2. **Configure missing SEO features** (only add what's not present):
   - Root layout metadata (site-wide defaults) - update if incomplete
   - Page-specific metadata for each route - add if missing
   - Open Graph tags for social sharing - add images if missing
   - Twitter Card metadata - add images if missing
   - Structured data (JSON-LD) - add to layout.tsx if missing
   - Sitemap generation (`app/sitemap.ts`) - create if doesn't exist
   - robots.txt (`app/robots.ts`) - create if doesn't exist
   - Canonical URLs - add if missing
3. **Optimize existing content** (improve what's there):
   - Proper heading hierarchy (h1 → h2 → h3)
   - Semantic HTML elements
   - Descriptive alt text for images
   - Meta descriptions (unique per page)
   - Canonical URLs
4. **Verify technical SEO** (confirm optimization):
   - Fast loading times
   - Mobile-responsive
   - Accessible navigation
   - Clean URL structure

**Important**:

- Don't overwrite existing files unnecessarily - only update what needs changes
- Preserve user's existing metadata where appropriate - enhance rather than replace
- Ask user for domain name if placeholder URLs are found
- Check if OG images exist before suggesting their creation

Follow all rules in:

- `.cursor/rules/02-react-components.mdc` (SEO patterns)
- `.cursor/rules/09-portfolio-patterns.mdc` (SEO best practices)

## SEO Checklist:

- [ ] Unique title and description for each page
- [ ] Open Graph images configured
- [ ] Twitter Card metadata
- [ ] Structured data (JSON-LD) for projects
- [ ] Proper heading hierarchy
- [ ] Semantic HTML
- [ ] Alt text for all images
- [ ] Meta descriptions (150-160 characters)
- [ ] XML sitemap (if applicable)
- [ ] robots.txt configured

## Examples:

### Metadata in app/layout.tsx

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'John Doe - Full Stack Developer',
    template: '%s | John Doe',
  },
  description:
    'Portfolio of a full stack developer specializing in React, Next.js, and Node.js. View my projects and get in touch.',
  openGraph: {
    title: 'John Doe - Full Stack Developer',
    description: 'Portfolio showcasing innovative web projects',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - Full Stack Developer Portfolio',
      },
    ],
    url: 'https://yourdomain.com',
    type: 'website',
    siteName: 'John Doe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Full Stack Developer',
    description: 'Portfolio showcasing innovative web projects',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};
```

### Structured Data in app/layout.tsx

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Doe',
    jobTitle: 'Full Stack Developer',
    url: 'https://yourdomain.com',
    sameAs: ['https://github.com/johndoe', 'https://linkedin.com/in/johndoe'],
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
```

### Sitemap in app/sitemap.ts

```tsx
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
```

### Robots in app/robots.ts

```tsx
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
```
