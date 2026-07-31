import Publications from "@/components/sections/Publications";
import PageShell from "@/components/custom/PageShell";
import PageHeader from "@/components/custom/PageHeader";

export const metadata = {
  title: "Publications — Suvadra Barua",
  description:
    "Peer-reviewed and in-submission research by Suvadra Barua.",
};

export default function PublicationsPage() {
  return (
    <PageShell>
      <PageHeader
        title="Publications"
        subtitle="Peer-reviewed and in-submission research."
      />
      <Publications hideTitle />
    </PageShell>
  );
}
