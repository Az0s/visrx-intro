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

3) Videos (optimized workflow)

- Put original high-bitrate sources in `assets/videos/` (this folder is gitignored).
- Run the transcoder to generate web-optimized outputs into `public/videos/`:

```bash
# requires ffmpeg with libx264 + libaom-av1
chmod +x scripts/transcode-videos.sh
./scripts/transcode-videos.sh           # process all files in assets/videos
# or just one file
./scripts/transcode-videos.sh assets/videos/med_import_demo.mov
```

What it does
- Generates two MP4s per input (keeps 60 fps):
  - `<name>.av1.mp4`  → AV1 in MP4 (modern browsers; best size/quality)
  - `<name>.h264.mp4` → H.264 in MP4 (broadest fallback)
- Caps height to 1920 to avoid oversized portrait videos.
- Writes `-movflags +faststart` so playback begins quickly.

How the site uses them
- `src/components/HeroCarousel.tsx` and `VideoCarousel.tsx` prefer the AV1 source, then fallback to H.264.
- Until you run the script, the carousel will still work with existing files via a fallback `src`.

Commit/deploy
- Commit only the generated files in `public/videos/` (not the originals in `assets/videos/`).
- Push to GitHub; Vercel will deploy. See the Vercel section below for caching.

Design & Typography

- Light gradient background using brand colors (#E9EEED, #F08876, #FEB27F).
- Fonts via next/font: Plus Jakarta Sans (English) and Noto Sans SC (Chinese).
- Video frame uses inner padding and `object-contain` to avoid cropping.

Vercel notes (static video)
- `next.config.ts` sets long-lived, immutable caching for files under `/videos/*`.
- Progressive MP4 with `+faststart` enables quick startup and byte-range seeking on Vercel’s CDN.
- Keep files reasonably small: prefer AV1 where supported; H.264 is a compatibility fallback.
- Avoid Git LFS for now as requested; the deploy pipeline only needs the optimized outputs.
