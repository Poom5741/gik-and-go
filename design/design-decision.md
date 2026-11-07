# Design Decision — Gik & Go Landing Page (v1)

Date: 2026-11-07
Status: DRAFT — awaiting Poom's approval

## Brand

- **Name:** Gik & Go (กิ้ก แอนด์ โก)
- **Mascot:** P'Gik (พี่กิ้ก) — manga-style SVG character based on Poom's sister Jirapat "กิ้ก"
- **Tagline (Thai-first):** พี่กิ้กจัดการให้ — ตั้งบริษัท เปลี่ยนชื่อ งาน บจ. ง่ายเหมือนมีพี่สาวดูแล
- **Tagline (EN):** Hand it to Gik, and go. Thai company registration & DBD filings, minus the law-firm bill.

## Design direction

"Professional manga" — clean cel-shaded line art, business attire, confident expressions.
NOT moe/cosplay style. The character must read as competent first, cute second.

**Character spec (from photo reference):**
- Short dark-brown hair, slightly tousled (reference shows short cut + tied-up variants)
- Strong straight eyebrows, expressive eyes, big confident grin
- Blazer over shirt, accent-color tie/pin; occasional wink/smile variants for section headers
- Poses: arms-crossed (trust), thumbs-up-with-stamp "ผ่าน" (conversion), pointing at price table (guidance)

**Palette:**
- Primary: deep teal `#0F4C4C` (trust, professional)
- Accent: coral `#FF6B57` (energy, CTAs, stamp red alternative)
- Paper: warm off-white `#FAF7F2`
- Ink: near-black `#1A1A1A` (line art, text)

**Typography:** Thai-first (IBM Plex Sans Thai / Noto Sans Thai), EN fallback same family. Big bold headlines, generous whitespace.

## Page structure (v1, single page)

1. **Hero** — P'Gik SVG (arms crossed) + tagline + primary CTA (ทัก LINE) + trust line ("จดทะเบียนถูกต้อง ตรงเวลา ราคาชัดเจน")
2. **Services + fixed prices** — 4-6 cards with published prices (เปลี่ยนชื่อนำ / จดตั้งบริษัท / เปลี่ยนทุน-ที่ตั้ง-ผู้กระทำการ / ปิดกิจการ บจ.3). Fixed price = differentiation vs law firms.
3. **How it works** — 3-step manga strip (เลี้ยงข้อมูล → พี่กิ้กยื่น → รับเอกสาร) with the character pointing
4. **Why Gik & Go** — ราคาชัดเจน / เร็ว / ตรงไปตรงมา; guarantee line ("เอกสารไม่ผ่าน แก้ให้ฟรี")
5. **FAQ** (short, SEO text) + footer with LINE/phone

**Explicitly out of scope for v1:** login/accounts, online payment, status portal, DBD e-filing integration, document upload.

## Conversion targets

- Primary CTA: LINE OA add-friend (Thai SME behavior)
- Secondary CTA: phone call
- v1 intake: LINE chat, not a web form (web intake form = v2)

## Open questions

1. Exact services + prices (placeholders used in mockup)
2. LINE OA id / phone number
3. Domain name
