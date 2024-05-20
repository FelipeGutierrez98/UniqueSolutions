import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';
import enchape1 from '../assets/ENCHAPE CELOSIA.jpg';
import Cocina from '../assets/COCINA-01.jpg';
import closet from '../assets/CLOSET-02.jpg';
import Baño from '../assets/0aaac7a9-3e91-4307-90cf-c463eb546f68.jpeg';
import Nose from '../assets/M BAÑO-05.jpg';
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



const MagazinePage = React.forwardRef(({ images, title, link }, ref) => (

  
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
  </div>
));

const Magazine = () => {
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
        <MagazinePage images={[Nose]} title="Muebles de Lavado" link="/mueblesLava" />
        <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
        <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
      </PageFlip>
    </div>
    <div className="magazine-container1">
      <PageFlip  ref={pageFlip} width={350} height={450} >
        <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
        <MagazinePage images={[closet]} title="Closets" link="/closet" />
        <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
        <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
        <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
        <MagazinePage images={[Nose]} title="Muebles de Lavado" link="/mueblesLava" />
        <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
        <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
      </PageFlip>
    </div>
    <div className="magazine-container2">
      <PageFlip  ref={pageFlip} width={650} height={600} >
        <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
        <MagazinePage images={[closet]} title="Closets" link="/closet" />
        <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
        <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
        <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
        <MagazinePage images={[Nose]} title="Muebles de Lavado" link="/mueblesLava" />
        <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
        <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
      </PageFlip>
    </div>
    <div className="magazine-container3">
      <PageFlip  ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[Cocina]} title="Cocinas" link="/cocinas" />
        <MagazinePage images={[closet]} title="Closets" link="/closet" />
        <MagazinePage images={[puertas]} title="Puertas" link="/puertas" />
        <MagazinePage images={[Baño]} title="Muebles de Baño" link="/mueblesBaño" />
        <MagazinePage images={[vestier]} title="Vestier" link="/vestier" />
        <MagazinePage images={[Nose]} title="Muebles de Lavado" link="/mueblesLava" />
        <MagazinePage images={[lobbies]} title="Lobbies Y Recepciones" link="/lobbies" />
        <MagazinePage images={[enchape1]} title="Enchapes" link="/enchape" />
      </PageFlip>
    </div>
    </div>
  );
};

export default Magazine;


