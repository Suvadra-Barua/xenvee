import SectionTitle from "@/components/custom/SectionTitle";
import talks from "@/app/data/talks";

const Talks = () => {
  return (
    <section id="talks" className="scroll-mt-20 pt-20">
      <SectionTitle
        index="05"
        title="Talks & Workshops"
        subtitle="Invited talks and instruction"
      />

      <ul className="divide-y divide-ink-100 rounded-lg border border-ink-200 bg-white">
        {talks.map((t) => (
          <li
            key={`${t.title}-${t.year}`}
            className="grid grid-cols-[70px_1fr_auto] items-baseline gap-3 px-6 py-4"
          >
            <span className="font-mono text-xs text-ink-500">{t.year}</span>
            <div>
              <h3 className="text-[15px] text-ink-900">{t.title}</h3>
              <p className="mt-0.5 text-sm text-ink-600">{t.venue}</p>
            </div>
            {t.type && (
              <span className="justify-self-end font-mono text-[10px] uppercase tracking-wider text-ink-500">
                {t.type}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Talks;
