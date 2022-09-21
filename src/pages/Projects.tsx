import React from "react";
import { ProjectList } from "../components/ProjectList";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  Project from "./Project";


function Projects() {   
  
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">

        {ProjectList.map((_, idx) => (
            <Project id={idx} key={idx}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;