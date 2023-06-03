import React from 'react';
import Navbar from '../components/navbar';
import "./pages.css";
import image from "../images/wonton.jpeg"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <h1>Your Indregients our recipies</h1>
        <div className="symbol-container">
          <div className="symbol turnip"></div>
          <div className="symbol grape"></div>
          <div className="symbol mango"></div>
        </div>
        <div className="left-image-container">
        <img src={image} alt="Image" className="left-image" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;


