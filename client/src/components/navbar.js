import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/styles/navbar.css";
import SignIn from '../pages/signin';
import Logo from "../images/Logo.svg"


function Navbar() {

  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handleSignInModalToggle = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
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
          </Link>
          <Link to="#" className="nav-item nav-link" onClick={handleSignInModalToggle}>
            Sign in
          </Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
        </div>
        {isSignInModalOpen && <SignIn closeSignInModal={closeSignInModal} />}
      </div>
    </nav>
  );
}

export default Navbar;