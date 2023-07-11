import React from 'react';
import "./styles/sign-in.css";
import Image from "../images/sign-in.jpg";

function SignIn({ closeSignInModal }) {
  const handleSignIn = () => {
    
    closeSignInModal();
  };

  return (
    
    <div className="sign-in-modal">
        <div className="left-image-container">
          <img src={Image} alt="Image" className="left-image" />
        </div>
        <div className="right-content">
        <h1 id= "modal-title">Discover EasyCook</h1>
        <h5 id="description">Where Delicious Recipes Meet Sustainability</h5>
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
              <input type="password" placeholder="Re-enter Password" />
            </div>
            </div>
          <div className="form-row">
            <button className="create-account-button">Create Account</button>
          </div>
        </form>
        </div>
    </div>
  );
}

export default SignIn;
