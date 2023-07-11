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
        <h3 id="description">Where Delicious Recipes Meet Sustainability</h3>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleSignIn}>Sign In</button>
        </form>
        </div>
    </div>
  );
}

export default SignIn;
