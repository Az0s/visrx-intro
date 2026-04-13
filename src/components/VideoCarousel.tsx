"use client";

import { useState } from "react";

type Source = { src: string; type?: string };
type Item = {
  title: string;
  caption: string;
  aspectRatio: string;
  sources: Source[];
  poster?: string;
};

export default function VideoCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const onEnded = () => {
    setIndex((i) => (i + 1) % items.length);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full max-w-[430px] rounded-[2rem] border border-white/70 bg-white/72 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.1)] backdrop-blur-sm md:max-w-[470px] md:p-4">
        <div
          className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-[inset_0_0_0_1px_rgba(15,23,42,0.08)]"
          style={{ aspectRatio: current.aspectRatio }}
        >
          <video
            key={`${index}:${current.sources[0]?.src ?? current.title}`}
            className="block h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster={current.poster}
            onEnded={onEnded}
          >
            {current.sources.map((source) => (
              <source key={source.src} src={source.src} type={source.type} />
            ))}
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-5">
            <div className="rounded-[1.2rem] bg-[linear-gradient(180deg,rgba(18,18,18,0.08),rgba(18,18,18,0.68))] px-4 py-3 text-left text-[13px] font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-[6px] md:text-[14px]">
              {current.caption}
            </div>
          </div>
          <div className="absolute left-3 top-3 rounded-full bg-white/92 px-2 py-1 text-xs text-black shadow-sm">
            {index + 1} / {items.length}
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.title}
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
