import React from 'react';
import Navbar from '../components/navbar.js';
import Image from "../images/sign-in.jpg";
import "./styles/sign-in.css";

function SignInPage() {

return (
    <div>
      <Navbar />
      <div className="sign-in-container">
        <div className="left-image-container">
          <img src={Image} alt="Image" className="left-image" />
          <div className="box-container">
            <h1>Create an account</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
