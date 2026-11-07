# Gik & Go — AI Asset Prompt Bible

All assets NOT already in the reference sheet (which covers: main character sheet, expression busts,
3/4 poses, chibi stickers, and the LINE-chat UI mock).

## Character bible (paste into EVERY prompt to keep her consistent)

> A Thai office lady in her early 30s, warm tan skin, big warm brown eyes with soft double eyelids,
> gentle smile, small silver stud earrings, dark brown hair in a loose messy low bun with soft
> face-framing strands falling out of the bun, wearing a crisp white button-up shirt with sleeves
> slightly rolled, a black lanyard with a white corporate ID badge, charcoal-grey blazer draped or
> worn, silver wristwatch. Soft painterly semi-realistic manga style, clean digital painting, soft
> warm office lighting, subtle blush, high detail, professional corporate illustration.

**Negative prompt:** school uniform, moe style, chibi (except sticker set), harsh shadows, photorealistic skin, watermark, text, logo, extra fingers, deformed hands

**Style tag to append everywhere:** `soft painterly anime illustration, warm muted palette (cream, charcoal, teal accent #0F4C4C, coral accent #FF6B57), clean background, 4k`

---

## Assets to generate

### A. Hero image (landing page) — 1:1 or 3:4, transparent/plain background
1. "P'Gik standing confidently with arms crossed, slight smirk, looking at viewer, waist-up,
   charcoal blazer worn properly, plain soft cream background (#FAF7F2), centered composition,
   space on the left for text" — the main hero.
2. Alt: "winking and pointing to the side with a red APPROVED stamp floating beside her,
   waist-up, plain cream background" — conversion CTA variant.
3. Alt: "holding a clipboard with documents, thumb up, warm encouraging smile" — services section.

### B. Process strip (3 wide images, 16:9, same style)
4. "holding a smartphone showing a chat app, cheerful" — step 1: ทัก LINE.
5. "typing on a laptop with document stacks and a Thai government building faintly in the
   background, focused expression" — step 2: พี่กิ้กยื่นให้.
6. "handing over a document folder with a red round stamp reading ผ่าน on it, satisfied smile,
   close-up waist shot" — step 3: รับเอกสาร.

### C. Brand / UI chrome
7. Logo mark: "chibi version of the same character, head only in a circle badge, flat vector-like
   style, teal ring, transparent background" (favicon + avatar).
8. OG/share image 1200×630: "hero pose + empty banner space on the right" (text added by code).
9. 404 page: "chibi version asleep face-down on a stack of documents, cute".
10. Error/empty state: "chibi shrugging with question mark".

### D. Backgrounds / texture
11. "subtle paper texture background, warm cream #FAF7F2, very faint manga speed lines in corners,
    extremely low contrast" (hero backdrop).
12. "seamless pattern, tiny line-art icons of documents, rubber stamps, coffee cups, buildings,
    teal on cream, very faint" (footer or section divider).

### E. Optional marketing art
13. LINE OA add-friend banner 240×240: chibi head + "ทักหาพี่กิ้ก" space.
14. Testimonial frame: "listening pose, hand near ear, gentle smile, side view".

---

## Revised web direction (chat-first)

Replace the corporate layout hero with:

```
┌───────────────────────────────────────────────┐
│  nav: logo(chibi) | บริการ ขั้นตอน ราคา คำถาม │
├───────────────────────┬───────────────────────┤
│  H1 พี่กิ้กจัดการให้   │   [P'Gik hero art]    │
│  sub + CTAs           │   ┌─────────────────┐ │
│                       │   │ mock LINE chat  │ │
│                       │   │ user: อยากเปลี่ยน│ │
│                       │   │  ชื่อบริษัท      │ │
│                       │   │ P'Gik: ง่ายจ้ะ   │ │
│                       │   │ [quick replies] │ │
│                       │   │ กำลังดำเนินการ  │ │
│                       │   │ 72% ▓▓▓▓░░      │ │
│                       │   └─────────────────┘ │
├───────────────────────┴───────────────────────┤
│  services (fixed price cards)                 │
│  process strip (3 gen images)                 │
│  why / guarantee                              │
│  FAQ                                          │
│  footer CTA: ทัก LINE                         │
└───────────────────────────────────────────────┘
```

The animated mock chat IS the pitch: it demonstrates "everything happens in LINE" while the
user reads. Trust comes from her professional character art + fixed prices, not corporate tone.
