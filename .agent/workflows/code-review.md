---
description: Comprehensive Code Review Workflow
---

# Code Review Workflow

## 1. Automated Checks

Run these commands first:

```bash
pnpm fix
pnpm check
```

## 2. Manual Review Checklist

Reference `.cursor/rules/06-code-quality.mdc` and `.cursor/rules/01-typescript-general.mdc`.

### Quality & Standards

- [ ] **SOLID Principles**: Single responsibility, open/closed, etc.
- [ ] **Naming**: Clear, descriptive names. No abbreviations.
- [ ] **No Duplication**: DRY principle.

### TypeScript

- [ ] **No `any`**: Use `unknown` or specific types.
- [ ] **Explicit Returns**: Public functions should have return types.

### React & Next.js

- [ ] **Server Components**: Used by default.
- [ ] **Hooks**: Custom hooks for logic.
- [ ] **Performance**: `next/image`, `next/dynamic` used where appropriate.

### Styling

- [ ] **Tailwind**: Classes colocated, `cn()` used for conditionals.

### SEO & Accessibility

- [ ] **Metadata**: Title, description, and Open Graph tags present.
- [ ] **Structured Data**: JSON-LD implemented where relevant.
- [ ] **Semantic HTML**: Proper heading hierarchy (h1-h6) and semantic tags.
- [ ] **Images**: Alt text present, `next/image` used.
- [ ] **Mobile**: Responsive design and touch targets verified.

### Security

- [ ] **Input Validation**: All user inputs validated and sanitized.
- [ ] **Authentication**: Verify proper checks on protected routes.
- [ ] **Injection Prevention**: Check for SQLi and XSS vulnerabilities.
- [ ] **Secrets**: No hardcoded secrets or API keys.
- [ ] **Headers**: Check for security headers (CSP, CORS).

## 3. Final Verification

- [ ] Run `pnpm dev` and test the changes manually.
- [ ] Check for console errors.
