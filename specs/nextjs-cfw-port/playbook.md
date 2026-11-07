# Playbook — nextjs-cfw-port (micro, playbook: feature)

## Purpose
Port the approved landing page to Next.js static export; prepare Cloudflare Workers deploy. LINE OA deferred.

## Requirements matrix
See specs/nextjs-cfw-port/matrix.md (REQ-1–REQ-7).

## Plan
1. Scaffold Next.js (App Router, no Tailwind, global CSS from approved design) — R1
2. Port page: hero + chat mock, services, steps, why, guarantee, FAQ, footer CTA; assets → public/ — R2,R3,R4
3. next.config.ts output:'export'; wrangler.jsonc assets out/; npm scripts build/deploy — R5,R6
4. Local verify: build → serve out/ → screenshots — R7

## Feedback loop
Visual: build + serve the export, screenshot in browser against the approved index.html sections. Red = build error or missing/blank section/art 404; green = all sections render with full-res art.

## Completion predicate (falsifiable)
`npm run build` exits 0 and `out/index.html` exists; the served export shows all seven sections with correct full-res art in screenshots; wrangler.jsonc valid with assets.directory "out"; `npm run deploy` script present.

## PStack steps (pinned feature playbook)
Pending; updated as work progresses (steps step-1..step-8 tracked in investigation receipt).
