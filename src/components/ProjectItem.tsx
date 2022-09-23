import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectType } from "../components/ProjectList";


type ProjectItemProps={
    project: ProjectType
    id:number
 }

 
function ProjectItem({ project, id}: ProjectItemProps) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/ToDolistApp");
      }}
    >
      <div style={{ backgroundImage: `url(${project.image})` }} className="bgImage" />
      <h1> {project.name} </h1>
      <h2>Skills:</h2> <p>{project.skills}</p>
    </div>
  );
}

export default ProjectItem;