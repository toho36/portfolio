# Portfolio Website

Personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19, TypeScript, Tailwind CSS
- **Components**: shadcn/ui (New York style)
- **Animations**: Framer Motion, GSAP
- **Forms**: React Hook Form, Zod validation
- **Content**: MDX for project/hobby content

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   └── animations/        # Animation wrappers
├── lib/                   # Utilities and helpers
├── content/               # MDX content files
│   ├── projects/          # Project markdown files
│   └── hobbies/           # Hobby markdown files
├── types/                 # TypeScript definitions
└── public/                # Static assets
    └── images/            # Image assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm (install globally: `npm install -g pnpm`)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Code Quality

- `pnpm check` - Run all checks (TypeScript + ESLint + Prettier)
- `pnpm fix` - Auto-fix all issues (Prettier + ESLint)
- `pnpm type-check` - TypeScript type checking
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Auto-fix ESLint issues
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

**Before pushing code, run:** `pnpm fix && pnpm check`

## Development Phases

This project follows an 8-phase implementation plan:

- ✅ **Phase 1**: Project Setup (Current)
- ⏳ **Phase 2**: Core Components & Layout
- ⏳ **Phase 3**: Content Management
- ⏳ **Phase 4**: Main Sections (Framer Motion)
- ⏳ **Phase 5**: Complex Interactive Animation (GSAP)
- ⏳ **Phase 6**: Contact Section
- ⏳ **Phase 7**: Performance & SEO
- ⏳ **Phase 8**: Polish & Deployment

See `project.md` for detailed implementation plan.

## Development Workflow

For a comprehensive guide on development workflow, when to use Cursor commands, code review process, and best practices, see **[docs/DEVELOPMENT_WORKFLOW.md](docs/DEVELOPMENT_WORKFLOW.md)**.

Quick workflow:

```bash
pnpm dev              # Start coding
pnpm fix              # Auto-fix issues before committing
pnpm check            # Verify everything passes
git commit && git push
```

## Features

- Responsive design (mobile-first)
- Server Components by default
- Optimized images with Next.js Image
- MDX content support
- TypeScript strict mode
- ESLint + Prettier configured
- Code splitting for animations
- Accessibility focused

## CI/CD

This project includes GitHub Actions CI that runs on every push and pull request:

- TypeScript type checking
- ESLint code quality checks
- Prettier formatting verification

**Note:** Vercel automatically handles production builds and deployments.

## GitHub Setup

To connect this repository to GitHub:

1. Create a new repository on GitHub
2. Add the remote:
   ```bash
   git remote add origin <your-github-repo-url>
   ```
3. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## License

Private project - All rights reserved.
