
import React, { useState, useEffect } from 'react';

import cgrLogo from '../assets/CGR.png'
import tramontana from '../assets/ImagesLogo-Tramontana-removebg-preview.png'
import kornLogo  from '../assets/kornGroup-Photoroom.png-Photoroom.png'
function Provedores() {
    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual
    const images = [
        cgrLogo,
        tramontana ,
        kornLogo
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

export default Provedores
