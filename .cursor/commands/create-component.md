# Create React Component

Generate a new React component following best practices and project rules.

## What to do:

1. Ask user for component details:
   - Component name
   - Component type (Server Component, Client Component, or both)
   - Props interface
   - Use case/requirements

2. Generate component following:
   - React 19 best practices
   - TypeScript with proper types
   - Next.js 15 App Router patterns if applicable
   - Accessibility considerations
   - Project structure conventions

3. Include:
   - Proper TypeScript interface for props
   - Server Component by default (add 'use client' if needed)
   - Proper error handling
   - Export statement
   - **Do NOT add JSDoc comments** - TypeScript types are self-documenting

4. Create associated files if needed:
   - Test file (`.test.tsx`)
   - Story file (if using Storybook)
   - Type definition file

Make sure the component follows all rules in `.cursor/rules/02-react-components.mdc`.
