import { useState} from 'react';
import './App.css';

import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
    const [count, setCount] = useState(0);

    function handleAdd() {
        count += 1;
        console.log(count);
    }

    return (
        <div className="App">
            <Header />
            <h1 className='active'> Naice Counter </h1>
            <div className="box">
                <p>{count}</p>
                <button onClick={handleAdd} className="add">ADD</button>
                <button className="sub">SUB</button>
            </div>
            <Footer />
        </div>
    )
}

export default App;