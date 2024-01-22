import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container"> 
            <div className='logo'> 
            <h3>MENTOR DASHBOARD</h3>
            </div>
    <div className='nav-elements'>
            <ul>
                <li><Link to='/mentor/*'>Home</Link></li>
                <li><Link to="/login">Logout</Link></li>
            </ul>
    </div>
    </div>
    </nav>
  )
}

export default Navbar
