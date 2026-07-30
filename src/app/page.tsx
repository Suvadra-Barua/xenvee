import Hero from "@/components/sections/Hero";
import Publications from "@/components/sections/Publications";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Talks from "@/components/sections/Talks";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="top" className="mx-auto max-w-3xl px-6 pb-24 md:max-w-4xl">
      <Hero />
      <Publications />
      <Experience />
      <Projects />
      <Achievements />
      <Talks />
      <Skills />
      <Contact />
    </main>
  );
}
