import React from 'react';
import "../components/styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <span className="navbar-title-text">EasyCo</span>
          <span className="navbar-title-symbol">&#x1F372;</span>
          <span className="navbar-title-text">k</span>
          <hr className="navbar-title-line" />
        </div>
        <div className="nav-menu">
            <a href="/" className="nav-item nav-link">
              Recipes
            <span className="dropdown-arrow">&#9662;</span>
            </a>
          <a href="/about" className="nav-item nav-link">Signup</a>
          <a href="/contact" className="nav-item nav-link">About</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
