import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import repisa from '../assets/REPISA-01.jpg';
import repisa2 from '../assets/REPISA-02.jpeg';
import Banca from '../assets/BANCA MADERA-02.jpg';
import Biblioteca from '../assets/BIBLIOTECA-01.jpg';
import Estudio from '../assets/ESTUDIO-01.jpg';



import './Magazine.css';
const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstOtros = images.length > 0 && images[0] === repisa2;
  const isSecondImagecM2 = images.length > 0 && images[0] === repisa2; 
  const isSecondImagecM1 = images.length > 0 && images[0] === repisa; 
  const isSecondImagecM3 = images.length > 0 && images[0] === Banca; 
  const isSecondImagecM4 = images.length > 0 && images[0] === Biblioteca; 
  const isSecondImagecM5 = images.length > 0 && images[0] === Estudio; 
  
  //Responsive mobile 

  const isSecondImagecM1M = images.length > 0 && images[0] === repisa; 
  const isSecondImagecM3M = images.length > 0 && images[0] === Banca; 
  const isSecondImagecM4M = images.length > 0 && images[0] === Biblioteca; 
  const isSecondImagecM5M = images.length > 0 && images[0] === Estudio; 
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
      {isFirstOtros && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstOtros&& (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
      {isSecondImagecM1M&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImagecM3M&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImagecM4M&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImagecM5M&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      
      {isSecondImagecM2 && ( 
        <i className="fas fa-arrow-right indicator2  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagecM1 && ( 
        <i className="fas fa-arrow-right indicator " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagecM1 && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
     
      {isSecondImagecM3 && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagecM3 && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagecM4 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
    
      {isSecondImagecM5 && ( 

        <i className="fas fa-arrow-left indicator1 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagecM5 && ( 

        <i className="fas fa-arrow-left indicator3 " onClick={() => pageFlip.current.flipNext()}></i>
      )}

    </div>
  );
});

const MueblesLava = () => {
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
        <PageFlip ref={pageFlip} width={700} height={700} className='PageFlip' >
          <MagazinePage images={[repisa2]} title="" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[repisa]} />
          <MagazinePage images={[Banca]} />
          <MagazinePage images={[Biblioteca]} />
          <MagazinePage images={[Estudio]} />
          
        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
        <MagazinePage images={[repisa2]} title="" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[repisa]} />
          <MagazinePage images={[Banca]} />
          <MagazinePage images={[Biblioteca]} />
          <MagazinePage images={[Estudio]} />
          
        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
        <MagazinePage images={[repisa2]} title="" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[repisa]} />
          <MagazinePage images={[Banca]} />
          <MagazinePage images={[Biblioteca]} />
          <MagazinePage images={[Estudio]} />
          
        </PageFlip>
      </div>
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[repisa2]} title="" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[repisa]} />
          <MagazinePage images={[Banca]} />
          <MagazinePage images={[Biblioteca]} />
          <MagazinePage images={[Estudio]} />
          
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
        <MagazinePage images={[repisa2]} title="" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[repisa]} />
          <MagazinePage images={[Banca]} />
          <MagazinePage images={[Biblioteca]} />
          <MagazinePage images={[Estudio]} />
          
        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
        <MagazinePage images={[repisa2]} title="Cocinas" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[repisa]} />
          <MagazinePage images={[Banca]} />
          <MagazinePage images={[Biblioteca]} />
          <MagazinePage images={[Estudio]} />
          
        </PageFlip>
      </div>
    </div>
  );
};


export default MueblesLava;