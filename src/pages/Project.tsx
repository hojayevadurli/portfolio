import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList, ProjectType } from "../components/ProjectList";
import "../styles/Project.css";
import { BrowserRouter as Router,Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

type ProjectProps={
  project: ProjectType
}


function Project({project}:ProjectProps){
  //  const { id } = useParams<ProjectParamsType>();
  //  const project = ProjectList[parseInt(id??"0")];
  const navigate = useNavigate();

  return (
    <div
    className="projectItem"
    onClick={() => {
      navigate(project.url);
    }}
  >
    <div style={{ backgroundImage: `url(${project.image})` }} className="bgImage" />
    <h1> {project.name} </h1>
    <h2>Skills:</h2> <p>{project.skills}</p>
  </div>
  );
}

export default Project;