import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            {/* set links */}
            <Link to="/"><button type='button'>Home</button></Link>
            <Link to="/Login"><button type='button'>Login</button></Link>
            <Link to="/StudentRegistration"><button type='button'>Registration</button></Link>
            <Link to="/Display"><button type='button'>Display</button></Link>
        </div>
    )
}

export default Navbar