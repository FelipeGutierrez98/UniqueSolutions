import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';
import enchape1 from '../assets/ENCHAPE CELOSIA.jpg';
import Cocina from '../assets/COCINA-01.jpg';
import closet from '../assets/CLOSET-02.jpg';
import Baño from '../assets/0aaac7a9-3e91-4307-90cf-c463eb546f68.jpeg';
import Nose from '../assets/ESTUDIO-01A.jpg';
import puertas from '../assets/PUERTA VIDRIERA-02.jpg';
import lobbies from '../assets/LOBBY-01.jpg';
import vestier from '../assets/VESTIER-02.jpg';
import Cocina2a from '../assets/COCINA-02A.jpeg';
import Cocina3 from '../assets/COCINA-03.jpg';
import Cocina4 from '../assets/Diseño sin título (2).png';
import Cocina6 from '../assets/COCINA-06.jpg';
import Cocina7 from '../assets/COCINA-07.jpg';
import Cocina7a from '../assets/COCINA-07.jpg';
import Cocina8 from '../assets/COCINA-08.jpg';




const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isSecondImage7 = images.length > 0 && images[0] === Cocina; 
  const isSecondImage4 = images.length > 0 && images[0] === puertas;  
  const isSecondImage5= images.length > 0 && images[0] === vestier; 
  const isSecondImage6= images.length > 0 && images[0] === lobbies; 
  const isSecondImage = images.length > 0 && images[0] === closet; 
  const isSecondImage1 = images.length > 0 && images[0] === Baño; 
  const isSecondImage2 = images.length > 0 && images[0] === enchape1; 
  const isSecondImage8 = images.length > 0 && images[0] === Nose; 
  
  return (
    <div className="page" ref={ref}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Page ${index + 1}`}
          className="magazine-image"
        />
      ))}
      {title && (
        <div className="title-overlay">
          {link ? <Link className="x" to={link}>{title}</Link> : title}
        </div>
      )}
      <div className="corner top-left" />
      <div className="corner top-right" />
     
      {isSecondImage && ( 
       <i className="fas fa-arrow-right indicator  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage1 && ( 
        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage2 && ( 
       <i className="fas fa-arrow-right indicator " onClick={() => pageFlip.current.flipNext()}></i>
      )}
    
      {isSecondImage5 && ( 
       
       <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage5 && ( 
       
       <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage4 && ( 
       
       <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage4 && ( 
       
       <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage6 && ( 
       
       <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage6 && ( 
       
       <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage7 && (
       
       <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
   
      {isSecondImage8 && ( 
       
       <i className="fas fa-arrow-left indicator3 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
    </div>
  );
});

const Magazine =  () => {
  const pageFlip = useRef(null);

  const handleNext = () => {
    if (pageFlip.current) {
      pageFlip.current.flipNext();
    }
  };

  const handlePrev = () => {
    if (pageFlip.current) {
      pageFlip.current.flipPrev();
    }
  };
 
  return (
    <div>

    <div className="magazine-container">
      <PageFlip  ref={pageFlip} width={700} height={700} className='PageFlip' >
        <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
  
        <MagazinePage images={[closet]} title="Closets" link="/closet" />
        <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
        <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
        <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
        <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
        <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
        <MagazinePage images={[Nose]} title="Otros Productos" link="/mueblesLava" />
      </PageFlip>
    </div>

    <div className="magazine-container1">
      <PageFlip  ref={pageFlip} width={450} height={450} >
      <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
  
  <MagazinePage images={[closet]} title="Closets" link="/closet" />
  <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
  <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
  <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
  <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
  <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
  <MagazinePage images={[Nose]} title="Otros productos" link="/mueblesLava" />
      </PageFlip>
    </div>
    <div className="magazine-container2">
      <PageFlip  ref={pageFlip} width={700} height={600} >
      <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
  
  <MagazinePage images={[closet]} title="Closets" link="/closet" />
  <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
  <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
  <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
  <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
  <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
  <MagazinePage images={[Nose]} title="Otros Productos" link="/mueblesLava" />
      </PageFlip>
    </div>
    <div className="magazine-container3">
      <PageFlip  ref={pageFlip} width={900} height={600} >
      <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
  
  <MagazinePage images={[closet]} title="Closets" link="/closet" />
  <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
  <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
  <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
  <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
  <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
  <MagazinePage images={[Nose]} title="Otros Produtos" link="/mueblesLava" />
      </PageFlip>
    </div>
    <div className="magazine-container4">
      <PageFlip  ref={pageFlip} width={550} height={600} >
      <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
  
  <MagazinePage images={[closet]} title="Closets" link="/closet" />
  <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
  <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
  <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
  <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
  <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
  <MagazinePage images={[Nose]} title="Otros Productos" link="/mueblesLava" />
      </PageFlip>
    </div>
    <div className="magazine-container5">
      <PageFlip  ref={pageFlip} width={350} height={500} >
      <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
  
  <MagazinePage images={[closet]} title="Closets" link="/closet" />
  <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
  <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
  <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
  <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
  <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
  <MagazinePage images={[Nose]} title="Otros Productos" link="/mueblesLava" />
      </PageFlip>
    </div>
    </div>
  );
};

export default Magazine;


