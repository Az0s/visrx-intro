import HeroCarousel from "@/components/HeroCarousel";
import LanguageToggle from "@/components/LanguageToggle";
import IntroSection from "@/components/IntroSection";
import HeaderTitle from "@/components/HeaderTitle";
import ScrollLabel from "@/components/ScrollLabel";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <header className="container pt-16 sm:pt-20 pb-3 text-center">
        <div className="flex items-center justify-between mb-2">
          <div className="invisible">spacer</div>
          <LanguageToggle />
        </div>
        <HeaderTitle />
      </header>
      <main className="container flex flex-col items-center gap-10 pb-28">
        <section className="w-full flex flex-col items-center pt-4">
          <HeroCarousel />
          <ScrollLabel />
        </section>

        {/* Introduction below as next page */}
        <section className="w-full max-w-3xl pt-24" id="introduction">
          <div className="mb-6 h-[3px] w-16 rounded-full brand-gradient" />
          <IntroSection />
        </section>

        {/* Ending section */}
        <section className="w-full max-w-3xl mt-28 pt-8 mb-16">
          <hr className="border-black/15" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-black/70 mt-6">
            <div>
              Created w/ care {new Date().getFullYear()}
            </div>
            <div className="flex items-center gap-6">
              <a className="hover:underline" href="https://github.com/Az0s" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="hover:underline" href="https://www.linkedin.com/in/ziyiguopku/?locale=en_US" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
