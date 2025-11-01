# Generate Cursor Rule

Help create a new Cursor rule file in `.cursor/rules/` directory.

## What to do:
1. Ask the user for:
   - Rule name/description (what the rule is about)
   - File patterns it should apply to (e.g., `**/*.tsx`, `api/**/*.ts`)
   - Whether it should always apply to all files
2. Create a properly formatted `.mdc` file with:
   - Frontmatter including description, globs (if any), and alwaysApply flag
   - A template structure they can fill in
   - Proper numbering (next number in sequence)
3. Save it in `.cursor/rules/` with format: `NN-description.mdc`

The file should follow the same format as existing rule files with proper YAML frontmatter.

