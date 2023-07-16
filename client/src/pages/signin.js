import "./styles/sign-in.css";
import Image from "../images/sign-in.jpg";
import React, { useEffect, useState } from 'react';
import Login from './login';

function SignIn({ closeSignInModal , openLoginModal}) {
  const [showLogin, setShowLogin] = useState(false);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!document.querySelector(".sign-in-modal").contains(event.target)) {
        closeSignInModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLoginLinkClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="sign-in-modal">
      <div className="left-image-container">
        <img src={Image} alt="Image" className="left-image" />
      </div>

      <div className="right-content">
        <div className="close-button" onClick={closeSignInModal}>
          <i className="fas fa-times"></i>
        </div>

        <h1 id="modal-title">Discover EasyCook</h1>
        <h7 id="description">Where Delicious Recipes Meet Sustainability</h7>

        {showLogin ? (
          <Login closeSignInModal={closeSignInModal} />
        ) : (
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-row">
              <div className="password-row">
                <input type="password" placeholder="Password" />
              </div>
            </div>
            <div className="form-row">
              <button className="create-account-button" onClick={handleLoginLinkClick}>
                Create Account
              </button>
            </div>
            <div className="form-row">
                <span className="login-link" onClick={handleLoginLinkClick}>
                Already have an account
                </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignIn;
