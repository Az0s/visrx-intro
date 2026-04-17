"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function IntroSection() {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <div className="space-y-24">
      <section className="container" id="introduction">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.55fr)]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
              {t.intro.eyebrow}
            </div>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">
              {t.intro.title}
            </h2>

            <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-black/84 sm:text-xl sm:leading-9">
              {t.intro.lead}
            </p>

            <div className="mt-8 space-y-5 text-[15px] leading-8 text-black/70 sm:text-base">
              {t.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="self-start rounded-[2rem] border border-black/10 bg-white/62 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-md sm:p-7 lg:sticky lg:top-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/42">
              {t.projectName}
            </div>
            <div className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-black sm:text-3xl">
              {t.tagline}
            </div>
            <div className="mt-8 space-y-4">
              {t.ownership.highlights.map((item) => (
                <div
                  key={item.label}
                  className="border-t border-black/8 pt-4 first:border-t-0 first:pt-0"
                >
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/42">
                    {item.label}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-black/78">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[rgba(255,255,255,0.4)] py-20">
        <div className="absolute left-[8%] top-10 h-36 w-36 rounded-full bg-[rgba(240,136,118,0.16)] blur-3xl" />
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
              {t.architecture.eyebrow}
            </div>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">
              {t.architecture.title}
            </h3>
          </div>

          <div className="mt-12 space-y-6">
            {t.architecture.cards.map((card, index) => (
              <article
                key={card.title}
                className="grid gap-4 border-t border-black/10 py-6 md:grid-cols-[80px_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-8"
              >
                <div className="text-4xl font-semibold tracking-[-0.06em] text-black/22">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/42">
                    {card.label}
                  </div>
                  <h4 className="mt-3 text-xl font-semibold leading-8 text-black sm:text-2xl">
                    {card.title}
                  </h4>
                </div>
                <p className="max-w-2xl text-[15px] leading-8 text-black/68 sm:text-base">
                  {card.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-10 sm:pb-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
              {t.ownership.eyebrow}
            </div>
            <h3 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">
              {t.ownership.title}
            </h3>
            <p className="mt-6 max-w-3xl text-[15px] leading-8 text-black/70 sm:text-lg sm:leading-9">
              {t.ownership.summary}
            </p>
          </div>

          <div className="space-y-5 rounded-[2rem] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.56))] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-7">
            {t.ownership.highlights.map((item, index) => (
              <div
                key={item.label}
                className={`border-black/8 ${index === 0 ? "" : "border-t pt-5"}`}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/42">
                  {item.label}
                </div>
                <div className="mt-2 text-lg font-medium leading-8 text-black/84">
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
