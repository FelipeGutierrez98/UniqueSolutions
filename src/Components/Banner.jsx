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




/* 
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual

  // Arreglo de las imágenes
  const images = [
    {
      src: Cocina,
      title: 'COCINAS',
      second: 'INTEGRALES'
    },
    {
      src: Banner1,
      title: 'PUERTAS'
    },
    {
      src: Baño,
      title: 'CLOSETS'
    }
  ];

  Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

   Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousele">
      <div className="image-containe">
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} />
        <h1 className="image-title">{images[currentIndex].title}</h1>
        <h3 className="image-title2">{images[currentIndex].second}</h3>
        <div className="button-container1">
          <button className="prev1" onClick={prevImage}>{'<'}</button>
          <button className="next1" onClick={nextImage}>{'>'}</button>
        </div>
      </div>
    </div> */






















/*  <div>
 
   <Carousel>
     <Carousel.Item>
       <img className='d-block w-100 m-auto' src={Banner1} alt='logo' />
       <Carousel.Caption>
         <h3>BANNER</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img className='d-block w-100 m-auto' src={Baño} alt='logo' />
       <Carousel.Caption>
         <h3>BAÑOS</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img className='d-block w-100 m-auto' src={Cocina} alt='logo' />
 
       <Carousel.Caption>
         <h3>COCINA</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     </Carousel>
   </div> */

{/*  <Carousel.Item>
      <ExampleCarouselImage src={logo} text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item> 
     <Carousel.Item>
      <ExampleCarouselImage text="Third slide" src={logo} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>  */}







/* 

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample; */


/* 

div id="carousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img className='d-block w-100 m-auto' src={Banner1} alt='logo' />
      </div>


      <div className="carousel-item" data-bs-interval="3000">
      <img className='d-block w-100 m-auto' src={Cocina} alt='logo' />
      </div>


      <div className="carousel-item" data-bs-interval="3000">
      <img className='d-block w-100 m-auto' src={Baño} alt='logo' />
      </div>


    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
     
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div> */


/*   era el ultimo  */

/* import React from 'react' */
/* import Carousel from 'react-bootstrap/Carousel'; */



/* import Baño from '../assets/Baño.webp'
import Cocina from '../assets/cocina.webp'
import Banner1 from '../assets/banner.webp'
import Logo from '../assets/Logo-unique.jpeg'
import ExampleCarouselImage from 'components/ExampleCarouselImage';  
import Carousel from 'react-bootstrap/Carousel'; */

/* 

export default function Banner() {
  return (
    <div>

    <Carousel>
    <Carousel.Item>   
    <img className='d-block w-100 m-auto' src={Banner1} alt='logo' /> */
{/*    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
{/*   </Carousel.Item>
    <Carousel.Item>   
    <img className='d-block w-100 m-auto' src={Baño} alt='logo' /> */}
{/*    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
{/*   </Carousel.Item>
    <Carousel.Item>   
    <img className='d-block w-100 m-auto' src={Cocina} alt='logo' />
   
    <Carousel.Caption>

    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
{/*    <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
{/*   </Carousel.Item> */ }
{/*  <Carousel.Item>
      <ExampleCarouselImage src={logo} text="Second slide" />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item> 
     <Carousel.Item>
      <ExampleCarouselImage text="Third slide" src={logo} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>  */}
{/*   </Carousel>
    </div>
    

  
  )
} */}
