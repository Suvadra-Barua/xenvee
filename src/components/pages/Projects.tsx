"use client";
import { useState } from "react";
import { Project } from "../custom/Project";
import { SectionHeader } from "../custom/SectionHeader";
import { OutlineButton } from "../custom/OutlineButton";
import projects from "@/app/data/projects";

export const Projects = () => {
  // State to keep track of how many projects to show
  const [visibleProjects, setVisibleProjects] = useState(2);

  // Function to load more projects
  const showMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
  };

  return (
    <section
      className=" section-wrapper pt-16 md:pt-28 md:w-[80%] w-[90%] mx-auto"
      id="projects"
    >
      <SectionHeader title="Projects" dir="r" />
      <div className="relative">
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 ">
          {projects.slice(0, visibleProjects).map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
        {/* <div className=" z-[99] w-full absolute flex items-end justify-center bg-gradient-to-b from-background/10 to-background/70 to-90% p-2 inset-0">
          <button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 px-4 py-2 mb-8 h-8 text-xs"
            type="button"
            aria-controls="radix-:rg3:"
            aria-expanded="false"
            data-state="closed"
            onClick={showMoreProjects}
          >
            Expand
          </button>
        </div> */}
      </div>
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-8">
          <OutlineButton
            onClick={showMoreProjects}
          >
            Show More
          </OutlineButton>
        </div>
      )}
    </section>
  );
};

