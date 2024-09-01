"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OutlineButton } from "@/components/custom/OutlineButton";
import Navbar from "./NavBar";
import { MyLinks } from "./MyLinks";
const linksData = [
  { href: "#persona", label: "Persona", delay: 0.1, id: "persona" },
  {
    href: "#professional-experience",
    label: "Professional Exp.",
    delay: 0.2,
    id: "professional-experience",
  },
  { href: "#prestige", label: "Prestige", delay: 0.3, id: "prestige" },
  { href: "#projects ", label: "Projects", delay: 0.4, id: "projects" },
  {
    href: "#professional-development",
    label: "Professional Development ",
    delay: 0.5,
    id: "professional-development",
  },
  {
    href: "#participation-presentations",
    label: "Participation & Presentations ",
    delay: 0.6,
    id: "participation-presentations",
  },
  { href: "#contact", label: "Contact ", delay: 0.7, id: "contact" },
];
const Heading = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`px-2 lg:px-14 flex items-center justify-between sticky top-0 z-20 bg-[#11111120] backdrop-blur-md font-bold h-14 md:h-16`}
      >
        <MyLinks />

        <div className="flex gap-2 items-center text-[12px] mt-2 md:mt-0">
          <OutlineButton onClick={() => (window.location.href = "/#contact")}>
            Contact
          </OutlineButton>
          <OutlineButton
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1zvSpEkSG3F1aGeZLkDPRUfsUIiAc3bT4/view?usp=sharing"
              )
            }
          >
            Download My CV
          </OutlineButton>
          <AnimatePresence>
            {true && (
              <motion.button
                initial={{ x: "200%" }}
                animate={{ x: 0 }}
                exit={{ x: "200%" }}
                className=" right-5 top-5 md:hidden"
                onClick={toggleSidebar}
              >
                {!isOpen ? (
                  <svg viewBox="0 0 30 30" width="30px" height="30px">
                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="24px" height="24px">
                    <path d="M12,2C6.47,2,2,6.47,2,12c0,5.53,4.47,10,10,10s10-4.47,10-10C22,6.47,17.53,2,12,2z M16.707,15.293 c0.391,0.391,0.391,1.023,0,1.414C16.512,16.902,16.256,17,16,17s-0.512-0.098-0.707-0.293L12,13.414l-3.293,3.293 C8.512,16.902,8.256,17,8,17s-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L10.586,12L7.293,8.707 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L12,10.586l3.293-3.293c0.391-0.391,1.023-0.391,1.414,0 s0.391,1.023,0,1.414L13.414,12L16.707,15.293z" />
                  </svg>
                )}
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && <Navbar links={linksData} toggleSidebar={toggleSidebar} />}
      </AnimatePresence>
    </>
  );
};

export default Heading;
