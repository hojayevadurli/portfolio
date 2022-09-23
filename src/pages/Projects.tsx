import React from "react";
import { ProjectList } from "../components/ProjectList";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectItem from "../components/ProjectItem";
import  Project from "./Project";
import "../styles/Projects.css";
import "../styles/Project.css";


function Projects() {   
  
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
            <ProjectItem id={idx} project={project}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;