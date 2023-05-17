import React from 'react';
import "../components/styles/navbar.css";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a class="nav-link easycook" href="#">EasyCo{'\u1F958'}k</a>
          <div className="nav-menu">
            <a href="/" className="nav-item nav-link">Recipes</a>
            <a href="/about" className="nav-item nav-link">Signup</a>
            <a href="/contact" className="nav-item nav-link">About</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;