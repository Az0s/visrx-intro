"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { renderBasicMarkdown } from "@/components/BasicMarkdown";

export default function IntroSection() {
  const { lang } = useLanguage();
  const [md, setMd] = useState<string>("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/intro?lang=${lang}`, { cache: "no-store" });
        const txt = await res.text();
        setMd(txt);
      } catch {
        setMd("VisRx");
      }
    };
    load();
  }, [lang]);

  return <div className="space-y-3">{renderBasicMarkdown(md)}</div>;
}

