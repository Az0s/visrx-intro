"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function ScrollLabel() {
  const { lang } = useLanguage();
  const t = strings[lang];
  return (
    <a
      href="#introduction"
      className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.32em] text-black/52 transition-colors hover:text-black/72"
    >
      <span>{t.scrollLabel}</span>
      <span className="h-px w-14 bg-black/20 transition-all duration-300 group-hover:w-20 group-hover:bg-black/42" />
    </a>
  );
}
