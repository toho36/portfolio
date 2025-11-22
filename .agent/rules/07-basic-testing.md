# Basic Testing for Portfolio

## Testing Philosophy for Portfolio

Portfolio sites need basic tests to ensure:

- Critical components render correctly
- Utility functions work as expected
- Contact form validation works
- No regressions when updating

Focus on **quality over quantity** - test what matters most.

## What to Test

### Priority 1: Critical Components

- Hero section renders
- Project cards display correctly
- Contact form validation
- Navigation works

### Priority 2: Utility Functions

- Form validation helpers
- Image optimization utilities
- Data transformation functions
- String/date formatting

### Priority 3: Component Behavior

- Interactive elements (buttons, links)
- Form submissions
- Modal/dialog interactions
- Responsive behavior (if testable)

## What NOT to Test (For Portfolio)

- Complex E2E flows (not needed for static portfolio)
- Database interactions (hardcoded projects)
- Complex integration tests
- Visual regression tests (unless critical)
- Full test coverage (aim for 60-70% on critical code)

## Basic Testing Patterns

### Component Snapshot Tests

- Test that components render without crashing
- Verify key content is displayed
- Check accessibility attributes

### Utility Function Tests

- Test edge cases (empty strings, null, undefined)
- Test validation functions
- Test data transformation

### Form Validation Tests

- Test valid input
- Test invalid input
- Test edge cases (boundary values)

## Test Examples

```typescript
// Component test - Project Card
import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  const mockProject = {
    title: 'My Project',
    description: 'A cool project',
    technologies: ['React', 'TypeScript'],
    image: '/project.jpg',
    link: 'https://example.com',
  };

  it('should render project information', () => {
    render(<ProjectCard {...mockProject} />);

    expect(screen.getByText('My Project')).toBeInTheDocument();
    expect(screen.getByText('A cool project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('should have correct link attribute', () => {
    render(<ProjectCard {...mockProject} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});

// Utility test - Email validation
import { isValidEmail } from './utils/validation';

describe('isValidEmail', () => {
  it('should return true for valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
  });

  it('should return false for invalid email', () => {
    expect(isValidEmail('not-an-email')).toBe(false);
    expect(isValidEmail('missing@domain')).toBe(false);
    expect(isValidEmail('@domain.com')).toBe(false);
  });

  it('should handle edge cases', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail(null as any)).toBe(false);
    expect(isValidEmail(undefined as any)).toBe(false);
  });
});

// Contact form validation test
import { validateContactForm } from './utils/validation';

describe('validateContactForm', () => {
  it('should validate correct form data', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello, this is a test message',
    };

    const result = validateContactForm(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'not-an-email',
      message: 'Hello',
    };

    const result = validateContactForm(invalidData);
    expect(result.success).toBe(false);
    expect(result.errors?.email).toBeDefined();
  });

  it('should reject message that is too short', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short', // Too short
    };

    const result = validateContactForm(invalidData);
    expect(result.success).toBe(false);
    expect(result.errors?.message).toBeDefined();
  });
});

// Server Action test - Contact form submission
import { submitContactForm } from './app/actions/contact';

describe('submitContactForm', () => {
  it('should return success for valid form data', async () => {
    const formData = new FormData();
    formData.set('name', 'John Doe');
    formData.set('email', 'john@example.com');
    formData.set('message', 'This is a test message');

    const result = await submitContactForm(formData);
    expect(result.success).toBe(true);
  });

  it('should return errors for invalid data', async () => {
    const formData = new FormData();
    formData.set('name', 'J'); // Too short
    formData.set('email', 'invalid-email');
    formData.set('message', 'Short');

    const result = await submitContactForm(formData);
    expect(result.success).toBe(false);
    expect(result.errors).toBeDefined();
  });
});
```

## Testing Setup

### Recommended Testing Stack

- **Jest** - Test runner
- **React Testing Library** - Component testing
- **@testing-library/jest-dom** - DOM matchers

### Test File Structure

```
components/
├── ProjectCard.tsx
└── ProjectCard.test.tsx

utils/
├── validation.ts
└── validation.test.ts
```

## Test Organization

- Keep test files close to source files (same directory)
- Use `.test.ts` or `.test.tsx` extension
- Group related tests with `describe` blocks
- Use descriptive test names: `"should display project title"`
- Follow AAA pattern: Arrange, Act, Assert

## Quick Test Checklist

Before deploying portfolio:

- [ ] Hero section renders
- [ ] Project cards display projects correctly
- [ ] Contact form validation works
- [ ] Navigation links work
- [ ] Critical utility functions tested
- [ ] No console errors in tests
