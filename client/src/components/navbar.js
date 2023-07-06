import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/navbar.css";
import Logo from "../images/Logo.svg"
import Arrow from "../images/Arrow.svg"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

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
          <Link to="/signin" className="nav-item nav-link">Sign in</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

