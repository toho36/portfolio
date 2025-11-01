# Cursor Configuration

This directory contains Cursor IDE configuration for the project, including rules and custom commands.

## Directory Structure

```
.cursor/
├── rules/           # Portfolio-optimized rules (automatic)
│   ├── 01-typescript-general.mdc
│   ├── 02-react-components.mdc      (enhanced with portfolio patterns)
│   ├── 03-portfolio-api.mdc         (contact form & image upload)
│   ├── 05-security.mdc              (portfolio-focused security)
│   ├── 06-code-quality.mdc
│   ├── 07-basic-testing.mdc         (simplified for portfolio)
│   ├── 08-performance.mdc            (portfolio performance)
│   ├── 09-portfolio-patterns.mdc    (NEW - portfolio-specific)
│   └── 10-image-handling.mdc        (NEW - image optimization)
│
└── commands/        # Portfolio-specific commands (type / in chat)
    ├── create-portfolio-section.md  (NEW)
    ├── create-project-card.md       (NEW)
    ├── create-contact-form.md       (simplified)
    ├── optimize-images.md            (NEW)
    ├── add-animations.md             (NEW)
    ├── setup-seo.md                  (NEW)
    └── ... (more commands)
```

## Rules

Rules in `.cursor/rules/` automatically guide Cursor's AI when you're coding. They apply based on:
- **File patterns** (`globs`) - Rules activate for matching files
- **Always apply** - Some rules apply to all files

See [`.cursor/rules/README.md`](rules/README.md) for details.

## Commands

Custom commands in `.cursor/commands/` appear when you type `/` in Cursor's chat.

See [`.cursor/commands/README.md`](commands/README.md) for available commands.

## Quick Start

1. **Rules are automatic** - Optimized for portfolio development, activate when coding
2. **Use commands** - Type `/` in chat to access portfolio-specific commands
3. **Portfolio-focused** - Rules tailored for landing pages, project showcases, and minimal backend

## Portfolio-Specific Benefits

✅ **Portfolio patterns** - Hero sections, project cards, image galleries built-in  
✅ **Minimal backend** - Simplified API rules for contact forms and uploads only  
✅ **Image optimization** - Dedicated rules for portfolio image handling  
✅ **Performance-focused** - Core Web Vitals and loading optimization  
✅ **Basic testing** - No over-engineering, focus on what matters  
✅ **SEO-ready** - Built-in SEO patterns and best practices

---

**Tip:** Start with existing rules and commands, then customize for your team's needs!

