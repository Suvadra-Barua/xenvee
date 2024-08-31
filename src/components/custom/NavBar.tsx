"use client";
import React from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";

interface LinkData {
  href: string;
  label: string;
  delay: number;
  id: string;
}

interface NavbarProps {
  links: LinkData[];
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ links, toggleSidebar }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-earth-500 text-white h-full p-4 transform md:hidden overflow-y-auto scrollbar-hide`}
    >
      {/* <div className="flex justify-end">
        <button className="md:hidden p-2 mb-4" onClick={toggleSidebar}>
          <svg viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z" />
          </svg>
        </button>
      </div> */}

      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="text-white" onClick={toggleSidebar}>
              {parse(link.label)}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Navbar;
