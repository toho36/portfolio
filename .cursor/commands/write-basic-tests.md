# Write Basic Tests

Generate basic tests for portfolio components and utilities - focus on critical functionality.

## What to test:
1. **Critical Components**
   - Hero section renders correctly
   - Project cards display project information
   - Contact form renders and validates
   - Navigation works

2. **Utility Functions**
   - Form validation helpers
   - Email validation
   - String/date formatting
   - Data transformation

3. **Component Behavior**
   - Interactive elements (buttons, links)
   - Form submissions
   - Modal interactions (if applicable)

## Testing approach:
- Use Jest and React Testing Library
- Follow AAA pattern (Arrange, Act, Assert)
- Test happy paths and edge cases
- Keep tests simple and focused
- Mock external dependencies

## What NOT to test:
- Complex E2E flows
- Visual appearance (unless critical)
- Full test coverage (aim for 60-70% on critical code)
- Database interactions (projects are hardcoded)

Follow all rules in `.cursor/rules/07-basic-testing.mdc`.

## Example:
- Test that ProjectCard displays project title
- Test that contact form validates email correctly
- Test that utility function handles edge cases (null, empty string)


