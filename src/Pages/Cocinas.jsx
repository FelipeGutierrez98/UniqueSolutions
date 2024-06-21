

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
const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstCocina = images.length > 0 && images[0] === Cocina;

  const isSecondImagecc = images.length > 0 && images[0] === Cocina; 
  const isSecondImagec = images.length > 0 && images[0] === Cocina1; 
  const isSecondImage4c = images.length > 0 && images[0] === Cocina2; 
  const isSecondImage5c = images.length > 0 && images[0] === Cocina3; 
  const isSecondImage6c = images.length > 0 && images[0] === Cocina4; 
  const isSecondImage7c = images.length > 0 && images[0] === Cocina5; 
  const isSecondImage8x = images.length > 0 && images[0] === Cocina6; 
  const isSecondImage9c = images.length > 0 && images[0] === Cocina7; 
  const isSecondImage10c = images.length > 0 && images[0] === Cocina8; 
  const isSecondImage11c = images.length > 0 && images[0] === Cocina7a; 

  //responsive mobile 
  const isSecondImagecM = images.length > 0 && images[0] === Cocina1; 
  const isSecondImagecM1 = images.length > 0 && images[0] === Cocina2; 
  const isSecondImage5M2 = images.length > 0 && images[0] === Cocina3; 
  const isSecondImage6M3 = images.length > 0 && images[0] === Cocina4; 
  const isSecondImage7M4 = images.length > 0 && images[0] === Cocina5; 
  const isSecondImage8M5 = images.length > 0 && images[0] === Cocina6; 
  const isSecondImage9M6 = images.length > 0 && images[0] === Cocina7; 
  const isSecondImage10M7 = images.length > 0 && images[0] === Cocina8; 
  const isSecondImage11M8 = images.length > 0 && images[0] === Cocina7a; 

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
      {isFirstCocina && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstCocina && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
        {isSecondImagecM && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImagecM1 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage5M2 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage6M3 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage7M4 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage8M5 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage9M6 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage10M7 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
        {isSecondImage11M8 && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}

      {isSecondImagecc && ( 
        <i className="fas fa-arrow-right indicator2  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagec && ( 
        <i className="fas fa-arrow-right indicator " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagec && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
    
      {isSecondImage4c && ( 

        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}


      {isSecondImage4c && ( 

        <i className="fas fa-arrow-left  indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage5c && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage5c && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage6c && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage8x && ( 

        <i className="fas fa-arrow-left indicator1 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage8x && ( 

        <i className="fas fa-arrow-right  indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage6c && ( 

        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage7c && ( 

        <i className="fas fa-arrow-right indicator " onClick={() => pageFlip.current.flipNext()}></i>
      )}

  
      {isSecondImage9c && ( 

        <i className="fas fa-arrow-right indicator " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage11c && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage11c && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage10c && ( 

        <i className="fas fa-arrow-left indicator3 " onClick={() => pageFlip.current.flipNext()}></i>
      )}

    </div>
  );
});

const Cocinas = () => {
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

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
          <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[Cocina1]} />
          <MagazinePage images={[Cocina2]} />
          <MagazinePage images={[Cocina3]} />
          <MagazinePage images={[Cocina4]} />
          <MagazinePage images={[Cocina5]} />
          <MagazinePage images={[Cocina7]} />
          <MagazinePage images={[Cocina7a]} />
          <MagazinePage images={[Cocina8]} />
          <MagazinePage images={[Cocina6]} />
        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
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
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
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
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
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
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
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
    </div>
  );
};


export default Cocinas; 
