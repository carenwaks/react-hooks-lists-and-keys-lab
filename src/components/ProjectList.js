import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects);

  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div key={projects.id} project={projects}><ProjectItem /></div>
    </div>
  );
}

export default ProjectList;
