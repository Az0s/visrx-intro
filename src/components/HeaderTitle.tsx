"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function HeaderTitle() {
  const { lang } = useLanguage();
  const t = strings[lang];
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl">
        {t.projectName}
      </h1>
      {t.tagline ? (
        <p className="mt-3 text-sm font-medium text-black/62 sm:text-base">
          {t.tagline}
        </p>
      ) : null}
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/66 sm:text-base sm:leading-8">
        {t.heroLead}
      </p>
    </div>
  );
}
