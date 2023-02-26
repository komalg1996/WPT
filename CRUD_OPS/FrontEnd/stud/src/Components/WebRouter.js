import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import StudentRegistration from './StudentRegistration'

function WebRouter() {
    return (
        <div>
            <Router>
                <Home></Home>
                <Routes>
                    <Route path="/Login" element={<Login></Login>}></Route>
                    <Route path="/StudentRegistration" element={<StudentRegistration></StudentRegistration>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default WebRouter