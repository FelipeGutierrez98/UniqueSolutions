

import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import vestier1 from '../assets/VESTIER-01.jpg';
import vestier2 from '../assets/VESTIER-02.jpg';
import vestier3 from '../assets/VESTIER-03.jpg';
import vestier4 from '../assets/VESTIER-03A.jpg';
import vestier5 from '../assets/VESTIER-03B.jpg';
import vestier6 from '../assets/Copia de VESTIER-04.jpeg';





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

const Vestieres = () => {
  const pageFlip = useRef(null);

  return (
    <div className="magazine-container">
      <PageFlip ref={pageFlip} width={600} height={700}>
        <MagazinePage images={[vestier2]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier1]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />
      
        
      </PageFlip>
    </div>
  );
};

export default Vestieres;
 

