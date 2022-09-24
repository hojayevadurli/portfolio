import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import toDoListApp from "../styles/toDoListApp.png";
import QuizApp from "../styles/QuizApp.png";

export type CountryFlagType ={
  name:string,
  description: string,
  url: string
}

export const CountryFlagsList : CountryFlagType[] = [
    {
      name: "Antarctica",
      description: "Coldest Continent of the world",
      url:"https://flagcdn.com/256x192/aq.png"
     },
    {
        name: "Pakistan",
        description: "One of the Neighbours of India",
        url:"https://flagcdn.com/256x192/pk.png"
    }
    // {
    //   name: "Project 3",
    //   image:QuizApp,
    //   skills: "React",
    //   url:"../QuizApp"
    // }
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