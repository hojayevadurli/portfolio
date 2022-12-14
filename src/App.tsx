import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FunAnimation from "./pages/FunAnimation";
import Box1 from "./components/Box1";
import Project from "./pages/Project";
import ToDoListApp from "./ProjectsFolder/ToDolistApp";
import QuizApp from "./ProjectsFolder/QuizApp";
import CountryQuiz from "./QuizAppComponents/CountryQuiz";
import Auth from "./pages/Auth";
import Settings from "./QuizAppComponents/Settings";
import Blogs from "./BlogEntries/Blogs";
import BlogsList from "./components/BlogsList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/funanimation" element={<FunAnimation />} />
          <Route path="/ToDolistApp" element={<ToDoListApp/>} />
          <Route path="/QuizApp" element={<QuizApp/>} />
          <Route path="/CountryQuiz" element={<CountryQuiz/>} />
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/BlogsList" element={<BlogsList/>} />
          <Route path="/BlogsList/:title" element={<Blogs/>} />


          {/* <Route path="/exam" element={<Exam/>} /> */}




         </Routes>
      </Router>
       <Footer/>
    </div>
  );
}

export default App;