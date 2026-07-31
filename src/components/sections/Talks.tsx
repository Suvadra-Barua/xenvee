import SectionTitle from "@/components/custom/SectionTitle";
import talks from "@/app/data/talks";

const Talks = () => {
  return (
    <section id="talks" className="scroll-mt-20 pt-14">
      <SectionTitle title="Talks & Workshops" />

      <ul className="border-t border-ink-100">
        {talks.map((t) => (
          <li
            key={`${t.title}-${t.year}`}
            className="grid grid-cols-1 items-baseline gap-x-3 gap-y-1 border-b border-ink-100 py-4 sm:grid-cols-[70px_1fr_auto]"
          >
            <span className="font-mono text-xs text-ink-500">{t.year}</span>
            <div className="min-w-0">
              <h3 className="text-[15px] text-ink-900">{t.title}</h3>
              <p className="mt-0.5 text-sm text-ink-600">{t.venue}</p>
            </div>
            {t.type && (
              <span className="justify-self-start font-mono text-[10px] uppercase tracking-wider text-ink-500 sm:justify-self-end">
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
