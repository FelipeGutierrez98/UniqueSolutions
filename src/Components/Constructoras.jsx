import React, { useState, useEffect } from 'react';
import AmbienttiLogo from '../assets/01-AMBIENTTI-Photoroom.png-Photoroom.png'

import kovok from '../assets/Kovok-Photoroom.png-Photoroom.png'
import chevrolet from '../assets/Chevrolet_logo.png'
import oikos from '../assets//Oikos-removebg-preview.png'
import Baño from '../assets/Baño.webp'
import Cocina from '../assets/cocina.webp'
import './Constructoras.css'



function Constructoras() {

    const [currentIndex, setCurrentIndex] = useState(0); // Índice de la imagen actual
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


      /* 
      useEffect(() => {
        const nextDom = document.getElementById('sig');
        const prevDom = document.getElementById('ant');
        const carouselDom = document.querySelector('.carousel');
        const SliderDom = carouselDom.querySelector('.list');
        const thumbnailBorderDom = document.querySelector('.thumbnail');
        const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        const timeDom = document.querySelector('.time');
    
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    
        const timeRunning = 3000;
        const timeAutoNext = 7000;
        let runTimeOut;
        let runNextAuto;
    
        const showSlider = (type) => {
          const SliderItemsDom = SliderDom.querySelectorAll('.item');
    
          if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
          } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('ant');
          }
    
          clearTimeout(runTimeOut);
          runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('sig');
            carouselDom.classList.remove('prev');
          }, timeRunning);
    
          clearTimeout(runNextAuto);
          runNextAuto = setTimeout(() => {
            nextDom.click();
          }, timeAutoNext);
        };
    
        nextDom.onclick = () => {
          showSlider('next');
        };
    
        prevDom.onclick = () => {
          showSlider('prev');
        };
      }, []);
    
    
    
      return (
        <div className="carousel">
       
        <div className="list">
          <div className="item">
          <img className='' src={closet} alt='logo' />
       
            <div className="content">
          
              <div className="title">CLO</div>
              <div className="topic">INTEGRALES</div>
              <div className="des">
               
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
               
              </div>
            </div>
          </div>
          <div className="item">
          <img className='' src={Cocina} alt='logo' />
       
            <div className="content">
              <div className="author">Baños</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
             
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
          <img className='' src={Banner1} alt='logo' />
       
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
               
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
          <img className='' src={Baño} alt='logo' />
       
            <div className="content">
              <div className="author">LUNDEV</div>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
          
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
    
        </div>
    
    
        <div className="thumbnail">
          <div className="item">
          <img className='' src={Cocina} alt='logo' />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
          <img className='' src={Baño} alt='logo' />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
          <img className='' src={Banner1} alt='logo' />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
    
        </div>
    
    
        <div className="arrows">
          <button id="ant">&lt;</button>
          <button id="sig">&gt;</button>
        </div>
    
    
        <div className="time"></div>
      </div> */