"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#talks", label: "Talks" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const TopNav = () => {
  const [active, setActive] = useState<string>("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink-900"
        >
          suvadra<span className="text-accent">.</span>barua
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors ${
                  active === link.href.slice(1)
                    ? "text-ink-900"
                    : "text-ink-500 hover:text-ink-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-ink-200 bg-background">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-sm text-ink-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default TopNav;
