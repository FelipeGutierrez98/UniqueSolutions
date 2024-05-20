import React, { useEffect, useState, } from 'react';
import closet1 from '../assets/CLOSET-01.jpg'
import closet2 from '../assets/CLOSET-02.jpg'
import closet3 from '../assets/CLOSET-03.jpeg'

import closet5 from '../assets/CLOSET-05.jpg'
import closet6 from '../assets/CLOSET-06.jpg'

function Muebles() {
  
    useEffect(() => {
        const nextDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
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
            carouselDom.classList.add('prev');
          }
    
          clearTimeout(runTimeOut);
          runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
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
             {/*  <div className="author">Cocinas</div> */}
              <div className="title">MUEBLES </div>
              <div className="topic">INTEGRALES</div>
             {/*  <div className="des">
               
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div> */}
              <div className="buttons">
               {/*  <button>SEE MORE</button> */}
               
              </div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet1} alt='logo' />
       
            <div className="content">
              <div className="author">closet 1</div>
              <div className="title">DESIGN SLIDER</div>
              {/* <div className="topic">ANIMAL</div>
              <div className="des">
             
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div> */}
              <div className="buttons">
               {/*  <button>SEE MORE</button> */}
         {/*        <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet2} alt='logo' />
       
            <div className="content">
              <div className="author">closet 2</div>
             {/*  <div className="title">DESIGN SLIDER</div>
              <div className="topic">ANIMAL</div>
              <div className="des">
               
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div> */}
              <div className="buttons">
                {/* <button>SEE MORE</button> */}
            {/*     <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet3} alt='logo' />
       
            <div className="content">
              <div className="author">closet3</div>
              <div className="title">DESIGN SLIDER</div>
              {/* <div className="topic">ANIMAL</div>
              <div className="des">
          
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div> */}
              <div className="buttons">
                {/* <button>SEE MORE</button> */}
                {/* <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div> 
          <div className="item">
          <img className='' src={closet5} alt='logo' />
       
            <div className="content">
              <div className="author">closet5</div>
              <div className="title">DESIGN SLIDER</div>
              {/* <div className="topic">ANIMAL</div>
              <div className="des">
          
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div> */}
              <div className="buttons">
               {/*  <button>SEE MORE</button> */}
          {/*       <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div> 
          <div className="item">
          <img className='' src={closet6} alt='logo' />
       
            <div className="content">
              <div className="author">closet6</div>
              <div className="title">DESIGN SLIDER</div>
              {/* <div className="topic">ANIMAL</div>
              <div className="des">
          
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
              </div> */}
              <div className="buttons">
                <button>SEE MORE</button>
          {/*       <button>SUBSCRIBE</button> */}
              </div>
            </div>
          </div>  
    
        </div>
    
    
        <div className="thumbnail">
          <div className="item">
          <img className='' src={closet1} alt='logo' />
            <div className="content">
              <div className="title">1</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet2} alt='logo' />
            <div className="content">
              <div className="title">2</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet3} alt='logo' />
            <div className="content">
              <div className="title">3</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet5} alt='logo' />
            <div className="content">
              <div className="title">5</div>
              <div className="description">Description</div>
            </div>
          </div>
          <div className="item">
          <img className='' src={closet6} alt='logo' />
            <div className="content">
              <div className="title">6</div>
              <div className="description">Description</div>
            </div>
          </div>
          
    
        </div>
    
    
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
    
    
        <div className="time"></div>
      </div>
      )
}

export default Muebles
