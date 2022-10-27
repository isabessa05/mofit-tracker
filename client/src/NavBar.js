import React from "react";
import { Link } from 'react-router-dom'
function NavBar ({handleLogOut}) {   

    return (
        <nav className="menu__container">
            <div class="menu">
        <Link to="/"> Home  </Link>
        <Link to="/login"> Log In   </Link>
        <Link to="/newworkout"> Add Workout  </Link>
        <Link onClick={handleLogOut}>Log Out</Link>
        <Link to="/signup"> Sign Up </Link>
        </div>
        </nav>
    )
}

export default NavBar;
