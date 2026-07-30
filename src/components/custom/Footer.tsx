import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-ink-200 bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-ink-500">
          © {new Date().getFullYear()} Suvadra Barua · Built with Next.js &
          Tailwind
        </p>
        <div className="flex items-center gap-4 text-ink-600">
          <a
            href="mailto:suvadrabarua21@gmail.com"
            aria-label="Email"
            className="hover:text-ink-900"
          >
            <FiMail size={16} />
          </a>
          <a
            href="https://github.com/Suvadra-Barua"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-900"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/Suvadra-Barua"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink-900"
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
