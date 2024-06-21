
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';
import Lobby1 from '../assets/LOBBY-01.jpg';
import Lobby2 from '../assets/LOBBY-02.jpg';
import recepcion from '../assets/M RECEPCIÓN.jpg'
import recepcion2 from '../assets/APLIQUE TECHO-03.jpg'
import casillero from '../assets/CASILLERO-01.jpg'




const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstLobbies = images.length > 0 && images[0] === Lobby1;
  const isSecondImageL1 = images.length > 0 && images[0] === Lobby1;
  const isSecondImageL2 = images.length > 0 && images[0] === Lobby2;
  const isSecondImageL3 = images.length > 0 && images[0] === recepcion;
  const isSecondImageL4 = images.length > 0 && images[0] === recepcion2;
  const isSecondImageL5 = images.length > 0 && images[0] === casillero;
  
  //Responsive mobile 
  const isSecondImageL2M = images.length > 0 && images[0] === Lobby2;
  const isSecondImageL3M = images.length > 0 && images[0] === recepcion;
  const isSecondImageL4M = images.length > 0 && images[0] === recepcion2;
  const isSecondImageL5M = images.length > 0 && images[0] === casillero;



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
      {isFirstLobbies && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstLobbies && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
       {isSecondImageL2M  && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageL3M  && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageL4M  && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageL5M  && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}

      {isSecondImageL1 && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageL2 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
   
      {isSecondImageL3 && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageL3 && (

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
{isSecondImageL4 && ( 

  <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
)}
      
      {isSecondImageL5 && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageL5 && ( 

        <i className="fas fa-arrow-left indicator3" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     

    </div>
  );
});

const Lobbies = () => {
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
        <MagazinePage images={[Lobby1]} title="Lobbies Y Recepciones" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Lobby2]} />
        <MagazinePage images={[recepcion]} />
        <MagazinePage images={[recepcion2]} />
        <MagazinePage images={[casillero]} />

        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
        <MagazinePage images={[Lobby1]} title="Lobbies Y Recepciones" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Lobby2]} />
        <MagazinePage images={[recepcion]} />
        <MagazinePage images={[recepcion2]} />
        <MagazinePage images={[casillero]} />

        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
        <MagazinePage images={[Lobby1]} title="Lobbies Y Recepciones" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Lobby2]} />
        <MagazinePage images={[recepcion]} />
        <MagazinePage images={[recepcion2]} />
        <MagazinePage images={[casillero]} />

        </PageFlip>
      </div>
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[Lobby1]} title="Lobbies Y Recepciones" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Lobby2]} />
        <MagazinePage images={[recepcion]} />
        <MagazinePage images={[recepcion2]} />
        <MagazinePage images={[casillero]} />
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
        <MagazinePage images={[Lobby1]} title="Lobbies Y Recepciones" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Lobby2]} />
        <MagazinePage images={[recepcion]} />
        <MagazinePage images={[recepcion2]} />
        <MagazinePage images={[casillero]} />

        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
        <MagazinePage images={[Lobby1]} title="Lobbies Y Recepciones" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Lobby2]} />
        <MagazinePage images={[recepcion]} />
        <MagazinePage images={[recepcion2]} />
        <MagazinePage images={[casillero]} />
        </PageFlip>
      </div>
    </div>
  );
};

export default Lobbies;



