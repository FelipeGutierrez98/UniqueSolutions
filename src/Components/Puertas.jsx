import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import '../Pages/Magazine.css';
import puerta1 from '../assets/PUERTA-01.jpg';
import puerta5 from '../assets/PUERTA-02.jpeg';

import puerta2a from '../assets/PUERTA VIDRIERA-02A.jpg';

import puerta2b from '../assets/PUERTA VIDRIERA-02.jpg';
import puerta3 from '../assets/Copia de PUERTA-03.jpg';
import puerta4 from '../assets/PUERTA-04.jpg';
import puerta from '../assets/PUERTA ESPECIAL-01.jpg';
import puertaL from '../assets/M LINOS-01.jpg';
import puertaspe2 from '../assets/Copia de PUERTA ESPECIAL-03.jpeg'
import puertaspe from '../assets/PUERTA ESPECIAL-02.jpg';
import puertaAnt from '../assets/Copia de PUERTA TIPO ANTIGUO.jpg';




const MagazinePage = React.forwardRef(({ images, title, link  }, ref) => {
  const isFirstPuertas = images.length > 0 && images[0] === puerta2b;
  const isSecondImageP = images.length > 0 && images[0] === puerta2b;
  const isSecondImageP1 = images.length > 0 && images[0] === puerta1;
  const isSecondImageP2 = images.length > 0 && images[0] === puerta3;
  const isSecondImageP3 = images.length > 0 && images[0] === puerta4;
  const isSecondImageP4 = images.length > 0 && images[0] === puerta5;
  const isSecondImageP5 = images.length > 0 && images[0] === puertaAnt;
  const isSecondImageP6 = images.length > 0 && images[0] === puertaspe;
  const isSecondImageP7 = images.length > 0 && images[0] === puertaspe2;
  const isSecondImageP8 = images.length > 0 && images[0] === puerta2a;
  const isSecondImageP9 = images.length > 0 && images[0] === puertaL;

  //responsive mobile
  const isSecondImageP1M = images.length > 0 && images[0] === puerta1;
  const isSecondImageP2M = images.length > 0 && images[0] === puerta3;
  const isSecondImageP3M = images.length > 0 && images[0] === puerta4;
  const isSecondImageP4M = images.length > 0 && images[0] === puerta5;
  const isSecondImageP5M = images.length > 0 && images[0] === puertaAnt;
  const isSecondImageP6M= images.length > 0 && images[0] === puertaspe;
  const isSecondImageP7M = images.length > 0 && images[0] === puertaspe2;
  const isSecondImageP8M = images.length > 0 && images[0] === puerta2a;
  const isSecondImageP9M = images.length > 0 && images[0] === puertaL;

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
      {isFirstPuertas && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstPuertas && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}

  {isSecondImageP1M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  
  {isSecondImageP2M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  
  {isSecondImageP3M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  
  {isSecondImageP4M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  
  {isSecondImageP5M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  {isSecondImageP6M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  {isSecondImageP7M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  {isSecondImageP8M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  
  {isSecondImageP9M&& ( 
    <i className="fas fa-arrow-left indicator3 " ></i>
  )}
  
      
      {isSecondImageP && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP1 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
 
      {isSecondImageP2 && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP2 && (

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP3 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     
      {isSecondImageP4 && ( 
        <i className="fas fa-arrow-left indicator1  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP4 && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP5 && ( 
        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP6 && ( 
        <i className="fas fa-arrow-left indicator1  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP6 && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
       {isSecondImageP7 && ( 
        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
        {isSecondImageP8 && ( 
        <i className="fas fa-arrow-left indicator1  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageP8 && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
          {isSecondImageP9 && ( 
        <i className="fas fa-arrow-left indicator3" onClick={() => pageFlip.current.flipNext()}></i>
      )}

    </div>
  );
});

const Puertas = () => {
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
        <MagazinePage images={[puerta2b]} title="Puertas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[puerta1]} />
        <MagazinePage images={[puerta3]} />
        <MagazinePage images={[puerta4]} />
        <MagazinePage images={[puerta5]} />
        <MagazinePage images={[puertaAnt]} />
        <MagazinePage images={[puertaspe]} />
        <MagazinePage images={[puertaspe2]} />
        <MagazinePage images={[puerta2a]} />
        <MagazinePage images={[puertaL]} />

        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
        <MagazinePage images={[puerta2b]} title="Puertas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[puerta1]} />
        <MagazinePage images={[puerta3]} />
        <MagazinePage images={[puerta4]} />
        <MagazinePage images={[puerta5]} />
        <MagazinePage images={[puertaAnt]} />
        <MagazinePage images={[puertaspe]} />
        <MagazinePage images={[puertaspe2]} />
        <MagazinePage images={[puerta2a]} />
        <MagazinePage images={[puertaL]} />

        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
        <MagazinePage images={[puerta2b]} title="Puertas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[puerta1]} />
        <MagazinePage images={[puerta3]} />
        <MagazinePage images={[puerta4]} />
        <MagazinePage images={[puerta5]} />
        <MagazinePage images={[puertaAnt]} />
        <MagazinePage images={[puertaspe]} />
        <MagazinePage images={[puertaspe2]} />
        <MagazinePage images={[puerta2a]} />
        <MagazinePage images={[puertaL]} />

        </PageFlip>
      </div>
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[puerta2b]} title="Puertas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[puerta1]} />
        <MagazinePage images={[puerta3]} />
        <MagazinePage images={[puerta4]} />
        <MagazinePage images={[puerta5]} />
        <MagazinePage images={[puertaAnt]} />
        <MagazinePage images={[puertaspe]} />
        <MagazinePage images={[puertaspe2]} />
        <MagazinePage images={[puerta2a]} />
        <MagazinePage images={[puertaL]} />
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
        <MagazinePage images={[puerta2b]} title="Puertas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[puerta1]} />
        <MagazinePage images={[puerta3]} />
        <MagazinePage images={[puerta4]} />
        <MagazinePage images={[puerta5]} />
        <MagazinePage images={[puertaAnt]} />
        <MagazinePage images={[puertaspe]} />
        <MagazinePage images={[puertaspe2]} />
        <MagazinePage images={[puerta2a]} />
        <MagazinePage images={[puertaL]} />

        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
        <MagazinePage images={[puerta2b]} title="Puertas" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[puerta1]} />
        <MagazinePage images={[puerta3]} />
        <MagazinePage images={[puerta4]} />
        <MagazinePage images={[puerta5]} />
        <MagazinePage images={[puertaAnt]} />
        <MagazinePage images={[puertaspe]} />
        <MagazinePage images={[puertaspe2]} />
        <MagazinePage images={[puerta2a]} />
        <MagazinePage images={[puertaL]} />
        </PageFlip>
      </div>
    </div>
  );
};

export default Puertas;
