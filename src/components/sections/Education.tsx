import SectionTitle from "@/components/custom/SectionTitle";
import profile from "@/app/data/profile";

const Education = () => {
  return (
    <section id="education" className="scroll-mt-20 pt-14">
      <SectionTitle title="Education" />

      <ul className="border-t border-ink-100">
        {profile.education.map((edu) => (
          <li
            key={edu.degree}
            className="grid grid-cols-1 gap-1 border-b border-ink-100 py-4 sm:grid-cols-[140px_1fr] sm:gap-4 md:grid-cols-[160px_1fr]"
          >
            <span className="font-mono text-xs text-ink-500">{edu.period}</span>
            <div className="min-w-0">
              <h3 className="text-[15px] text-ink-900">{edu.degree}</h3>
              <p className="mt-0.5 text-sm text-ink-600">{edu.institution}</p>
              {edu.detail && (
                <p className="mt-2 text-sm text-ink-500">{edu.detail}</p>
              )}
              {edu.thesis && (
                <p className="mt-1 text-sm text-ink-500">
                  <span className="text-ink-700">Thesis:</span> {edu.thesis}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
