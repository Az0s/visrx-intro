"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center rounded-full border border-black/10 bg-white/78 p-1 text-sm shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-md">
      <button
        type="button"
        className={`rounded-full px-4 py-2 transition ${
          lang === "en"
            ? "bg-black text-white"
            : "text-black/62 hover:text-black"
        }`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={`rounded-full px-4 py-2 transition ${
          lang === "zh"
            ? "bg-black text-white"
            : "text-black/62 hover:text-black"
        }`}
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
    </div>
  );
}
