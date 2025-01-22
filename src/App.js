import { useState} from 'react';
import './App.css';

import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 2371, name: "Edit React Lectures", completed: false},
        {id: 3271, name: "Watch Lectures", completed: false},
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="App">
            <Header />
            <h1 className='active'> Naice Task List </h1>
            <ul>
                <button onClick={() => setShow(!show)}>Toggle</button>
                { show && tasks.map((task,) => (
                    <li key={task.id} className={task.completed ? "completed" : "incompleted"}>
                        <span>{task.id} - {task.name}</span>
                        <button onClick={() => handleDelete(task.id)}className="delete">Delete</button>
                    </li>
                )) }
            </ul>
            <Footer />
        </div>
    );
}

export default App;