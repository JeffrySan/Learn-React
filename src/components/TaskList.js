import { useState } from 'react'
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

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
                    <TaskCard key={task.id} task={task} handleDelete={handleDelete} info={props.info} />
                ))}
            </ul>
            <BoxCard result="success">
                <p className="title">Lorem, ipsum.</p>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, inventore.</p>
            </BoxCard>
            <BoxCard result="warning">
                <p className="title">Lorem, ipsum dolor.</p>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, inventore.</p>
            </BoxCard>
            <BoxCard result="alert">
                <p className="title">Lorem ipsum dolor sit.</p>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, inventore.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, vitae quibusdam. Impedit odio eos, assumenda dicta dolore eveniet, autem id necessitatibus, eaque totam quia voluptates doloremque quasi ducimus sequi optio molestiae fuga sapiente quidem tenetur sit? Ullam similique quaerat minus placeat nihil, molestiae sed harum eum excepturi? Minima, consectetur ratione.</p>
            </BoxCard>
        </>
    )
}
