import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toDoListApp from "../styles/toDoListApp.png";
import QuizApp from "../styles/QuizApp.png";



export type ProjectType ={
  name:string,
  image: any,
  skills: string,
  url: string
}

export const ProjectList : ProjectType[] = [
    {
      name: "To Do List App",
      image: toDoListApp,
      skills: "React, TypeScript ,HTML,CSS",
      url:"../toDoListApp"
    },
    {
      name: "Quiz App",
      image:QuizApp,
      skills: "React",
      url:"../QuizApp"
    },
    {
      name: "Project 3",
      image:QuizApp,
      skills: "React",
      url:"../QuizApp"
    }
    // {
    //   id:7,
    //   name: "Project 4",
    //   skills: "React",
    // },
    // {
    //   id:8,
    //   name: "Project 5",
    //   skills: "JavaScript,HTML,CSS",
    // },
    // {
    //   id:9,
    //   name: "Project 6",
    //   skills: "React Native,JavaScript,HTML,CSS",
    // },
  ];