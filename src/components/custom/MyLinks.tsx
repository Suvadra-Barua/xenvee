import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";
import {
  SiGithub,
  SiGooglescholar,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";

import { motion } from "framer-motion";

const links = [
  {
    link: "https://www.linkedin.com/in/Suvadra-Barua/",
    icon: <SiLinkedin className="size-4  md:size-6  lg:size-8 " />,
  },
  {
    link: "https://leetcode.com/u/user4818qC/",
    icon: <SiLeetcode className="size-4  md:size-6  lg:size-8 " />,
  },
  {
    link: "https://github.com/Suvadra-Barua",
    icon: <SiGithub className="size-4  md:size-6  lg:size-8 " />,
  },
  {
    link: "https://scholar.google.com/citations?user=haA8Z1UAAAAJ&hl=en",
    icon: <SiGooglescholar className="size-4  md:size-6  lg:size-8 " />,
  },
];

export const MyLinks = () => {
  return (
    <div className="flex gap-3 pt-2.5">
      {links.map((link, id) => (
        <motion.span
          key={id}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: id * 0.2 }}
        >
          <a
            href={link.link}
            target="_blank"
            rel="nofollow"
            className="opacity-50 relative z-20 hover:text-earth-500 hover:opacity-100"
          >
            {link.icon}
          </a>
        </motion.span>
      ))}
    </div>
  );
};
