# Development Workflow Guide

A comprehensive guide for developing this portfolio project using Cursor AI, including when to use commands, code review processes, and best practices.

## Quick Start (TL;DR)

```bash
# Before starting work
pnpm install          # Install dependencies (first time)

# Daily workflow
pnpm dev              # Start development server
# Code, code, code...

# Before pushing to GitHub
pnpm fix              # Auto-fix all issues (TypeScript, ESLint, Prettier)
pnpm check            # Verify everything is good
git add .
git commit -m "Your message"
git push
```

## Table of Contents

1. [When to Use Commands vs Regular Prompts](#when-to-use-commands-vs-regular-prompts)
2. [Common Development Workflows](#common-development-workflows)
3. [Code Review Process](#code-review-process)
4. [Pre-Commit Checklist](#pre-commit-checklist)
5. [Available Commands Reference](#available-commands-reference)
6. [Troubleshooting](#troubleshooting)

---

## When to Use Commands vs Regular Prompts

### Use Cursor Commands (`/command-name`) When:

✅ **Creating new components or sections**

- `/create-component` - New reusable component
- `/create-portfolio-section` - Hero, About, Projects, Contact sections
- `/create-project-card` - Project showcase cards

✅ **Code quality checks**

- `/code-review` - Review code before committing
- `/check-security` - Security audit
- `/optimize-performance` - Performance analysis

✅ **Specific tasks with established patterns**

- `/create-contact-form` - Contact form with validation
- `/add-animations` - Add animations following guidelines
- `/optimize-images` - Image optimization
- `/setup-seo` - SEO configuration

### Use Regular Prompts When:

✅ **Custom implementations**

- "Add a dark mode toggle to the navigation"
- "Create a custom hook for form validation"
- "Implement a filter system for projects"

✅ **Bug fixes and debugging**

- "Fix the TypeScript error in Hero.tsx"
- "Debug why animations aren't working"

✅ **General questions**

- "Explain how Server Components work"
- "What's the best way to handle images?"

### Decision Tree

```
Need to create something new?
├─ Is it a standard component/section?
│  ├─ Yes → Use command (/create-component, /create-portfolio-section)
│  └─ No → Use regular prompt
│
Need code quality check?
├─ Yes → Use /code-review or /check-security
│
Need to follow specific patterns?
├─ Yes → Use relevant command (/add-animations, /optimize-images)
└─ No → Use regular prompt
```

---

## Common Development Workflows

### Workflow 1: Creating a New Portfolio Section

**Example: Adding a Skills Section**

```bash
# Step 1: Use command to create section
# In Cursor: /create-portfolio-section
# Answer prompts: Section name = "Skills", Type = "Skills showcase"

# Step 2: Customize the generated component
# In Cursor: "Add skill level indicators (beginner, intermediate, advanced)"
# Edit the generated Skills.tsx file

# Step 3: Review code
# In Cursor: /code-review

# Step 4: Fix issues before committing
pnpm fix              # Auto-fix TypeScript, ESLint, Prettier
pnpm check            # Verify everything passes

# Step 5: Commit and push
git add .
git commit -m "feat: add Skills section with level indicators"
git push
```

### Workflow 2: Implementing a Feature

**Example: Adding Project Filtering**

```bash
# Step 1: Regular prompt (custom feature)
# In Cursor: "Add filtering by technology to the Projects section"

# Step 2: Review generated code
# In Cursor: /code-review

# Step 3: Test locally
pnpm dev

# Step 4: Fix any issues
pnpm fix              # Auto-fix issues
pnpm check            # Verify checks pass

# Step 5: Commit
git add .
git commit -m "feat: add technology filter to Projects section"
git push
```

### Workflow 3: Fixing a Bug

**Example: TypeScript Error**

```bash
# Step 1: Identify the issue
# In terminal: pnpm type-check (shows TypeScript errors)

# Step 2: Ask Cursor for help
# In Cursor: "Fix the TypeScript error in components/sections/Hero.tsx:45"

# Step 3: Verify fix
pnpm fix              # Auto-fix if possible
pnpm check            # All checks should pass

# Step 4: Commit
git add .
git commit -m "fix: resolve TypeScript error in Hero component"
git push
```

### Workflow 4: Code Refactoring

**Example: Improving Code Quality**

```bash
# Step 1: Use refactor command
# In Cursor: /refactor-code
# Select file to refactor

# Step 2: Review changes
# In Cursor: /code-review

# Step 3: Verify nothing broke
pnpm dev              # Test locally
pnpm check            # All checks pass

# Step 4: Commit
git add .
git commit -m "refactor: improve code quality in Projects section"
git push
```

---

## Code Review Process

### Using `/code-review` Command

The `/code-review` command automatically checks your code against all project rules:

1. **TypeScript** - Type safety, no `any` types
2. **React/Next.js** - Best practices, Server Components
3. **Security** - Input validation, XSS prevention
4. **Performance** - Bundle size, code splitting
5. **Code Quality** - SOLID principles, clean code

### Manual Review Checklist

Before committing, verify:

- [ ] TypeScript compiles without errors (`pnpm type-check`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] Prettier formatting is correct (`pnpm format:check`)
- [ ] No console.logs or debug code left behind
- [ ] Follows project structure (components in right folders)
- [ ] Uses Server Components when possible
- [ ] Proper TypeScript types (no `any`)
- [ ] Images use Next.js Image component
- [ ] Animations respect `prefers-reduced-motion`

### Quick Review Commands

```bash
# Run all checks
pnpm check

# Auto-fix all fixable issues
pnpm fix

# Individual checks
pnpm type-check       # TypeScript only
pnpm lint            # ESLint only
pnpm format:check    # Prettier only
```

---

## Pre-Commit Checklist

Before pushing your branch, run:

### 1. Auto-Fix All Issues

```bash
pnpm fix
```

This runs:

- TypeScript fixes (if possible)
- ESLint auto-fix
- Prettier formatting

### 2. Verify All Checks Pass

```bash
pnpm check
```

This verifies:

- TypeScript compiles
- ESLint passes
- Prettier formatting is correct

### 3. Code Review (Optional but Recommended)

```bash
# In Cursor: /code-review
# Review any files you've changed
```

### 4. Test Locally

```bash
pnpm dev
# Manually test your changes in browser
```

### 5. Commit and Push

```bash
git add .
git commit -m "feat: your feature description"
git push
```

### Complete Pre-Commit Script

```bash
# One command to rule them all
pnpm fix && pnpm check && echo "✅ Ready to commit!"
```

---

## Available Commands Reference

### Development Commands

| Command                     | When to Use                  | Example                   |
| --------------------------- | ---------------------------- | ------------------------- |
| `/create-component`         | New reusable UI component    | Button, Card, Modal       |
| `/create-portfolio-section` | Portfolio sections           | Hero, About, Projects     |
| `/create-project-card`      | Project showcase cards       | Project display component |
| `/create-contact-form`      | Contact form with validation | Contact section           |

### Code Quality Commands

| Command                 | When to Use             | Example                    |
| ----------------------- | ----------------------- | -------------------------- |
| `/code-review`          | Before committing       | Review all changes         |
| `/check-security`       | Security-sensitive code | Contact form, image upload |
| `/refactor-code`        | Improve code quality    | Simplify complex logic     |
| `/optimize-performance` | Performance issues      | Bundle size, loading times |

### Optimization Commands

| Command            | When to Use       | Example                       |
| ------------------ | ----------------- | ----------------------------- |
| `/optimize-images` | Adding new images | Project images, hero images   |
| `/add-animations`  | Adding animations | Scroll reveals, hover effects |
| `/setup-seo`       | SEO configuration | Metadata, Open Graph          |

### Rule Management

| Command           | When to Use      | Example                        |
| ----------------- | ---------------- | ------------------------------ |
| `/list-rules`     | See active rules | Understanding what rules apply |
| `/validate-rules` | Check rule files | After editing rules            |

---

## Package.json Scripts Reference

### Development

```bash
pnpm dev              # Start development server (localhost:3000)
pnpm build            # Build for production (Vercel does this automatically)
pnpm start            # Start production server locally
```

### Code Quality Checks

```bash
pnpm check            # Run all checks (type-check + lint + format:check)
pnpm type-check       # TypeScript type checking only
pnpm lint             # ESLint only
pnpm format:check     # Prettier formatting check only
```

### Auto-Fix Commands

```bash
pnpm fix              # Auto-fix all (TypeScript + ESLint + Prettier)
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format           # Auto-fix Prettier formatting
pnpm type-check:fix   # Attempt TypeScript fixes (if supported)
```

---

## Troubleshooting

### Issue: TypeScript errors won't fix

**Solution:**

```bash
# Check what the error is
pnpm type-check

# Ask Cursor to fix it
# In Cursor: "Fix the TypeScript error: [paste error message]"
```

### Issue: ESLint errors after running pnpm fix

**Solution:**
Some ESLint errors need manual fixes:

```bash
# See what errors remain
pnpm lint

# Ask Cursor to fix them
# In Cursor: "Fix ESLint errors in [file]"
```

### Issue: Prettier formatting keeps changing

**Solution:**

```bash
# Format all files once
pnpm format

# Commit the formatting changes
git add .
git commit -m "style: format code with Prettier"
```

### Issue: CI/CD checks failing

**Solution:**

```bash
# Run checks locally to see same errors
pnpm check

# Fix issues
pnpm fix

# If build fails, check Vercel build logs (Vercel handles builds)
```

### Issue: Not sure which command to use

**Solution:**

- For standard components/sections → Use commands
- For custom features → Use regular prompts
- When in doubt → Use `/code-review` to check your work

---

## Best Practices Summary

1. **Use commands for standard tasks** - Components, sections, forms
2. **Use prompts for custom features** - Unique implementations
3. **Always run `pnpm fix` before committing** - Auto-fix issues
4. **Use `/code-review` for major changes** - Catch issues early
5. **Test locally** - Run `pnpm dev` before pushing
6. **Follow project structure** - Keep files in correct directories
7. **Use TypeScript strictly** - No `any` types
8. **Prefer Server Components** - Better performance
9. **Optimize images** - Use Next.js Image component
10. **Respect accessibility** - Animations, keyboard navigation

---

## Quick Reference Card

```
Daily Workflow:
pnpm dev              → Code
pnpm fix              → Fix issues
pnpm check            → Verify
git commit            → Commit

Creating Components:
/create-component     → New component
/create-portfolio-section → New section

Code Quality:
/code-review           → Review code
/check-security       → Security audit

Before Pushing:
pnpm fix && pnpm check → Ready!
```

---

**Need Help?** Check project rules in `.cursor/rules/` or ask Cursor AI directly!
