import SectionTitle from "@/components/custom/SectionTitle";
import skills, { courses } from "@/app/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 pt-20">
      <SectionTitle
        index="06"
        title="Skills & Coursework"
        subtitle="Toolkit and formal training"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.title}
            className="rounded-lg border border-ink-200 bg-white p-5"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-ink-200 bg-ink-50 px-2 py-0.5 font-mono text-[11px] text-ink-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-ink-200 bg-white p-5">
        <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
          Selected Online Coursework
        </h3>
        <ul className="mt-3 grid grid-cols-1 gap-2 text-sm text-ink-700 md:grid-cols-2">
          {courses.map((c) => (
            <li key={c.title} className="flex items-baseline gap-2">
              <span className="font-mono text-[11px] text-ink-400">→</span>
              <span>
                <span className="text-ink-900">{c.title}</span>
                <span className="text-ink-500"> · {c.institution}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
