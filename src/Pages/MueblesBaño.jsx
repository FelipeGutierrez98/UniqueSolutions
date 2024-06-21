import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';

import Baño1 from '../assets/Copia de M BAÑO-01.jpg';
import Baño2 from '../assets/Copia de M BAÑO-02.jpg';
import Baño3 from '../assets/0aaac7a9-3e91-4307-90cf-c463eb546f68.jpeg';
import Baño4 from '../assets/Copia de M BAÑO-04.jpg';
import Baño5 from '../assets/Copia de M BAÑO-05 2.jpg';
import Baño6 from '../assets/Copia de M BAÑO-06.jpg';




const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstBaño = images.length > 0 && images[0] === Baño1;
  const isSecondImageB1 = images.length > 0 && images[0] === Baño1;
  const isSecondImageB2 = images.length > 0 && images[0] === Baño2;
  const isSecondImageB3 = images.length > 0 && images[0] === Baño3;
  const isSecondImageB4 = images.length > 0 && images[0] === Baño4;
  const isSecondImageB5 = images.length > 0 && images[0] === Baño5;
  const isSecondImageB6 = images.length > 0 && images[0] === Baño6;

   //responsive mobile 
   const isSecondImageB2M = images.length > 0 && images[0] === Baño2;
   const isSecondImageB3M = images.length > 0 && images[0] === Baño3;
   const isSecondImageB4M = images.length > 0 && images[0] === Baño4;
   const isSecondImageB5M = images.length > 0 && images[0] === Baño5;
   const isSecondImageB6M = images.length > 0 && images[0] === Baño6;


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
      {isFirstBaño && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstBaño && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
       {isSecondImageB2M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageB3M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageB4M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageB5M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageB6M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImageB1 && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageB2 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
    
      {isSecondImageB3 && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageB3 && (

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageB4 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     
      {isSecondImageB5 && ( 
        <i className="fas fa-arrow-left indicator1  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageB5 && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageB6 && ( 
        <i className="fas fa-arrow-left indicator3" onClick={() => pageFlip.current.flipNext()}></i>
      )}
   
    </div>
  );
});

const MueblesBaño = () => {
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
        <MagazinePage images={[Baño1]} title="Muebles de Baño"  arrowLink="/productos" />
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño5]} />
        <MagazinePage images={[Baño6]} />

        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
        <MagazinePage images={[Baño1]} title="Muebles de Baño" arrowLink="/productos" />
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño5]} />
        <MagazinePage images={[Baño6]} />
        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
        <MagazinePage images={[Baño1]} title="Muebles de Baño"  arrowLink="/productos" />
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño5]} />
        <MagazinePage images={[Baño6]} />

        </PageFlip>
      </div>
      <div className="magazine-container3">
        <MagazinePage images={[Baño1]} title="Muebles de Baño" arrowLink="/productos" />
        <PageFlip ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño5]} />
        <MagazinePage images={[Baño6]} />
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
        <MagazinePage images={[Baño1]} title="Muebles de Baño" arrowLink="/productos" />
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño5]} />
        <MagazinePage images={[Baño6]} />

        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
        <MagazinePage images={[Baño1]} title="Muebles de Baño" arrowLink="/productos" />
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño5]} />
        <MagazinePage images={[Baño6]} />
        </PageFlip>
      </div>
    </div>
  );
};

export default MueblesBaño;

