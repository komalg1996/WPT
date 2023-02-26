import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Display from './Components/Display'
import Login from './Components/Login'
import StudentRegistration from './Components/StudentRegistration'
import Home from './Components/Home'
// import StudentRegistration from './components/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/registration' element={<StudentRegistration></StudentRegistration>}></Route>
          <Route path='/display' element={<Display></Display>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
