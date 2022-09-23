import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList, ProjectType } from "../components/ProjectList";
import "../styles/Project.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Project(){
   let { id } = useParams();
  //  const project = ProjectList[id];
  return (
    <div className="project">     
      {/* <h1>{project.name}</h1>
      <img src={project.image} /> */}
      <p>
        <Router>
           <Route path="/project" element={<Project />} />
        </Router>
      </p>     
    </div>
  );
}

export default Project;