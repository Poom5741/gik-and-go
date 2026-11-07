# Baseline feedback loop — nextjs-cfw-port

Smallest public-seam signal that distinguishes correct from incorrect behavior:
- Red: `npm run build` fails, or serving the export shows a missing/blank section, broken image, or wrong copy.
- Green: build exits 0; served export screenshots show all seven sections with full-res art and Thai copy identical to approved index.html.
Baseline today (pre-port): current static index.html served at http://127.0.0.1:8742 renders correctly — the port must reproduce it.
