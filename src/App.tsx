import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./commponent/Header/Header";
import Registration from "./commponent/Registration/Registration";
import {Users} from "./commponent/Users/Users";
import Login from "./commponent/Login/Login";

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
            dfhdfhgdsf
        </div>
    );
}

export default App;
