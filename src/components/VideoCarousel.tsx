"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  title: string;
  caption: string;
  src: string;
  type?: string;
};

export default function VideoCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const current = items[index];

  const sources = useMemo(() => items.map((i) => i.src), [items]);

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
          <video
            ref={videoRef}
            key={sources[index]}
            src={current.src}
            className="block max-h-full max-w-full object-contain"
            autoPlay
            muted
            playsInline
            onEnded={onEnded}
          />
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
