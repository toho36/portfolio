---
description: Create a new React component following project standards
---

# Create Component Workflow

## 1. Preparation

- [ ] Identify the component name and type (Server/Client).
- [ ] Determine the props interface.
- [ ] Check `.cursor/rules/02-react-components.mdc` for best practices.

## 2. Implementation

- [ ] Create the component file in `components/ui` or `components/sections`.
- [ ] Use **Server Components** by default. Add `'use client'` only if state/effects are needed.
- [ ] Define a clear TypeScript interface for props.
- [ ] **Do NOT** use JSDoc. Use descriptive types and names.
- [ ] Export the component as a named export.

## 3. Verification

- [ ] Run `pnpm type-check` to ensure no type errors.
- [ ] Run `pnpm lint` to check for code style issues.
