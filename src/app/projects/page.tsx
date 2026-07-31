import Projects from "@/components/sections/Projects";
import PageShell from "@/components/custom/PageShell";
import PageHeader from "@/components/custom/PageHeader";

export const metadata = {
  title: "Projects — Suvadra Barua",
  description:
    "Selected projects across Web3 payments, smart contracts, and applied research.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Projects"
        subtitle="Selected work across Web3 payments, smart contracts, and applied research."
      />
      <Projects hideTitle showAll />
    </PageShell>
  );
}
