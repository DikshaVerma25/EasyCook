import React from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <Link to="/" className="navbar-title-link">
            <span className="navbar-title-text">EasyCo</span>
          </Link>
          <div class="navbar-title-line"></div>
          <div class="navbar-title-circle"></div>
          <span className="navbar-title-symbol">&#x1F372;</span>
          <span className="navbar-title-text">k</span>
        </div>
        <div className="nav-menu">
          <Link to="/recipes" className="nav-item nav-link">
            Recipes
            <span className="dropdown-arrow">&#9662;</span>
          </Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/contact" className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
