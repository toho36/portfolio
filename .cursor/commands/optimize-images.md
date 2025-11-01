# Optimize Images

Optimize images for portfolio - convert formats, resize, add blur placeholders, and implement proper loading strategies.

## What to do:
1. Analyze current image usage in the codebase
2. Identify images that need optimization:
   - Hero images (above fold - needs priority loading)
   - Project images (below fold - lazy load)
   - Gallery images (lazy load, responsive sizes)
3. Optimize each image:
   - Convert to WebP/AVIF format
   - Resize to appropriate dimensions
   - Generate blur placeholders if needed
   - Update Next.js Image component usage with:
     - Proper `sizes` attribute
     - `priority` for hero images
     - `loading="lazy"` for below-fold images
     - Quality settings (90 for hero, 85 for others)
4. Verify responsive `sizes` attribute matches actual display sizes
5. Check Core Web Vitals impact (especially LCP)

Follow all rules in `.cursor/rules/10-image-handling.mdc` and `.cursor/rules/08-performance.mdc`.

## Optimization Checklist:
- [ ] Images use Next.js Image component
- [ ] Hero images have `priority` prop
- [ ] Responsive `sizes` attribute set correctly
- [ ] Images converted to WebP/AVIF
- [ ] Proper dimensions set (width/height)
- [ ] Blur placeholders added where beneficial
- [ ] Lazy loading for below-fold images
- [ ] Alt text descriptive and meaningful


