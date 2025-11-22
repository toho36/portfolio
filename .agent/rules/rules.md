# Project Rules

## TypeScript & Type Safety

- **Strict Mode**: Always use strict mode. No implicit `any`.
- **No `any`**: Use `unknown`, `never`, or proper types.
- **Explicit Types**: Define interfaces for props, state, and API responses.
- **No JSDoc**: Use TypeScript types for documentation.

## React & Next.js

- **React 19**: Use Server Components by default. Use `use client` only when necessary.
- **Next.js 15**: Use App Router (`app/` directory).
- **Components**: Keep them small and focused. Use functional components.
- **Hooks**: Use custom hooks for logic.
- **State**: Prefer URL state or Server State (React Query) over global state.

## Styling (Tailwind CSS)

- **Colocation**: Keep Tailwind classes in the component file.
- **`cn()` Utility**: Use `cn()` for conditional classes and merging props.
- **No External CSS**: Avoid CSS modules or separate files unless for global styles.
- **Responsive**: Mobile-first approach.

## Performance

- **Images**: Always use `next/image`.
- **Animations**: Use Framer Motion or GSAP. Lazy load heavy animations.
- **Code Splitting**: Use `next/dynamic` for heavy components.

## Portfolio Specifics

- **Hero Section**: Use Server Components for initial render.
- **Project Cards**: Reusable components with hover effects.
- **SEO**: Use Next.js Metadata API.
