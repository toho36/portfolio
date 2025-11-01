# Create Project Card

Generate a reusable project card component for showcasing portfolio projects.

## What to do:

1. Ask user for project card requirements:
   - Fields to display (title, description, image, technologies, links)
   - Layout style (horizontal, vertical, grid)
   - Interactive features (hover effects, modal, links)
2. Create ProjectCard component with:
   - TypeScript interface for project data
   - Next.js Image component for project image
   - Technology badges/chips
   - Hover effects and transitions
   - Links to live site and GitHub
   - Responsive design
3. Include:
   - Proper alt text for images
   - Accessibility (keyboard navigation, focus states)
   - Loading states if needed
   - Optional modal/detail view

Follow all rules in:

- `.cursor/rules/02-react-components.mdc`
- `.cursor/rules/09-portfolio-patterns.mdc`
- `.cursor/rules/10-image-handling.mdc`

## Example Structure:

```tsx
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}
```
