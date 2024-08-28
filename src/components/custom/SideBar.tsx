"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SidebarLink from "./SidebarLink"; // Import the reusable component

interface LinkData {
  href: string;
  label: string;
  delay: number;
  id: string;
}

const linksData: LinkData[] = [
  { href: "#persona", label: "Persona", delay: 0.1, id: "personal" },
  { href: "#professional-experience", label: "Professional <br/> Exp.", delay: 0.2, id: "#professional-experience" },
  { href: "#prestige", label: "Prestige", delay: 0.3, id: "prestige" },
  { href: "#projects ", label: "Projects", delay: 0.4, id: "projects" },
  { href: "#professional-development", label: "Professional <br/> Development ", delay: 0.5, id: "professional-development" },
  { href: "#participation-presentations", label: "Participation <br/> & <br/> Presentations ", delay: 0.5, id: "participation-presentations" },
  { href: "#contact", label: "Contact ", delay: 0.5, id: "contact" },
];

const SideBar: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  const handleClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Temporarily set a scroll margin before scrolling
      targetElement.style.scrollMarginTop = "85px";

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset the scroll margin after a short delay
      setTimeout(() => {
        targetElement.style.scrollMarginTop = "0px";
      }, 100);

      // Update the URL hash without causing a full page reload
      window.history.pushState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrapper");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.nav
      className="hidden md:flex bg-earth-500 text-white w-25 h-screen sticky top-0 left-0 z-20 flex-col items-center overflow-y-scroll scrollbar-hide"
    >
      <div className="flex-shrink-0 flex flex-col gap-1 text-2xl font-bold leading-none w-11 h-11 align-center justify-center rounded my-4 px-2">
        &lt;/&gt;
        <span>
          SB
          <span className="font-bold leading-none text-earth-800">.</span>
        </span>
      </div>
      <div className="flex flex-col gap-4">
      {linksData.map((link) => (
        <SidebarLink
          key={link.id}
          href={link.href}
          label={link.label}
          delay={link.delay}
          isSelected={selected === link.id}
          onClick={() => {
            setSelected(link.id);
            handleClick(link.id);
          }}
        />
      ))}
      </div>
    </motion.nav>
  );
};

export default SideBar;
