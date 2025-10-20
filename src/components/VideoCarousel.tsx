"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Source = { src: string; type?: string };
type Item = {
  title: string;
  caption: string;
  // Prefer `sources` (multiple formats). `src` is kept as a fallback so the app
  // keeps working before optimized outputs are generated.
  sources?: Source[];
  src?: string;
  poster?: string;
};

export default function VideoCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const current = items[index];

  // Used to force <video> to reload when the selected item changes
  const key = useMemo(() => {
    const firstSrc = current.sources?.[0]?.src || current.src || "";
    return `${index}:${firstSrc}`;
  }, [index, current]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Autoplay from start when index changes
    const play = async () => {
      try {
        v.currentTime = 0;
        await v.play();
      } catch (_) {
        // ignore autoplay restrictions; controls are hidden but clicking will start
      }
    };
    play();
  }, [index]);

  const onEnded = () => {
    setIndex((i) => (i + 1) % items.length);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
    if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4" onKeyDown={onKey} tabIndex={0}>
      <div className="card overflow-hidden rounded-3xl w-full max-w-[420px] md:max-w-[460px] aspect-[9/16] relative p-3 md:p-4">
        <div className="relative h-full w-full rounded-2xl overflow-hidden bg-black/90 flex items-center justify-center">
          {/**
           * Video sources for best compatibility/perf on the web:
           * - First <source>: AV1 in MP4 (modern browsers, best compression)
           * - Second <source>: H.264 in MP4 (universal fallback)
           * Browsers pick the first playable source. If `sources` is omitted, we
           * fall back to a single `src`. We also use preload="metadata" to keep
           * initial page weight low on Vercel and set a poster when available.
           */}
          <video
            ref={videoRef}
            key={key}
            className="block max-h-full max-w-full object-contain"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={current.poster}
            onEnded={onEnded}
          >
            {current.sources
              ? current.sources.map((s, i) => (
                  <source key={i} src={s.src} type={s.type} />
                ))
              : current.src
              ? [<source key={0} src={current.src} />]
              : null}
          </video>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white text-[13px] md:text-[14px] font-medium [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
            <div className="opacity-95">{current.caption}</div>
          </div>
          <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-white/90 text-black shadow-sm">
            {index + 1} / {items.length}
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to video ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 w-7 rounded-full transition-all ${
              i === index ? "brand-gradient" : "bg-black/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
