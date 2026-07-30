import Image from "next/image";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import profile from "@/app/data/profile";

const Hero = () => {
  return (
    <section id="about" className="scroll-mt-20 pt-16 md:pt-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-ink-500">
            {profile.role}
          </p>
          <h1 className="mt-3 font-serif text-5xl leading-tight text-ink-900 md:text-6xl">
            {profile.name}
          </h1>

          <div className="mt-4 space-y-1 text-sm text-ink-600">
            {profile.affiliations.map((aff) => (
              <p key={aff.org}>
                <span className="text-ink-900">{aff.label}</span>
                {" · "}
                <a
                  href={aff.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  {aff.org}
                </a>
              </p>
            ))}
            <p className="font-mono text-xs text-ink-500">
              {profile.location}
            </p>
          </div>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-700">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md bg-ink-900 px-4 py-2 text-sm text-ink-50 transition-colors hover:bg-ink-700"
            >
              Curriculum Vitae
              <FiArrowUpRight />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-4 py-2 text-sm text-ink-800 transition-colors hover:border-ink-900"
            >
              <FiMail size={14} />
              Email
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-4 py-2 text-sm text-ink-800 transition-colors hover:border-ink-900"
            >
              <FiGithub size={14} />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-ink-300 px-4 py-2 text-sm text-ink-800 transition-colors hover:border-ink-900"
            >
              <FiLinkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="relative h-32 w-32 overflow-hidden rounded-full border border-ink-200 md:h-40 md:w-40">
            <Image
              src="/Suvadra2.jpeg"
              alt={profile.name}
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-ink-200 bg-white p-6">
        <h3 className="font-serif text-xl text-ink-900">Education</h3>
        <ul className="mt-4 space-y-4 text-sm text-ink-700">
          {profile.education.map((edu) => (
            <li key={edu.degree}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-ink-900">{edu.degree}</p>
                <p className="font-mono text-xs text-ink-500">{edu.period}</p>
              </div>
              <p className="text-ink-600">{edu.institution}</p>
              {edu.detail && (
                <p className="mt-1 text-ink-500">{edu.detail}</p>
              )}
              {edu.thesis && (
                <p className="mt-1 text-ink-500">
                  <span className="text-ink-700">Thesis:</span> {edu.thesis}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
