# Cursor Rules Directory

This directory contains project-specific rules for Cursor IDE, organized by category for better performance and maintainability.

## Rule Files (Portfolio-Optimized)

1. **01-typescript-general.mdc** - TypeScript strict typing rules (applies to all `.ts`/`.tsx` files)
2. **02-react-components.mdc** - React 19 & Next.js 15 + Portfolio patterns (applies to `.tsx`/`.jsx` files)
3. **03-portfolio-api.mdc** - Contact form & image upload APIs (applies to API routes)
4. **05-security.mdc** - Security for portfolio (image uploads, contact forms) (applies to all files)
5. **06-code-quality.mdc** - SOLID principles and clean code (applies to all files)
6. **07-basic-testing.mdc** - Basic testing patterns for portfolio (applies to test files)
7. **08-performance.mdc** - Performance optimization with portfolio focus (applies to all files)
8. **09-portfolio-patterns.mdc** - Portfolio-specific patterns and best practices (applies to components)
9. **10-image-handling.mdc** - Image optimization and handling for portfolio (applies to components)

## How It Works

Each `.mdc` file contains:
- **Frontmatter** - Metadata about when rules apply (file patterns, always apply flag)
- **Content** - The actual rules and guidelines

Cursor automatically loads rules based on:
- File patterns (`globs`) - Rules apply when working with matching files
- `alwaysApply` flag - Rules always active regardless of file type

## Portfolio-Focused Benefits

✅ **Performance** - Rules load contextually, optimized for portfolio needs
✅ **Portfolio-Specific** - Patterns for hero sections, project cards, image galleries
✅ **Minimal Backend** - Simplified API rules for contact forms and uploads
✅ **Image Optimization** - Dedicated rules for portfolio image handling
✅ **Basic Testing** - Focused testing approach (no over-engineering)

## Usage

Rules are automatically applied by Cursor when you work on relevant files. No manual configuration needed!

To add or modify rules:
1. Edit the appropriate `.mdc` file
2. Follow the frontmatter format for metadata
3. Save - changes apply immediately

## User Rules (Global Settings)

For truly global preferences (not file-specific), add them to Cursor's User Rules in Settings.

See `.cursor/rules/USER_RULES_REFERENCE.md` for recommended global rules.

