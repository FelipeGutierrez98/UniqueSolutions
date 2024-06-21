import React, { useState, useEffect } from 'react';
import AmbienttiLogo from '../assets/01-AMBIENTTI-Photoroom.png-Photoroom.png'

import kovok from '../assets/Kovok-Photoroom.png-Photoroom.png'
import chevrolet from '../assets/Chevrolet_logo.png'
import oikos from '../assets//Oikos-removebg-preview.png'
import Baño from '../assets/Baño.webp'
import Cocina from '../assets/cocina.webp'
import './Constructoras.css'



function Constructoras() {

    const [currentIndex, setCurrentIndex] = useState(0); 
    const images = [
        AmbienttiLogo,
        oikos,
        kovok,
      ];
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000);
     
      return () => clearInterval(interval);
    }, []); 

    
  return (
    <div>
      <div className="carouselet">
      <div className="slide">
        <img src={images[(currentIndex + images.length - 1) % images.length]} alt="Previous" />
        <img src={images[currentIndex]} alt="Current" />
        <img src={images[(currentIndex + 1) % images.length]} alt="Next" />
      </div>
    </div>
    </div>
  ) 
}

export default Constructoras

