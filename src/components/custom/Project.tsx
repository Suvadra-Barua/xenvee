"use client"
import { useAnimation, useInView, motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { ProjectModal } from "./ProjectModal";
interface ProjectProps {
  modalContent: ReactNode;
  projectLink: string;
  description: string;
  imgSrc: string;
  title: string;
  code: string;
  tech: string[];
}
export const Project = ({
  modalContent,
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}:ProjectProps) => {
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
        className="bg-earth-200  p-6 rounded-lg"
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className='w-full aspect-[16/9] bg-earth-500 cursor-pointer relative rounded-lg overflow-hidden'
        >
          <img
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[20%] transition-all duration-200 rounded-md"
          />
        </div>
        <div className='my-4'>
            <div className='flex items-center gap-3'>
              <h4 className="font-bold text-lg flex-shrink-0 text-earth-700">{title}</h4>
              <div className="w-full h-px bg-text opacity-30" />

              <Link className="opacity-75 transition-opacity duration-200 hover:opacity-100" href={code} target="_blank" rel="nofollow">
                <AiFillGithub color="#3c2e1e" size="1.8rem" />
              </Link>

              <Link className="opacity-75 transition-opacity duration-200 hover:opacity-100" href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="1.8rem" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-brand my-2">{tech.join(" - ")}</div>

            <p className="font-light text-sm">
              {description}{" "}
              <span className="inline-block text-xs font-normal text-brand cursor-pointer hover:underline" onClick={() => setIsOpen(true)}>Learn more {">"}</span>
            </p>

        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={projectLink}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={imgSrc}
        title={title}
        code={code}
        tech={tech}
      />
    </>
  );
};
