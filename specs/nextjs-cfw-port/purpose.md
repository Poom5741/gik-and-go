# Purpose — nextjs-cfw-port

Rebuild the approved Gik & Go landing page (current static index.html) as a Next.js app
and configure hosting on Cloudflare Workers. LINE OA integration is explicitly deferred.

Source of confirmation (provenance): user instruction in session, 2026-11-07 —
"design is settle let build as next js and host on cloudflare worker. we will work on line oa later"

Constraints from prior approved work:
- Chat-first landing design locked (design/design-decision.md, iteration with user in session)
- Full-res manga assets in assets/png-cut (cutouts) and assets/png (scenes) are the canonical art
- Thai-first bilingual copy already written in index.html; prices are placeholders
- No LINE OA, no payment, no accounts in this feature
