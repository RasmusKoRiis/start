import React from "react";
import ComputerIcon from "./icons/ComputerIcon";

function ProjectCard({ name, url, icon, inlineSvg, tag }) {
    return (
      <a className="project" href={url} target="_blank" rel="noreferrer">
        {inlineSvg === "computer" ? (
          <ComputerIcon />
        ) : (
          <img src={icon} alt={name} />
        )}
        <div className="project-name">{name}</div>
        {tag && <div className="project-tag">{tag}</div>}
      </a>
    );
  }
  

export default ProjectCard;