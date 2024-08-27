import { ExpericenTab } from "@/components/custom/ExpericenTab";
import Heading from "@/components/custom/Heading";
import HomeBanner from "@/components/custom/HomeBanner";
import { Projects } from "@/components/custom/Projects";
import Skills from "@/components/custom/Skills";

export default function Home() {
  return (
    <main className="mb-64">
      <Heading />
      <HomeBanner/>
      <ExpericenTab/>
      <Projects/>
      <Skills/>
      {/* <Stats/> */}

    </main>
  );
}
