# Code Review

Perform a comprehensive code review of the selected code or current file.

## Review Checklist:
1. **Code Quality**
   - Follows SOLID principles
   - Functions are small and focused
   - Clear naming conventions
   - No code duplication

2. **TypeScript Best Practices**
   - Proper type safety (no `any`)
   - Explicit return types for public APIs
   - Proper error handling

3. **Security**
   - Input validation present
   - No exposed secrets or credentials
   - SQL injection prevention (if applicable)
   - XSS prevention (if applicable)

4. **Performance**
   - No N+1 queries
   - Proper caching strategy
   - Efficient algorithms
   - No memory leaks

5. **Testing**
   - Test coverage adequate
   - Edge cases considered
   - Tests are clear and maintainable

6. **Documentation**
   - Complex logic documented
   - API endpoints documented (if applicable)
   - Clear comments where needed

Provide specific, actionable feedback with examples of improvements when possible.

