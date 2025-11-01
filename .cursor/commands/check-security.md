# Security Check

Review code for security vulnerabilities and best practices.

## Security Review Areas:
1. **Input Validation**
   - All user input validated and sanitized
   - File uploads validated (type, size)
   - Type validation in TypeScript

2. **Authentication & Authorization**
   - Proper authentication checks
   - Authorization verified on protected endpoints
   - Token handling secure

3. **Injection Prevention**
   - SQL injection prevented (parameterized queries)
   - XSS prevention (output encoding)
   - Command injection prevention

4. **Secrets Management**
   - No hardcoded secrets or API keys
   - Environment variables used properly
   - No secrets in logs or error messages

5. **Error Handling**
   - Errors don't expose internal details
   - Proper error messages for users
   - Sensitive data not logged

6. **Security Headers**
   - CSP headers configured (frontend)
   - CORS properly configured
   - Rate limiting implemented

Provide specific security recommendations and code fixes when issues are found.

