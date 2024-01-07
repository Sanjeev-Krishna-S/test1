import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container"> 
            <div className='logo'> 
            <h3>ADMIN DASHBOARD</h3>
            </div>
    <div className='nav-elements'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/admin/addmentor">Add Mentor</Link></li>
                <li><Link to="/admin/viewmentor">View Mentors</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
    </div>
    </div>
    </nav>
  )
}

export default Navbar
