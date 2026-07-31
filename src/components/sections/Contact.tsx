import SectionTitle from "@/components/custom/SectionTitle";
import profile from "@/app/data/profile";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

const items = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/Suvadra-Barua",
    href: profile.github,
    Icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Suvadra-Barua",
    href: profile.linkedin,
    Icon: FiLinkedin,
  },
  {
    label: "Scholar",
    value: "Google Scholar profile",
    href: profile.googleScholar,
    Icon: SiGooglescholar,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-20 pt-14">
      <SectionTitle title="Get in Touch" />

      <p className="mb-5 max-w-2xl text-[15px] leading-relaxed text-ink-700">
        The fastest way to reach me is email. I&apos;m open to research
        collaborations, contract work on blockchain and security projects, and
        mentorship.
      </p>

      <dl className="border-t border-ink-100">
        {items.map(({ label, value, href, Icon }) => (
          <div
            key={label}
            className="grid grid-cols-1 gap-1 border-b border-ink-100 py-3 text-sm sm:grid-cols-[110px_1fr] sm:gap-4"
          >
            <dt className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-500">
              <Icon size={12} />
              {label}
            </dt>
            <dd className="min-w-0 truncate">
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="text-ink-800 hover:text-accent"
              >
                {value}
              </a>
            </dd>
          </div>
        ))}
        <div className="grid grid-cols-1 gap-1 border-b border-ink-100 py-3 text-sm sm:grid-cols-[110px_1fr] sm:gap-4">
          <dt className="font-mono text-xs uppercase tracking-widest text-ink-500">
            Location
          </dt>
          <dd className="text-ink-800">{profile.location}</dd>
        </div>
      </dl>
    </section>
  );
};

export default Contact;
