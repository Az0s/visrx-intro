"use client";

import VideoCarousel from "@/components/VideoCarousel";
import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function HeroCarousel() {
  const { lang } = useLanguage();
  const t = strings[lang];

  const items = [
    { id: "medImport", src: "/videos/med_import_demo.mov" },
    { id: "arRecognition", src: "/videos/AR_recognition.mp4" },
    { id: "arTalk", src: "/videos/AR_talk_llm.mp4" },
    { id: "bindGuard", src: "/videos/bind_guard.MP4" },
    { id: "bindElderly", src: "/videos/bind_elderly.MP4" },
  ].map((it) => ({
    title: it.id,
    caption: t.videoCaptions[it.id] || "",
    src: it.src,
  }));

  return <VideoCarousel items={items} />;
}

