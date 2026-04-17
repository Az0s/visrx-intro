"use client";

import HeaderTitle from "@/components/HeaderTitle";
import HeroCarousel from "@/components/HeroCarousel";
import IntroSection from "@/components/IntroSection";
import LanguageToggle from "@/components/LanguageToggle";
import ScrollLabel from "@/components/ScrollLabel";
import { useLanguage } from "@/i18n/LanguageContext";
import { strings } from "@/i18n/strings";

export default function Home() {
  const { lang } = useLanguage();
  const t = strings[lang];

  return (
    <div className="page-shell font-sans">
      <header className="relative z-20">
        <div className="container flex items-start justify-between gap-4 py-6 sm:py-8">
          <div className="max-w-xs">
            <div className="text-xs font-semibold uppercase tracking-[0.32em] text-black/80">
              {t.projectName}
            </div>
            <p className="mt-2 text-sm leading-6 text-black/56">{t.tagline}</p>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <main className="pb-24">
        <section className="relative overflow-hidden pb-18 pt-4 sm:pb-24 sm:pt-6">
          <div className="hero-ambient hero-ambient-a" />
          <div className="hero-ambient hero-ambient-b" />
          <div className="mx-auto grid w-full max-w-[1380px] px-6 min-h-[calc(100svh-6rem)] items-center gap-14 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(560px,1.02fr)] lg:items-stretch lg:gap-14 lg:pt-10 xl:grid-cols-[minmax(0,1fr)_minmax(620px,1.06fr)]">
            <div className="hero-enter">
              <HeaderTitle />
            </div>
            <div className="space-y-8 hero-enter-delay lg:flex lg:h-full lg:flex-col lg:justify-between">
              <HeroCarousel />
              <ScrollLabel />
            </div>
          </div>
        </section>

        <IntroSection />

        <section className="container mt-8 border-t border-black/10 pt-6 sm:mt-10">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-black/58 sm:flex-row sm:items-center">
            <div>
              {t.projectName} portfolio site, updated {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-6">
              <a
                className="transition-colors hover:text-black"
                href="https://github.com/Az0s"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="transition-colors hover:text-black"
                href="https://www.linkedin.com/in/ziyiguopku/?locale=en_US"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
