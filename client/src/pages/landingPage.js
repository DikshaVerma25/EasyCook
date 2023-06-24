import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import ImageContainer from '../components/FetchImage';
import Image from "../images/bg/bg-2.avif"
import "./styles/landing.css";

function LandingPage() {
  // const imageFolder = "../images/bg/";
  // const imageNames = ["bg-1.png","bg-2.avif","bg-3.avif","bg-4.jpeg","bg-5.avif","bg-6.avif","bg-7.avif","bg-8.avif","bg-9.avif","bg-10.avif", "bg-11.avif"]; // Array of image names
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
  //   }, 5000); 

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [imageNames.length]);


  // const getImageSource = async () => {
  //   const currentImageName = await imageNames[currentImageIndex];
  //   return `${imageFolder}${currentImageName}`;
  // };

  // console.log(image);
  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <h1>Your Ingredients our recipes</h1>
        <div className="left-image-container">
        <img src= {Image} alt="Image" className="left-image" />
        </div>
        {/* <ImageContainer /> */}
        <div className="symbol-container">
          <div className="symbol turnip"></div>
          <div className="symbol grape"></div>
          <div className="symbol pear"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
