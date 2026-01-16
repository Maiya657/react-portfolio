import { useState } from "react";

export function ProjectList({ projects }) {
  return (
    <div className="images">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt={project.category} />
      ))}
    </div>
  );
}

export default ProjectList