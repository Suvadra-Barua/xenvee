import SectionTitle from "@/components/custom/SectionTitle";
import profile from "@/app/data/profile";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 pt-20">
      <SectionTitle
        index="07"
        title="Get in Touch"
        subtitle="Open to collaboration, research, and interesting problems"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <h3 className="font-serif text-xl text-ink-900">
            Let&apos;s build something.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            The fastest way to reach me is email. I&apos;m open to research
            collaborations, contract work on blockchain and security projects,
            and mentorship.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center justify-between gap-4 rounded-md border border-ink-200 px-4 py-3 text-sm transition-colors hover:border-ink-900"
            >
              <span className="inline-flex items-center gap-2 text-ink-800">
                <FiMail size={14} />
                {profile.email}
              </span>
              <FiArrowUpRight className="text-ink-500" size={14} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 rounded-md border border-ink-200 px-4 py-3 text-sm transition-colors hover:border-ink-900"
            >
              <span className="inline-flex items-center gap-2 text-ink-800">
                <FiGithub size={14} />
                github.com/Suvadra-Barua
              </span>
              <FiArrowUpRight className="text-ink-500" size={14} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-4 rounded-md border border-ink-200 px-4 py-3 text-sm transition-colors hover:border-ink-900"
            >
              <span className="inline-flex items-center gap-2 text-ink-800">
                <FiLinkedin size={14} />
                linkedin.com/in/Suvadra-Barua
              </span>
              <FiArrowUpRight className="text-ink-500" size={14} />
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-ink-200 bg-white p-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink-500">
            Elsewhere
          </h3>
          <dl className="mt-4 grid grid-cols-[100px_1fr] gap-y-3 text-sm">
            <dt className="font-mono text-xs text-ink-500">Location</dt>
            <dd className="text-ink-800">{profile.location}</dd>

            <dt className="font-mono text-xs text-ink-500">CV</dt>
            <dd>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-ink-800 hover:text-accent"
              >
                Download PDF
                <FiArrowUpRight size={12} />
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Contact;
