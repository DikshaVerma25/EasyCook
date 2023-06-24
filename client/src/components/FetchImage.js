// import Image_1 from "../images/bg/bg-1.png";
// import Image_2 from "../images/bg/bg-2.avif";
// import Image_3 from "../images/bg/bg-3.avif";
// import Image_4 from "../images/bg/bg-4.jpeg";
// import Image_5 from "../images/bg/bg-5.avif";
// import Image_6 from "../images/bg/bg-6.avif";
// import Image_7 from "../images/bg/bg-7.avif";
// import Image_8 from "../images/bg/bg-8.avif";
// import Image_9 from "../images/bg/bg-9.avif";
// import Image_10 from "../images/bg/bg-10.avif";
// import Image_11 from "../images/bg/bg-11.avif";
// import { useEffect, useState } from "react";

// const ImageImport = () => {

// const [currentImageIndex, setCurrentImageIndex] = useState(0);
// const imageNames = [Image_1,Image_2,Image_3,Image_4,Image_5,Image_6,Image_7,Image_8,Image_9,Image_10,Image_11]

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageNames.length);
//     }, 5000); 

//     return () => {
//       clearInterval(interval);
//     };
//   }, [imageNames.length]);


//   const getImageSource = () => {
//     const currentImageName = imageNames[currentImageIndex];
//     return currentImageName;
//   };

// }

// export default ImageImport;

import React, { useState, useEffect } from 'react';

const ImageContainer = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch the list of images from the local images folder
    const fetchImages = async () => {
      try {
        const response = await fetch('../images/bg'); // Replace with your actual folder path
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    // Change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="image-container">
      <img src={images[currentIndex]} alt="Slideshow" />
    </div>
  );
};

export default ImageContainer;
