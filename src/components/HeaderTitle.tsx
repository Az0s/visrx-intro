"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function HeaderTitle() {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <div className="max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.34em] text-black/54">
        {t.heroEyebrow}
      </div>
      <div className="mt-5 space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-black/78">
          {t.projectName}
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl">
          {t.heroTitle}
        </h1>
      </div>

      <p className="mt-6 max-w-xl text-lg leading-8 text-black/72 sm:text-xl sm:leading-9">
        {t.heroLead}
      </p>

      <div className="mt-8 hidden gap-3 lg:grid lg:grid-cols-3">
        {t.heroMeta.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.4rem] border border-black/10 bg-white/62 px-4 py-4 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-md"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/42">
              {item.label}
            </div>
            <div className="mt-2 text-sm font-medium leading-6 text-black/78">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <ul className="mt-8 hidden space-y-3 text-sm leading-7 text-black/68 xl:block xl:text-base">
        {t.heroPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 rounded-full brand-gradient shadow-[0_0_0_6px_rgba(240,136,118,0.12)]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <a
        href="#introduction"
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-black/10 bg-black px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        {t.heroJumpLabel}
        <span aria-hidden="true" className="text-base">
          ↓
        </span>
      </a>
    </div>
  );
}
