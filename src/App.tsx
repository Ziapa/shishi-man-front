import React from 'react';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Expenses from './commponent/Expenses';
import {Header} from "./commponent/Header";

function App() {
    return (
        <div className="App">
<Header/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="expenses" element={<Expenses />} />
                <Route path="header" element={<Header />} />
            </Routes>
        </div>
    );
}

export default App;
