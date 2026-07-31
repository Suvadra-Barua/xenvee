import PageShell from "@/components/custom/PageShell";
import PageHeader from "@/components/custom/PageHeader";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Talks from "@/components/sections/Talks";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import profile from "@/app/data/profile";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata = {
  title: "CV — Suvadra Barua",
  description:
    "Curriculum vitae of Suvadra Barua — experience, education, achievements, talks, and skills.",
};

export default function CvPage() {
  return (
    <PageShell>
      <PageHeader
        title="Curriculum Vitae"
        subtitle="Experience, education, achievements, talks, and skills. A PDF version is also available."
        action={
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-ink-300 px-3 py-1.5 font-mono text-xs text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900"
          >
            Download PDF
            <FiArrowUpRight size={12} />
          </a>
        }
      />
      <Experience />
      <Education />
      <Achievements />
      <Talks />
      <Skills />
      <Contact />
    </PageShell>
  );
}
