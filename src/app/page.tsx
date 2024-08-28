import Heading from "@/components/custom/Heading";
import HomeBanner from "@/components/pages/HomeBanner";
import Prestige from "@/components/pages/Prestige";
import Skills from "@/components/pages/Skills";
import { ExpericenTab } from "@/components/pages/ExpericenTab";
import { Projects } from "@/components/pages/Projects";
import ContactSection from "@/components/pages/ContactSection";
import InvitedTalks from "@/components/pages/InvitedTalks";

export default function Home() {
  return (
    <main className="mb-64">
      <Heading />
      <div className="pt-2 md:pt-28">
        <HomeBanner />
        <ExpericenTab />
        <Prestige />
        <Projects />
        <Skills />
        <InvitedTalks/>
        <ContactSection />
      </div>

      {/* <Stats/> */}
    </main>
  );
}
