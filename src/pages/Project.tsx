import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../components/ProjectList";
 type ProjectProps={
    id:number
 }

function Project({id} : ProjectProps){
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
    </div>
  );
}

export default Project;