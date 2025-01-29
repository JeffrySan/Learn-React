import { useState } from 'react'
import { TaskCard } from './TaskCard';

export const TaskList = (props) => {

    const [tasks, setTasks] = useState([
        { id: 5271, name: "Record React Lectures", completed: true },
        { id: 2371, name: "Edit React Lectures", completed: false },
        { id: 3271, name: "Watch Lectures", completed: false },
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <>
            <h1 className='active'> Naice Task List {props.title} {props.subtitle}</h1>
            <ul>
                <button onClick={() => setShow(!show)}>Toggle</button>
                {show && tasks.map((task) => (
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
                ))}
            </ul>
        </>
    )
}
