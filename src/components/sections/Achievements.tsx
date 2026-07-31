import SectionTitle from "@/components/custom/SectionTitle";
import achievements from "@/app/data/achievements";
import { FiArrowUpRight } from "react-icons/fi";

const Achievements = () => {
  return (
    <section id="achievements" className="scroll-mt-20 pt-14">
      <SectionTitle title="Achievements" />

      <ul className="border-t border-ink-100">
        {achievements.map((a) => (
          <li
            key={`${a.title}-${a.year}`}
            className="grid grid-cols-1 items-baseline gap-x-4 gap-y-1 border-b border-ink-100 py-4 sm:grid-cols-[90px_1fr_auto]"
          >
            <span className="font-mono text-xs text-ink-500">{a.year}</span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-[15px] text-ink-900">{a.title}</h3>
                {a.rank && (
                  <span className="font-mono text-[11px] text-accent">
                    {a.rank}
                  </span>
                )}
              </div>
              {a.detail && (
                <p className="mt-0.5 text-sm text-ink-600">{a.detail}</p>
              )}
              {(a.role || a.category) && (
                <p className="mt-0.5 font-mono text-[11px] text-ink-500">
                  {[a.category, a.role].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
            {a.url && (
              <a
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 justify-self-start font-mono text-xs text-ink-600 hover:text-accent sm:justify-self-end"
              >
                Source
                <FiArrowUpRight size={12} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
