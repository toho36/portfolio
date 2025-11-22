---
description: Development workflow for the portfolio project
---

# Development Workflow

## Quick Start

1. `pnpm install` - Install dependencies
2. `pnpm dev` - Start development server
3. `pnpm fix` - Auto-fix issues
4. `pnpm check` - Verify all checks pass

## Creating New Components

- Use atomic design principles.
- Create reusable components in `components/ui`.
- Create section components in `components/sections`.

## Code Review Checklist

- [ ] TypeScript compiles without errors (`pnpm type-check`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] Prettier formatting is correct (`pnpm format:check`)
- [ ] No console.logs or debug code left behind
- [ ] Follows project structure
- [ ] Uses Server Components when possible
- [ ] Proper TypeScript types (no `any`)
- [ ] Images use Next.js Image component

## Pre-Commit

Run the following before committing:

```bash
pnpm fix && pnpm check
```
