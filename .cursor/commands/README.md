# Cursor Custom Commands

This directory contains custom commands that appear when you type `/` in Cursor's chat interface.

## Available Commands (Portfolio-Optimized)

### Rule Management

- **`/list-rules`** - Display all active Cursor rules and their descriptions
- **`/validate-rules`** - Check all rule files for proper format and structure
- **`/generate-rule`** - Create a new Cursor rule file

### Code Quality

- **`/code-review`** - Perform comprehensive code review
- **`/refactor-code`** - Refactor code to improve quality and maintainability
- **`/check-security`** - Review code for security vulnerabilities (image uploads, contact forms)
- **`/optimize-performance`** - Analyze and optimize code performance

### Portfolio Development

- **`/create-component`** - Generate a new React component with best practices
- **`/create-portfolio-section`** - Generate portfolio sections (Hero, About, Projects, Contact)
- **`/create-project-card`** - Generate project showcase card component
- **`/create-contact-form`** - Generate contact form with validation and spam prevention
- **`/optimize-images`** - Optimize images for portfolio (WebP, lazy loading, sizes)
- **`/add-animations`** - Add animations/transitions to components
- **`/setup-seo`** - Configure SEO metadata for portfolio

### Testing

- **`/write-basic-tests`** - Generate basic tests for critical components and utilities

## How to Use

1. Open Cursor's chat interface (Cmd/Ctrl + L)
2. Type `/` to see all available commands
3. Select a command or type the command name
4. Cursor will execute the command instructions

## Command Format

Each command is a Markdown file (`.md`) that contains:

- **Title** - Command name shown in the list
- **Instructions** - What Cursor should do when the command is executed

Commands guide Cursor's AI to perform specific tasks following your project's rules and best practices.

## Adding Custom Commands

To create a new command:

1. Create a new `.md` file in this directory
2. Name it descriptively (e.g., `deploy-staging.md`)
3. Add a title and clear instructions
4. Save - it will appear automatically in the `/` command list

## Examples

### Using a Command

```
You: /code-review
Cursor: [Performs code review following all project rules]
```

### Creating a Component

```
You: /create-component
Cursor: What component name? Button
Cursor: [Generates React component following project rules]
```

## Integration with Rules

These commands work alongside your rules in `.cursor/rules/`:

- Commands can reference rules
- Commands ensure generated code follows your rules
- Rules provide the foundation, commands provide the workflow

---

**Note:** Commands are project-specific and version-controlled. Share with your team!
