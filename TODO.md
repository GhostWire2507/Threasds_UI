# Fix Infinite Image Loading in PostCard

## Steps:
- [x] 1. Create image map in mockData.js (already done)
- [x] 2. Understand files (PostCard.js, mockData.js, HomeScreen.js analyzed)
- [x] 3. Fix HomeScreen.js prefetch logic ✅ Removed incompatible Image.prefetch()
- [x] 4. Clear Metro cache (multiple runs: 8087, 8089)
- [x] 5. Diagnostics: 
  * Console logs on image onLoad/onError
  * Hardcoded test logo overlay on first post (check if logo shows)
  * Assets paths verified (files exist)
- [ ] 6. Test & verify

**Status:** Diagnostics added to PostCard.js. Approve port 8089, run app, check:
1. First post shows logo overlay? → Local requires OK
2. Console logs 'Post image loaded' or 'error'
3. Avatars load?
Report results to pinpoint exact cause from checklist!

