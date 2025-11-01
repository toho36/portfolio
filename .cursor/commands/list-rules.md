# List Cursor Rules

Display all active Cursor rules and their descriptions. This helps you understand what coding guidelines are currently active for your project.

## What to do:
1. List all rule files in `.cursor/rules/` directory
2. For each rule file, extract and display:
   - Rule name (filename)
   - Description from frontmatter
   - File patterns (globs) it applies to
   - Whether it always applies (`alwaysApply: true`)
3. Show a summary of total rules and which are always active vs file-specific

Format the output clearly so the user can see which rules are guiding code generation for different file types.

