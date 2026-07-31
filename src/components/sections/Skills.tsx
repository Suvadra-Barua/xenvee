import SectionTitle from "@/components/custom/SectionTitle";
import skills, { courses } from "@/app/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 pt-14">
      <SectionTitle title="Skills & Coursework" />

      <dl className="border-t border-ink-100">
        {skills.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 gap-1 border-b border-ink-100 py-4 sm:grid-cols-[140px_1fr] sm:gap-4 md:grid-cols-[160px_1fr]"
          >
            <dt className="font-mono text-xs uppercase tracking-widest text-ink-500">
              {group.title}
            </dt>
            <dd className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-ink-700">
              {group.items.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < group.items.length - 1 && (
                    <span className="ml-3 text-ink-300">·</span>
                  )}
                </span>
              ))}
            </dd>
          </div>
        ))}
        <div className="grid grid-cols-1 gap-1 border-b border-ink-100 py-4 sm:grid-cols-[140px_1fr] sm:gap-4 md:grid-cols-[160px_1fr]">
          <dt className="font-mono text-xs uppercase tracking-widest text-ink-500">
            Coursework
          </dt>
          <dd>
            <ul className="space-y-1 text-sm text-ink-700">
              {courses.map((c) => (
                <li key={c.title}>
                  <span className="text-ink-900">{c.title}</span>
                  <span className="text-ink-500"> · {c.institution}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </section>
  );
};

export default Skills;
