"use client";

import VideoCarousel from "@/components/VideoCarousel";
import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function HeroCarousel() {
  const { lang } = useLanguage();
  const t = strings[lang];

  const items = [
    {
      id: "arTalk",
      aspectRatio: "37 / 80",
      sources: [
        {
          src: "/videos/AR_talk_llm.av1.mp4",
          type: 'video/mp4; codecs="av01"',
        },
        {
          src: "/videos/AR_talk_llm.h264.mp4",
          type: 'video/mp4; codecs="avc1.640028"',
        },
      ],
    },
    {
      id: "medImport",
      aspectRatio: "37 / 80",
      sources: [
        {
          src: "/videos/med_import_demo.av1.mp4",
          type: 'video/mp4; codecs="av01"',
        },
        {
          src: "/videos/med_import_demo.h264.mp4",
          type: 'video/mp4; codecs="avc1.640028"',
        },
      ],
    },
    {
      id: "arRecognition",
      aspectRatio: "481 / 960",
      sources: [
        {
          src: "/videos/AR_recognition.av1.mp4",
          type: 'video/mp4; codecs="av01"',
        },
        {
          src: "/videos/AR_recognition.h264.mp4",
          type: 'video/mp4; codecs="avc1.640028"',
        },
      ],
    },
    {
      id: "bindGuard",
      aspectRatio: "37 / 80",
      sources: [
        { src: "/videos/bind_guard.av1.mp4", type: 'video/mp4; codecs="av01"' },
        {
          src: "/videos/bind_guard.h264.mp4",
          type: 'video/mp4; codecs="avc1.640028"',
        },
      ],
    },
    {
      id: "bindElderly",
      aspectRatio: "37 / 80",
      sources: [
        {
          src: "/videos/bind_elderly.av1.mp4",
          type: 'video/mp4; codecs="av01"',
        },
        {
          src: "/videos/bind_elderly.h264.mp4",
          type: 'video/mp4; codecs="avc1.640028"',
        },
      ],
    },
  ].map((it) => ({
    title: t.videoTitles[it.id] || it.id,
    caption: t.videoCaptions[it.id] || "",
    aspectRatio: it.aspectRatio,
    sources: it.sources,
  }));

  return (
    <VideoCarousel
      items={items}
      stageLabel={t.heroEyebrow}
      railLabel={t.demoRailLabel}
    />
  );
}
