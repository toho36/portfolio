---
description: Analyze code for performance issues and suggest optimizations.
---

1. **Analyze Frontend Performance**
   - Check for bundle size optimization opportunities.
   - Identify unnecessary re-renders.
   - Look for missing memoization where beneficial.
   - Verify image optimization usage.
   - Identify code splitting opportunities.

2. **Analyze Backend Performance**
   - Review database query optimization.
   - Check for N+1 query problems.
   - Identify missing indexes.
   - Look for caching opportunities.
   - Analyze API response sizes.

3. **Analyze React/Next.js Specifics**
   - Evaluate Server Components vs Client Components usage.
   - Check for proper use of Suspense.
   - Identify unnecessary state updates.
   - Review effect dependencies.

4. **Analyze Database Performance**
   - Check query efficiency.
   - Review connection pooling settings.
   - Optimize transactions.
   - Provide index recommendations.

5. **General Analysis**
   - Review algorithm complexity.
   - Check memory usage.
   - Verify async/await patterns.
   - Look for batching opportunities.

6. **Report Findings**
   - Provide specific optimizations with code examples showing before/after improvements.
