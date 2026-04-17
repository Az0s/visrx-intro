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

type VideoCarouselProps = {
  items: Item[];
  stageLabel: string;
  railLabel: string;
};

export default function VideoCarousel({
  items,
  stageLabel,
  railLabel,
}: VideoCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = items[index];
  const itemCount = String(items.length).padStart(2, "0");
  const currentCount = String(index + 1).padStart(2, "0");

  return (
    <div className="hero-stage relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-[#111111] p-4 text-white shadow-[0_35px_120px_rgba(17,24,39,0.22)] sm:p-5 xl:min-h-[780px]">
      <div className="absolute inset-x-[18%] top-4 h-28 rounded-full bg-[rgba(240,136,118,0.28)] blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[rgba(254,178,127,0.22)] blur-3xl" />

      <div className="relative grid gap-6 xl:h-full xl:grid-cols-[minmax(0,380px)_minmax(320px,1fr)] xl:grid-rows-[auto_1fr]">
        <div className="relative mx-auto w-full max-w-[380px]">
          <div className="mb-3 flex items-center justify-between px-2">
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/68 backdrop-blur-md">
              {stageLabel}
            </div>
            <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/62 backdrop-blur-md">
              {currentCount} / {itemCount}
            </div>
          </div>

          <div className="absolute inset-x-10 bottom-2 h-20 rounded-full bg-[rgba(240,136,118,0.38)] blur-2xl" />
          <div className="relative rounded-[2.3rem] border border-white/14 bg-[rgba(255,255,255,0.06)] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md">
            <div
              className="relative overflow-hidden rounded-[1.9rem] bg-[#1c1c1f] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
              style={{ aspectRatio: current.aspectRatio }}
            >
              <video
                key={`${index}:${current.sources[0]?.src ?? current.title}`}
                className="block h-full w-full object-cover"
                autoPlay
                muted
                playsInline
                loop
                preload="metadata"
                poster={current.poster}
              >
                {current.sources.map((source) => (
                  <source
                    key={source.src}
                    src={source.src}
                    type={source.type}
                  />
                ))}
              </video>
            </div>
          </div>

          <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.045] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.12)] backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/42">
              {current.title}
            </div>
            <p className="mt-2 text-sm leading-6 text-white/76">
              {current.caption}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-4 xl:h-full">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/46">
              {railLabel}
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
              {current.caption}
            </p>
          </div>

          <div className="grid gap-2.5">
            {items.map((item, i) => (
              <button
                type="button"
                key={item.title}
                aria-label={`Go to ${item.title}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className={`group relative overflow-hidden rounded-[1.55rem] border px-4 py-4 text-left transition-all duration-300 ${
                  i === index
                    ? "border-white/16 bg-white/12 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                    : "border-white/8 bg-white/[0.03] hover:border-white/14 hover:bg-white/[0.06]"
                }`}
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                      i === index
                        ? "border-transparent brand-gradient text-white"
                        : "border-white/14 text-white/54"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <div className="text-base font-medium text-white">
                      {item.title}
                    </div>
                  </div>

                  {i === index ? (
                    <p className="col-span-2 text-sm leading-6 text-white/74">
                      {item.caption}
                    </p>
                  ) : null}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
