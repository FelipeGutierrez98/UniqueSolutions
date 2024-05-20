/* 

import Cocina1 from '../assets/Copia de COCINA-01A.jpg';
import Cocina2 from '../assets/Copia de COCINA-02 2.jpeg';
import Cocina3 from '../assets/Copia de COCINA-03 2.jpg';
import Cocina4 from '../assets/Copia de COCINA-04-1.jpg';
import Cocina5 from '../assets/COCINA-05.jpg';
import Cocina6 from '../assets/Copia de COCINA-06.jpg';
import Cocina7 from '../assets/Copia de COCINA-07.jpg';
import Cocina7a from '../assets/COCINA-07A.jpg';
import Cocina8 from '../assets/COCINA-08.jpg';
import Baño from '../assets/Baño.webp';
import Cocina from '../assets/COCINA-01.jpg';
import Banner1 from '../assets/banner.webp';
import React, { useEffect, useState, } from 'react';
import './Cocinas.css'

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Cocina, title: 'COCINAS', second: 'INTEGRALES' },
    { src: Cocina1},
    { src: Cocina2},
    { src: Cocina3},
    { src: Cocina4},
    { src: Cocina5},
    { src: Cocina6},
    { src: Cocina7},
    { src: Cocina7a},
    { src: Cocina8},
   
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
    <div className='pos-cocinas'>

    <div className="carousele1">
      <div className="image-containere1">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="carousele-image1"
        />
        <div className="text-centere1"> 
          <h1 className="image-titleep1">{images[currentIndex].title}</h1>
          {images[currentIndex].second && (
            <h3 className="image-titleep">{images[currentIndex].second}</h3>
          )}
        </div>
        <div className="button-containeret">
          <button className="prevew" onClick={prevImage}>{'<'}</button>
          <button className="nextew" onClick={nextImage}>{'>'}</button>
        </div>
      </div>
    </div>
    </div>
  );
}



export default Carrusel;
 */

import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import Cocina1 from '../assets/Copia de COCINA-01A.jpg';
import Cocina2 from '../assets/Copia de COCINA-02 2.jpeg';
import Cocina3 from '../assets/Copia de COCINA-03 2.jpg';
import Cocina4 from '../assets/Copia de COCINA-04-1.jpg';
import Cocina5 from '../assets/COCINA-05.jpg';
import Cocina6 from '../assets/Copia de COCINA-06.jpg';
import Cocina7 from '../assets/Copia de COCINA-07.jpg';
import Cocina7a from '../assets/COCINA-07A.jpg';
import Cocina8 from '../assets/COCINA-08.jpg';
import Baño from '../assets/Baño.webp';
import Cocina from '../assets/COCINA-01.jpg';
import Banner1 from '../assets/banner.webp';





import './Magazine.css';

import closet1 from '../assets/CLOSET-01.jpg';
import closet2 from '../assets/CLOSET-02.jpg';
import closet3 from '../assets/CLOSET-03.jpeg';
import closet5 from '../assets/CLOSET-05.jpg';
import closet6 from '../assets/CLOSET-06.jpg';

const MagazinePage = React.forwardRef(({ images, title, link, arrowLink }, ref) => (
  <div className="page" ref={ref}>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Page ${index + 1}`} className="magazine-image" />
    ))}

    {title && (
      <div className="title-overlay">
        {link ? <Link className='x' to={link}>{title}</Link> : title}
      </div>
    )}

    {arrowLink && (
      <div className="bottom-left-arrow">
        <Link to={arrowLink}>Productos &#9660;</Link> 
      </div>
    )}
 
    <div className="corner top-left" />
    <div className= "corner top-right" />
  </div>
));

const Cocinas = () => {
  const pageFlip = useRef(null);

  return (
    <div className="magazine-container">
      <PageFlip ref={pageFlip} width={600} height={700}>
        <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Cocina1]} />
        <MagazinePage images={[Cocina2]} />
        <MagazinePage images={[Cocina3]} />
        <MagazinePage images={[Cocina4]} />
        <MagazinePage images={[Cocina5]} />
        <MagazinePage images={[Cocina6]} />
        <MagazinePage images={[Cocina7]} />
        <MagazinePage images={[Cocina7a]} />
        <MagazinePage images={[Cocina8]} />
      </PageFlip>
    </div>
  );
};

export default Cocinas;
 

