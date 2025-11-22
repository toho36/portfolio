---
description: Optimize images for performance
---

# Optimize Images Workflow

## 1. Analysis

- [ ] Identify images that need optimization (hero, gallery, project cards).
- [ ] Check `.cursor/rules/10-image-handling.mdc` for guidelines.

## 2. Optimization Steps

- [ ] Convert images to **WebP** or **AVIF**.
- [ ] Resize images to appropriate dimensions (don't serve 4k images for a thumbnail).
- [ ] Use `next/image` component for all images.
- [ ] Set `priority` prop for LCP images (above the fold).
- [ ] Set `loading="lazy"` for images below the fold.
- [ ] Add `sizes` prop for responsive sizing.
- [ ] Add descriptive `alt` text.

## 3. Verification

- [ ] Verify the build with `pnpm build`.
- [ ] Check visual quality and loading speed.
