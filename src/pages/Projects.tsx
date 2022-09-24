import React from 'react'
import { ProjectList } from '../components/ProjectList'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProjectItem from '../components/ProjectItem'
import Project from './Project'
import '../styles/Projects.css'
import '../styles/Project.css'
import QuizApp from '../ProjectsFolder/QuizApp'
import QuizAppItem from '../components/QuizAppItem'

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>

      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return(<Project project={project} key={idx}/> )
         
        })}
      </div>
    </div>
  )
}

export default Projects
