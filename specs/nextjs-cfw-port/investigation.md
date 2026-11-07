# Investigation — nextjs-cfw-port

## Current structure
- Single static page: index.html + assets/ (flat html, no build system), served by python http.server
- No git history beyond initial commit; no package.json, no CI, no deploy config

## Conventions research (primary guidance)
- Next.js 15: `output: 'export'` produces a fully static export in `out/` — appropriate for a
  single landing page; no server components needing runtime required.
- Cloudflare Workers static assets: wrangler supports `assets.directory = "out"` (Workers Assets).
  A Worker script is optional; assets-only worker config with `wrangler deploy` serves the site.
- Current guidance (2026): Workers Assets is the recommended replacement for Pages for new
  static projects (Pages is in maintenance mode for new sites).

## Constraints / decisions
- Styling: keep the existing hand-written CSS (it is approved) as a global stylesheet rather
  than porting to Tailwind — minimizes diff risk against the approved design.
- Images: copy assets into public/, reference from the page.
- Chat mock stays CSS/JSX animation; no client JS framework behavior needed beyond React hydration.
- Deploy: prepare wrangler.jsonc + build scripts; actual `wrangler deploy` requires user's
  Cloudflare auth (not configured here) — deploy step is prepared, execution is user-run or
  after they log in.

## Decision-critical unknowns
- User's Cloudflare account/wrangler login — external, not needed for build & local verify.
