"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function IntroSection() {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <div className="space-y-14">
      <section className="space-y-6">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
            {t.intro.eyebrow}
          </div>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            {t.intro.title}
          </h2>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white/80 p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-9">
          <p className="max-w-3xl text-lg font-medium leading-8 text-black/88">
            {t.intro.lead}
          </p>
          <div className="mt-6 space-y-5 text-[15px] leading-8 text-black/72 sm:text-base">
            {t.intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
            {t.architecture.eyebrow}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            {t.architecture.title}
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {t.architecture.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.75rem] border border-black/8 bg-white/72 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/40">
                {card.label}
              </div>
              <h4 className="mt-4 text-lg font-semibold leading-7 text-black">
                {card.title}
              </h4>
              <p className="mt-3 text-sm leading-7 text-black/68">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
            {t.ownership.eyebrow}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">
            {t.ownership.title}
          </h3>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
          <div className="rounded-[1.75rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.76))] p-7 shadow-[0_18px_60px_rgba(15,23,42,0.07)]">
            <p className="text-[15px] leading-8 text-black/72 sm:text-base">
              {t.ownership.summary}
            </p>
          </div>
          <div className="grid gap-3">
            {t.ownership.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-black/8 bg-white/78 px-5 py-4 shadow-[0_14px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/40">
                  {item.label}
                </div>
                <div className="mt-2 text-sm font-medium leading-6 text-black/82">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
