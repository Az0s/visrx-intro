import HeaderTitle from "@/components/HeaderTitle";
import HeroCarousel from "@/components/HeroCarousel";
import IntroSection from "@/components/IntroSection";
import LanguageToggle from "@/components/LanguageToggle";
import ScrollLabel from "@/components/ScrollLabel";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="container pb-4 pt-10 text-center sm:pt-14">
        <div className="mb-6 flex items-center justify-between">
          <div className="invisible">spacer</div>
          <LanguageToggle />
        </div>
        <HeaderTitle />
      </header>

      <main className="container flex flex-col items-center gap-14 pb-28">
        <section className="w-full flex flex-col items-center pt-2">
          <HeroCarousel />
          <ScrollLabel />
        </section>

        <section className="w-full max-w-5xl pt-12 sm:pt-20" id="introduction">
          <div className="mb-6 h-[3px] w-16 rounded-full brand-gradient" />
          <IntroSection />
        </section>

        <section className="mb-16 mt-20 w-full max-w-5xl pt-6">
          <hr className="border-black/12" />
          <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-black/62 sm:flex-row sm:items-center">
            <div>VisRx portfolio site, updated {new Date().getFullYear()}</div>
            <div className="flex items-center gap-6">
              <a
                className="hover:underline"
                href="https://github.com/Az0s"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="hover:underline"
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
