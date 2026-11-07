# Gik & Go — 12 generation prompts (Japanese manga style)

**Model tips:** use `google/nano-banana-pro` (or gpt-image-2.6 Sunburst) for anything with Thai text;
`google/nano-banana` is fine for text-free images. Generate 1:1 or 3:4 portrait for hero/logo,
16:9/4:3 for steps. Keep the CHARACTER paragraph identical in every prompt for consistency.

## CHARACTER (paste into every prompt)

> Thai office lady in her early 30s, warm tan skin, big warm brown eyes with soft double eyelids,
> gentle smile, small silver stud earrings, dark brown hair in a loose messy low bun with soft
> face-framing strands falling out of the bun, crisp white button-up shirt with sleeves slightly
> rolled, black lanyard with a white corporate ID badge, charcoal-grey blazer, silver wristwatch.
> Japanese manga anime illustration, clean bold black line art, crisp cel shading, flat 2D anime
> colors, modern anime key visual quality, clean flat cream background #F3EEE4.

---

### 1. hero-main (hero, 3:4 portrait)
[CHARACTER] She stands waist-up facing the viewer with arms crossed confidently, a slight knowing smirk, direct eye contact. Vertical 3:4 portrait, subject centered, plain flat cream background, no text.

### 2. hero-approved (CTA pose, 3:4 portrait)
[CHARACTER] She winks with a bright open smile and points upward to her right at a big red rubber stamp reading "APPROVED" in English capital letters floating beside her head. Waist-up, vertical 3:4 portrait, plain flat cream background.

### 3. hero-clipboard (services pose, 3:4 portrait)
[CHARACTER] She holds a clipboard with documents in one arm and gives a thumbs up with the other hand, warm encouraging smile. Waist-up, vertical 3:4 portrait, plain flat cream background, no text.

### 4. step1-line (step 1, 16:9 landscape)
[CHARACTER] She smiles brightly holding up a smartphone whose screen shows a green LINE-style chat app with small speech bubbles. Blurred modern Thai office background. Wide 16:9 landscape, no readable text on screen.

### 5. step2-file (step 2, 16:9 landscape)
[CHARACTER] She is focused, typing on a laptop, document stacks and a white cat-face mug on the desk, a Thai government building visible through the window behind her. Wide 16:9 landscape, no text.

### 6. step3-docs (step 3, 16:9 landscape) ⚠ Thai text — use big model
[CHARACTER] She hands over a kraft paper document folder. On the folder is a red circular rubber stamp and the stamp text is EXACTLY the Thai word **ผ่าน** (Thai characters: ผ + ่ + า + น) — spell it precisely, do not change or omit any Thai tone mark. Joyful closed-eye smile, stacks of documents beside her. Wide 16:9 landscape.

### 7. logo-chibi (favicon/logo, 1:1)
Cute chibi sticker of a [CHARACTER] Head and shoulders only, winking with a big smile, inside a teal circle badge outline, flat cream background, 1:1 square, no text.

### 8. og-share (share image, 16:9)
[CHARACTER] She stands arms crossed smiling on the RIGHT side of the image; the LEFT half is large empty flat cream banner space reserved for text, subtle coral and teal wavy ribbon accents along the bottom edge. Wide 16:9 landscape, no text.

### 9. chibi-404 (404 page, 4:3)
Cute chibi sticker of a [CHARACTER] She sleeps face-down on a stack of documents, small "z z z" letters above her head. Flat cream background, 4:3.

### 10. chibi-empty (empty state, 1:1)
Cute chibi sticker of a [CHARACTER] She shrugs with both hands up and a small question mark beside her head, confused cute expression. Flat cream background, 1:1 square, no text.

### 11. line-banner (LINE OA banner, 4:3) ⚠ Thai text — use big model
Cute chibi sticker of a [CHARACTER] She is excited, sparkling eyes, hands on cheeks. Below her a dark teal rounded rectangle banner. The banner text is EXACTLY the Thai phrase **ทักหาพี่กิ้ก** spelled character by character: ท ั ก + ห า + พ ี่ + ก ิ ้ ก — correct Thai spelling and tone marks, white text. Flat cream background, 4:3.

### 12. testimonial (testimonial frame, 4:3)
[CHARACTER] She listens attentively with one hand raised beside her ear, gentle smile, looking slightly up. Waist-up, plain flat cream background, 4:3, no text.

---

**Negative prompt (if the model supports one):** painterly soft shading, semi-realistic skin, photorealistic, 3D render, watermark, extra fingers, deformed hands, wrong Thai characters.

**Thai-text checklist:** images 6 and 11 are the only ones with Thai words — after generating, zoom in and verify every character and tone mark before accepting.
