import React from 'react'
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Display from './Components/Display'
import Home from './Components/Home'
import Login from './Components/Login'
import StudentRegistration from './Components/StudentRegistration'

function Approuter() {
  return (
    <div>
        <Router>    
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/Display' element={<Display></Display>}></Route>
                <Route path='/registration' element={<StudentRegistration></StudentRegistration>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Approuter