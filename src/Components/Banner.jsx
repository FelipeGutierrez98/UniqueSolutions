import React, { useEffect, useState } from 'react';
import Baño from '../assets/Copia de M BAÑO-05 2.jpg';
import Cocina from '../assets/COCINA-01.jpg';

import puerta2a from '../assets/PUERTA VIDRIERA-02A.jpg';

import './Banner.css';

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Cocina, title: 'COCINAS', second: 'INTEGRALES' },
    { src: puerta2a, title: 'PUERTAS' },
    { src: Baño, title: 'MUEBLES',second:'DE BAÑO' },
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Cambia cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    
    <div className="carousele">
      <div className="image-containere">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="carousele-image"
        />
        <div className="text-centere"> {/* Contenedor para centrar el texto */}
          <h1 className="image-titlee">{images[currentIndex].title}</h1>
          {images[currentIndex].second && (
            <h3 className="image-titlee2">{images[currentIndex].second}</h3>
          )}
        </div>
        <div className="button-containere">
          <button className="preve" onClick={prevImage}>{'<'}</button>
          <button className="nexte" onClick={nextImage}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}

