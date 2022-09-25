// import { CountryFlagsList } from './CountryFlagsList'

import React from 'react'
import "../styles/FlagQuiz.css"
import { CountryFlagsList, CountryFlagType } from './CountryFlagsList'

type QuizProps={
    flag: CountryFlagType
}
export default function CountryQuiz() {
  return (
    <div className='quiz-container'>
        <h1>CountryQuiz</h1>
        
    </div>
  )
}


// function countryQuiz() {
//     return (
//       <div className="projects">
//         <h1> My Personal Projects</h1>
  
//         <div className="projectList">
//           {ProjectList.map((project, idx) => 
//             <Project project={project} key={idx}/> )}         
          
//         </div>
//       </div>
//     )
//   }
  
//   export default Projects
  