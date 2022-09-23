// import { AddTask } from '@mui/icons-material'
import React from 'react'
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Header from '../toDoListAppComponents/Header'
import Task from '../toDoListAppComponents/Task'
import Tasks from '../toDoListAppComponents/Tasks'
import AddTask from '../toDoListAppComponents/AddTask'
import "../styles/toDoList.css"



const ToDoListApp =()=>{
    
    const [showAddTask, setShowAddTask]= useState(false)
    const [tasks, setTasks] = useState([
        {
          id:1,
          text: 'Homework1',
          day: 'Today',
          reminder: true
        },
        {
          id:2,
          text: 'Homework3',
          day: 'Today',
          reminder: true
        },
        {
          id:3,
          text: 'Homework4',
          day: 'Today',
          reminder: false
        }
      ])
// Delete task 
const deleteTask=(id:number)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
}
//Add Task
const addTask=(task:Task)=>{
  const id=Math.floor(Math.random()*100)+1
  const newTask={...task,id}
  setTasks([...tasks, newTask])
}
const toggleTask = (id:number) => {
    setTasks(tasks.map(t=> t.id === id? {...t, reminder:!t.reminder}:t))
} 
    return(
          
        <div className='container'>
            <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}
            />
            {showAddTask&&< AddTask onAdd={addTask}/>}           
            <Tasks tasks={tasks} 
            onDelete={deleteTask}
            onToggle = {toggleTask}/>
        </div>
    )
}

export default ToDoListApp
