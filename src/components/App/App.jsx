import React, { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import Search from '../Search/Search'
import List from '../List/List'
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  

  const handleSearch = (task) => {
    setTask(task);

    const newTask = {
      name: task
    }

    setTasks([...tasks, newTask])
  }

  return (
    <>
    <h1 className='title'>Lista de tarefas</h1>
      <Search onSearch={handleSearch}/>
      {tasks.map((task, index) => {
        <List key={index} task={task.name}/>
      })}
    </>
  )
}

export default App
