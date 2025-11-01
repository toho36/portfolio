# Validate Cursor Rules

Check all rule files in `.cursor/rules/` for proper format and structure.

## What to do:

1. Check each `.mdc` file in `.cursor/rules/`
2. Validate that each file has:
   - Proper frontmatter with `---` delimiters
   - A `description` field
   - Either `globs` array or `alwaysApply: true`
   - Valid YAML structure
3. Report any issues found:
   - Missing frontmatter
   - Missing description
   - Invalid format
   - Syntax errors

Provide a summary of validation results and suggest fixes for any issues found.
