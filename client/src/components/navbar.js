import React from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/navbar.css";
import Logo from "../images/Logo.svg"
import Arrow from "../images/Arrow.svg"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <Link to="/" className="navbar-title-link">
            <img src ={Logo} className='navbar-title-text' alt= "Logo" />
          </Link>
          
        </div>
        <div className="nav-menu">
          <Link to="/recipes" className="nav-item nav-link">
            Recipes
            <img src ={Arrow} className='dropdown-arrow' alt= "dropdown" />
          </Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

