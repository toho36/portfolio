# Setup SEO

Configure SEO metadata and structured data for portfolio site.

## What to do:

1. Review current SEO setup:
   - Metadata in layout.tsx
   - Page-level metadata
   - Open Graph images
   - Structured data (JSON-LD)
2. Configure comprehensive SEO:
   - Root layout metadata (site-wide defaults)
   - Page-specific metadata for each route
   - Open Graph tags for social sharing
   - Twitter Card metadata
   - Structured data for portfolio projects
   - Sitemap generation (if multi-page)
   - robots.txt configuration
3. Optimize content:
   - Proper heading hierarchy (h1 → h2 → h3)
   - Semantic HTML elements
   - Descriptive alt text for images
   - Meta descriptions (unique per page)
   - Canonical URLs
4. Verify technical SEO:
   - Fast loading times
   - Mobile-responsive
   - Accessible navigation
   - Clean URL structure

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

## Example:

```tsx
// app/layout.tsx
export const metadata = {
  title: 'John Doe - Full Stack Developer',
  description: 'Portfolio of a full stack developer...',
  openGraph: {
    title: 'John Doe - Full Stack Developer',
    description: '...',
    images: ['/og-image.jpg'],
  },
};
```
