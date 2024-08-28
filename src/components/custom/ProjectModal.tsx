"use client";
import styles from "./projectmodal.module.scss";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";

interface ProjectModalProps {
  modalContent: React.ReactNode;
  projectLink: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imgSrc: string;
  isOpen: boolean;
  title: string;
  code: string;
  tech: string[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  modalContent,
  projectLink,
  setIsOpen,
  imgSrc,
  isOpen,
  title,
  code,
  tech,
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      if (body) body.style.overflowY = "hidden";
    } else {
      if (body) body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const content = (
    <div className='fixed inset-0 z-[100000000] h-screen py-20 px-5  bg-[var(--bg-opaque)] backdrop-blur-md overflow-y-scroll flex justify-center cursor-pointer' onClick={() => setIsOpen(false)}>
      <button className='bg-none border-none  absolute top-5 right-5 cursor-pointer'>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className='w-full max-w-3xl h-fit rounded-md overflow-hidden bg-earth-200 shadow-[0px_5px_15px_rgba(0,0,0,0.1)] cursor-auto'
      >
        <img
          className='w-full'
          src={imgSrc}
          alt={`An image of the ${title} project.`}
        />
        <div className='p-10'>
          <h4 className="md:text-lg font-bold">{title}</h4>
          <div className='flex flex-wrap gap-5 text-xs text-black/90 my-0.5 mb-10'>{tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Project Links<span>.</span>
            </p>
            <div className={`${styles.links} text-earth-500`}>

              <Link target="_blank" rel="nofollow" href={projectLink}>
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.body);
};
