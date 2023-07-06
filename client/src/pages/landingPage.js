import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import ImageContainer from '../components/FetchImage';
import Image from "../images/bg/bg-2.avif"
import "./styles/landing.css";

function LandingPage() {
  // const imageFolder = "../images/bg/";
  // const imageNames = ["bg-1.png","bg-2.avif","bg-3.avif","bg-4.jpeg","bg-5.avif","bg-6.avif","bg-7.avif","bg-8.avif","bg-9.avif","bg-10.avif", "bg-11.avif"]; // Array of image names
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [imageSource, setImageSource] = useState(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
  //   }, 5000); 

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [imageNames.length]);

  // useEffect(() => {
  // const getImageSource = async () => {
  //   const currentImageName = imageNames[currentImageIndex];
  //   const response = await fetch(`${imageFolder}${currentImageName}`);
  //   const blob = await response.blob();
  //   const objectURL = URL.createObjectURL(blob);
  //   return objectURL;
  // };
  // getImageSource();
  // return () => URL.revokeObjectURL(imageSource);
  // },[currentImageIndex, imageNames , imageFolder]);
  // // console.log(image);
  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <div className= "text-left">
        <h1 style={{fontSize : "5rem"}}><span>Your</span> Ingredients, <span>Our</span> recipes!</h1>
        <p style= {{color: "#482D30"}}>Discover delicious recipes tailored to your ingredients. Simply enter the items you have and we'll find the perfect recipes that match your selection.</p>
        <button className="get-started-button">Explore Recipes</button>
        </div>
        <div className="right-image-container">
        <img src={Image} alt="Image" className="right-image" />
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
