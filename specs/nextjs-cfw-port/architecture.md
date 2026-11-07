# Architecture contract — nextjs-cfw-port
- Single route app/page.tsx renders the whole landing; no dynamic routes.
- State ownership: none client-side beyond CSS animations (chat mock is pure CSS); no data fetching.
- Public interfaces: npm run dev / build / start / deploy; export artifact out/.
- Exceptions: none custom — framework defaults; if build fails the maker fixes config, not the approved markup semantics.
- Dependencies: next, react, react-dom, wrangler (devDep). Nothing else.
