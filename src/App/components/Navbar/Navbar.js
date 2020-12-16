import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <nav>
            <h2>Finance Calculator</h2>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/internal"> IRR </Link></li>
                <li><Link to="/functiondua"> Function 2 </Link></li>
                <li><Link to="/functiontiga"> Function 3 </Link></li>
                <li><Link to="/functionempat"> Function 4 </Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
