import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    <div className="grid">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
}

export default ProjectGrid;