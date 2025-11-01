# Create Contact Form

Generate a contact form component and API endpoint for portfolio with validation and spam prevention.

## What to do:
1. Ask user for form fields needed (name, email, message, optionally phone/subject)
2. Create contact form component with:
   - React Hook Form for form handling
   - Zod validation schema
   - Client-side validation
   - Loading/submission states
   - Success/error messages
   - Honeypot field for spam prevention
3. Create API endpoint or Server Action:
   - Input validation with Zod
   - Honeypot check
   - Rate limiting consideration
   - Email sending (using Resend, SendGrid, or similar)
   - Proper error handling
4. Include TypeScript types for form data
5. Add accessibility features (labels, ARIA, keyboard navigation)

Follow all rules in `.cursor/rules/03-portfolio-api.mdc` and `.cursor/rules/05-security.mdc`.

## Example Structure:

```tsx
// components/forms/ContactForm.tsx - Client component
// app/api/contact/route.ts OR app/actions/contact.ts - Server endpoint/action
```


