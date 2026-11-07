# Research — nextjs-cfw-port (primary guidance)
- Next.js 15 App Router + output:'export' produces static export in out/ (recommended for this no-runtime site).
- Cloudflare Workers Static Assets: wrangler.jsonc {"assets":{"directory":"out","not_found_handling":"single-page-application"}} (404 page handled as index); `wrangler deploy` serves assets without a Worker script.
- Cloudflare Pages is in maintenance mode for new projects; Workers assets is the current recommended path.
- Node 20+ LTS; npm scripts: dev/build/start conventional; deploy wraps wrangler.
