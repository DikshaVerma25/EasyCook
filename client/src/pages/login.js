import "./styles/login.css";
import Image from "../images/sign-in.jpg";
import React, { useEffect } from 'react';

function Login({ closeSignInModal, openSignInModal }) {
  const handleLogin = () => {
    closeSignInModal();
  };

  const handleRegisterLinkClick = () => {
    openSignInModal();
    closeSignInModal();
  };

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

        <form>
          <div className="form1-row">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form1-row">
            <div className="password-row">
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="form1-row">
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
          </div>
          <div className="form1-row">
            <span className="sign-link" onClick={handleRegisterLinkClick}>
              Register
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
