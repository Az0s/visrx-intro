VisRx portfolio site (Next.js App Router)

Getting Started

1) Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

2) Language switch (EN/中文)

The site ships with a language toggle in the header. Text is left as-is by default. To fill real content:

- Page strings (titles, captions, labels)
  - File: src/i18n/strings.ts
  - Provide values under `en` and `zh` for:
    - `tagline`
    - `videoCaptions.medImport`
    - `videoCaptions.arRecognition`
    - `videoCaptions.arTalk`
    - `videoCaptions.bindGuard`
    - `videoCaptions.bindElderly`

- Introduction markdown
  - Default: renders Visrx_Introduction.md (root).
  - To localize, add any of these files (optional):
    - Visrx_Introduction.en.md
    - Visrx_Introduction.zh.md
  - The toggle will load the matching file; if missing, it falls back to Visrx_Introduction.md.

3) Videos

- Demo videos live in `public/videos` and are referenced by URL paths.
- Replace files with your exports using the same names, or edit `src/components/HeroCarousel.tsx` to change paths.

Design & Typography

- Light gradient background using brand colors (#E9EEED, #F08876, #FEB27F).
- Fonts via next/font: Plus Jakarta Sans (English) and Noto Sans SC (Chinese).
- Video frame uses inner padding and `object-contain` to avoid cropping.
