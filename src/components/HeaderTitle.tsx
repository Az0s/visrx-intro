"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function HeaderTitle() {
  const { lang } = useLanguage();
  const t = strings[lang];
  return (
    <div className="text-center">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t.projectName}</h1>
      {t.tagline ? <p className="mt-1 text-sm muted">{t.tagline}</p> : null}
    </div>
  );
}

