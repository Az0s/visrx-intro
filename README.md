VisRx portfolio site (Next.js App Router)

Getting Started

1) Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the site.

2) Language switch (EN/中文)

The site ships with a language toggle in the header. All landing-page copy is authored as static localized content in one place:

- File: `src/i18n/strings.ts`
- Update values under `en` and `zh` for:
  - `tagline`
  - `heroLead`
  - `videoCaptions.*`
  - `intro`
  - `architecture`
  - `ownership`

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
- `src/components/HeroCarousel.tsx` and `VideoCarousel.tsx` serve AV1 first and H.264 second for browser compatibility.
- The carousel uses per-video aspect ratios so the portrait demos render cleanly without the extra black side borders that appeared in the older layout.

Commit/deploy
- Commit only the generated files in `public/videos/` (not the originals in `assets/videos/`).
- Push to GitHub; Vercel will deploy. See the Vercel section below for caching.

Design & Typography

- Light gradient background using brand colors (#E9EEED, #F08876, #FEB27F).
- Fonts via next/font: Plus Jakarta Sans (English) and Noto Sans SC (Chinese).
- Homepage copy is rendered from static typed content rather than markdown fetched through an API route.
- Video stage uses a clean white shell and per-item aspect ratio instead of a fixed black container.

Vercel notes (static video)
- `next.config.ts` sets long-lived, immutable caching for files under `/videos/*`.
- Progressive MP4 with `+faststart` enables quick startup and byte-range seeking on Vercel’s CDN.
- Keep files reasonably small: prefer AV1 where supported; H.264 is a compatibility fallback.
- Avoid Git LFS for now as requested; the deploy pipeline only needs the optimized outputs.
