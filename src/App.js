import { useState} from 'react';
import './App.css';

import React from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
    const [count, setCount] = useState(0);
    
    function handleAdd() {
        setCount(count + 1);
    }

    function handleSub() {
        setCount(count - 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <div className="App">
            <Header />
            <h1 className='active'> Naice Counter </h1>
            <div className="box">
                <p>{count}</p>
                <button onClick={handleAdd} className="add">ADD</button>
                <button onClick={handleSub} className="sub">SUB</button>
                <button onClick={handleReset} className="reset">RESET</button>
            </div>
            <Footer />
        </div>
    )
}

export default App;