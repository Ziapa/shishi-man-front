import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./commponent/Header";
import Registration from "./commponent/Registration";
import Login from './commponent/Login';
import {Users} from "./commponent/Users/Users";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="registration" element={<Registration/>}/>
                <Route path="users" element={<Users/>}/>
            </Routes>
        </div>
    );
}

export default App;
