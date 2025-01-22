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

    return (
        <div className="App">
            <Header />
            <h1 className='active'> Naice Task List </h1>
            <ul>
                { tasks.map((task,) => (
                    <li key={task.id}>
                        <span>{task.id} - {task.name}</span>
                        <button>Delete</button>
                    </li>
                )) }
            </ul>
            <Footer />
        </div>
    );
}

export default App;