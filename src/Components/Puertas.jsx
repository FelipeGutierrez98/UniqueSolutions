




import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
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









const MagazinePage = React.forwardRef(({ images, title, link, arrowLink }, ref) => (
  <div className="page" ref={ref}>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Page ${index + 1}`} className="magazine-image" />
    ))}

    {title && (
      <div className="title-overlay">
        {link ? <Link className='x' to={link}>{title}</Link> : title}
      </div>
    )}

    {arrowLink && (
      <div className="bottom-left-arrow">
        <Link to={arrowLink}>Productos &#9660;</Link> 
      </div>
    )}
 
    <div className="corner top-left" />
    <div className= "corner top-right" />
  </div>
));

const Puertas = () => {
  const pageFlip = useRef(null);

  return (
    <div className="magazine-container">
      <PageFlip ref={pageFlip} width={600} height={700}>
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
  );
};

export default Puertas;
 

