import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="container"> 
            <div className='logo'> 
            <h3>ICTAK</h3>
            </div>
    <div className='nav-elements'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
            </ul>
    </div>
    </div>
    </nav>
  )
}

export default Navbar
