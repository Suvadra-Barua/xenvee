import ContactSection from "@/components/custom/ContactSection";
import { ExpericenTab } from "@/components/custom/ExpericenTab";
import Heading from "@/components/custom/Heading";
import HomeBanner from "@/components/custom/HomeBanner";
import Prestige from "@/components/custom/Prestige";
import { Projects } from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";

export default function Home() {
  return (
    <main className="mb-64">
      <Heading />
      <HomeBanner/>
      <ExpericenTab/>
      <Prestige/>
      <Projects/>
      <Skills/>
      <ContactSection/>
      {/* <Stats/> */}

    </main>
  );
}
