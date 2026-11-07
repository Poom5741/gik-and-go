# Requirements matrix — nextjs-cfw-port

| id | requirement | verification |
|----|-------------|--------------|
| REQ-1 | Next.js app in repo root (or app/ subdir) with static export (`output:'export'`) | `npm run build` produces `out/index.html` |
| REQ-2 | Landing page visually matches approved design: hero + chat mock, services, 3 steps, why, guarantee, FAQ, footer CTA | browser screenshot vs approved index.html sections |
| REQ-3 | All images load from public assets (hero, logo face cutout, steps, footer) | no 404 in dev server network; screenshots show art |
| REQ-4 | Thai-first bilingual copy preserved from approved page | text comparison against index.html copy |
| REQ-5 | `wrangler.jsonc` configures Workers static assets pointed at export dir | file exists, `assets.directory` = out, valid JSONC |
| REQ-6 | `npm run deploy` script wraps `wrangler deploy` | script present in package.json |
| REQ-7 | Local production-verify: built export served and renders correctly | local serve of out/ + screenshot |
