"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-black/10 bg-white/60 backdrop-blur px-1 py-0.5 text-xs shadow-sm">
      <button
        className={`px-2 py-1 rounded-full transition ${lang === "en" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        className={`px-2 py-1 rounded-full transition ${lang === "zh" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
    </div>
  );
}
