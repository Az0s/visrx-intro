"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "en" | "zh";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("visrx:lang") as Lang | null)) || null;
    if (saved === "en" || saved === "zh") {
      setLang(saved);
      return;
    }
    const nav = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "zh";
    setLang(nav.startsWith("zh") ? "zh" : "en");
  }, []);

  const value = useMemo<Ctx>(() => ({
    lang,
    setLang: (l: Lang) => {
      setLang(l);
      try { localStorage.setItem("visrx:lang", l); } catch {}
    },
  }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

