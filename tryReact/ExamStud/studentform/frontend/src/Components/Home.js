import React from 'react'
import Navbar from './Navbar';
import { Link } from "react-router-dom";
import Login from './Login';
import StudentRegistration from './StudentRegistration';
import Display from './Display';
import './Home.css'


function Home() {
    return (
        <div>
            <h1>Student Registration</h1>
            <Navbar></Navbar>
            {/* <div className="Wrapper">
                <div className="div1"><Login></Login></div>
                <div className="div2"><StudentRegistration></StudentRegistration></div>
                <div className="div3"><Display></Display></div>
            </div> */}


        </div>
    )
}
export default Home;
