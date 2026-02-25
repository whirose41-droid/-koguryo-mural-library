import { NavBar } from "../components/NavBar";
import { HeroMural } from "../components/HeroMural";
import { SearchBar } from "../components/SearchBar";
import { ScrollShowcase } from "../components/ScrollShowcase";
import { TombMatrix } from "../components/TombMatrix";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 mix-blend-soft-light">
        <div className="grain-overlay h-full w-full" />
      </div>

      <NavBar />
      <HeroMural />
      <SearchBar />
      <ScrollShowcase />
      <TombMatrix />
      <AboutSection />
      <Footer />
    </main>
  );
}

