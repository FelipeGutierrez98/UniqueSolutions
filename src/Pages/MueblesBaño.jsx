

import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import Baño1 from '../assets/Copia de M BAÑO-01.jpg';
import Baño2 from '../assets/Copia de M BAÑO-02.jpg';
import Baño3 from '../assets/0aaac7a9-3e91-4307-90cf-c463eb546f68.jpeg';
import Baño4 from '../assets/Copia de M BAÑO-04.jpg';
import Baño5 from '../assets/Copia de M BAÑO-05 2.jpg';
import Baño6 from '../assets/Copia de M BAÑO-06.jpg';
import Cocina7a from '../assets/COCINA-07A.jpg';
import Cocina8 from '../assets/COCINA-08.jpg';
import Baño from '../assets/Baño.webp';
import Cocina from '../assets/COCINA-01.jpg';
import Banner1 from '../assets/banner.webp';





import './Magazine.css';

import closet1 from '../assets/CLOSET-01.jpg';
import closet2 from '../assets/CLOSET-02.jpg';
import closet3 from '../assets/CLOSET-03.jpeg';
import closet5 from '../assets/CLOSET-05.jpg';
import closet6 from '../assets/CLOSET-06.jpg';

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

const MueblesBaño = () => {
  const pageFlip = useRef(null);

  return (
    <div className="magazine-container">
      <PageFlip ref={pageFlip} width={600} height={700}>
        <MagazinePage images={[Baño5]} title="Muebles de Baño" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[Baño1]} />
        <MagazinePage images={[Baño2]} />
        <MagazinePage images={[Baño4]} />
        <MagazinePage images={[Baño3]} />
        <MagazinePage images={[Baño6]} />
        
      </PageFlip>
    </div>
  );
};

export default MueblesBaño;
 

