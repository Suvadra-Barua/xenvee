import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
} from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import profile from "@/app/data/profile";

const Hero = () => {
  return (
    <section
      id="about"
      className="scroll-mt-20 pb-10 pt-14 md:pt-20"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:items-start md:gap-10">
        <div className="mx-auto md:mx-0">
          <div className="relative h-36 w-36 overflow-hidden rounded-full border border-ink-200 sm:h-40 sm:w-40 md:h-48 md:w-48">
            <Image
              src="/Suvadra2.jpeg"
              alt={profile.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 192px, 160px"
              priority
            />
          </div>
        </div>

        <div>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-ink-900 md:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-ink-500">{profile.role}</p>

          <div className="mt-5 space-y-1.5 text-sm text-ink-700">
            {profile.affiliations.map((aff) => (
              <p key={aff.org}>
                <span className="text-ink-900">{aff.label}</span>
                <span className="text-ink-400"> · </span>
                <Link
                  href={aff.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                >
                  {aff.org}
                </Link>
              </p>
            ))}
            <p className="pt-1 font-mono text-xs text-ink-500">
              {profile.location}
            </p>
          </div>

          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-700">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-ink-600">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="inline-flex items-center gap-1.5 text-sm hover:text-ink-900"
            >
              <FiMail size={14} />
              <span>Email</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-1.5 text-sm hover:text-ink-900"
            >
              <FiGithub size={14} />
              <span>GitHub</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-1.5 text-sm hover:text-ink-900"
            >
              <FiLinkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              className="inline-flex items-center gap-1.5 text-sm hover:text-ink-900"
            >
              <SiGooglescholar size={14} />
              <span>Scholar</span>
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Curriculum Vitae"
              className="inline-flex items-center gap-1.5 text-sm hover:text-ink-900"
            >
              <FiFileText size={14} />
              <span>CV</span>
              <FiArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
