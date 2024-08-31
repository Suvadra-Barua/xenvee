"use client";
import { useState } from "react";
import { Project } from "../custom/Project";
import { SectionHeader } from "../custom/SectionHeader";
import { OutlineButton } from "../custom/OutlineButton";
import projects from "@/app/data/projects";

export const Projects = () => {
  // State to keep track of how many projects to show
  const [visibleProjects, setVisibleProjects] = useState(2);

  // Determine if all projects are currently visible
  const allProjectsVisible = visibleProjects >= projects.length;

  // Function to toggle between showing more or less projects
  const toggleProjectsVisibility = () => {
    if (allProjectsVisible) {
      setVisibleProjects(2); // Show only 2 projects
    } else {
      setVisibleProjects(projects.length); // Show all projects
    }
  };

  return (
    <section
      className="section-wrapper pt-16 md:pt-28 md:w-[80%] w-[90%] mx-auto"
      id="projects"
    >
      <SectionHeader title="Projects" dir="r" />
      <div className="relative">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.slice(0, visibleProjects).map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <OutlineButton onClick={toggleProjectsVisibility}>
          {allProjectsVisible ? "Show Less" : "Show More"}
        </OutlineButton>
      </div>
    </section>
  );
};
