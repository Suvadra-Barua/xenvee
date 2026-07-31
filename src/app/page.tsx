import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import PageShell from "@/components/custom/PageShell";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <News />
    </PageShell>
  );
}
