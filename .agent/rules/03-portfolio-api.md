# Portfolio API Development

## Simple API Patterns for Portfolio

Portfolio sites typically need minimal backend:

- Contact form submission endpoint
- Image upload endpoint (for project images)
- Simple validation and error handling

## Contact Form Endpoint

### Requirements

- Accept name, email, message fields
- Validate input with Zod or similar
- Send email (using Resend, SendGrid, or similar)
- Implement basic spam prevention (honeypot or rate limiting)
- Return simple success/error responses

### HTTP Status Codes

- `200 OK` - Successful submission
- `400 Bad Request` - Malformed request
- `422 Unprocessable Entity` - Validation errors
- `429 Too Many Requests` - Rate limiting
- `500 Internal Server Error` - Server issues

### Error Response Format

Simple format for portfolio:

```typescript
{ success: boolean, message: string, errors?: Record<string, string[]> }
```

## Image Upload Endpoint

### Requirements

- Accept image files (JPEG, PNG, WebP)
- Validate file type, size (max 5MB recommended)
- Resize/optimize images server-side
- Store in public directory or cloud storage
- Return image URL for use in components

### Security for Image Uploads

- Validate MIME type (not just extension)
- Limit file size (e.g., 5MB max)
- Scan for malicious content if possible
- Generate unique filenames to prevent conflicts
- Sanitize original filename

## Spam Prevention

For portfolio contact forms:

- Implement honeypot field (hidden field that bots fill)
- Rate limiting (max 3 submissions per hour per IP)
- Basic CAPTCHA if needed (hCaptcha, reCAPTCHA)
- Validate email format properly

## Contact Form Example

```typescript
// app/api/contact/route.ts
import { z } from 'zod';
import { Resend } from 'resend';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  honeypot: z.string().max(0).optional(), // Spam prevention
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check honeypot
    if (body.honeypot && body.honeypot.length > 0) {
      return Response.json(
        { success: false, message: 'Spam detected' },
        { status: 400 }
      );
    }

    // Validate input
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return Response.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    // Send email
    await resend.emails.send({
      from: 'Portfolio Contact <contact@yourdomain.com>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New contact from ${validation.data.name}`,
      html: `
        <p><strong>Name:</strong> ${validation.data.name}</p>
        <p><strong>Email:</strong> ${validation.data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validation.data.message}</p>
      `,
      replyTo: validation.data.email,
    });

    return Response.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
```

## Image Upload Example

```typescript
// app/api/upload/route.ts
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: 'Invalid file type' },
        { status: 400 }
      );
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: 'File too large (max 5MB)' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.name}`;
    const filepath = join(process.cwd(), 'public', 'uploads', filename);

    // Convert File to Buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(filepath, buffer);

    // Return public URL
    return NextResponse.json({
      success: true,
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed' },
      { status: 500 }
    );
  }
}
```

## Using Server Actions (Alternative)

For simpler implementation, use Next.js Server Actions:

```typescript
// app/actions/contact.ts
'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const validation = contactSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // Send email logic here

  return { success: true };
}
```

## Best Practices

- Keep endpoints simple - portfolio doesn't need complex REST patterns
- Use Zod for validation (lightweight, TypeScript-friendly)
- Implement rate limiting for contact forms (prevent spam)
- Log errors but don't expose sensitive details
- Use environment variables for API keys and email addresses
- Consider using Server Actions for simpler cases (Next.js 13+)
