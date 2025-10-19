"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function ScrollLabel() {
  const { lang } = useLanguage();
  const t = strings[lang];
  return <div className="scroll-indicator mt-8 text-xs text-black/60">{t.scrollLabel}</div>;
}

