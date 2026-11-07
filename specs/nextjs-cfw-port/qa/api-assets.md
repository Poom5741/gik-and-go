# API/assertion checks (QA clone, candidate e84d491d0549a691c2beffeb24247e65b47bdbe4)

- GET / -> 200
- All document.images complete && naturalWidth>0 (7/7)
- out/index.html exists after npm run build (exit 0)
- wrangler.jsonc parses as JSONC; assets.directory == "./out"
- package.json scripts.deploy == "npm run build && wrangler deploy"
