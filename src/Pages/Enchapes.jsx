

import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import enchape1 from '../assets/ENCHAPE CELOSIA.jpg';
import enchape2 from '../assets/ENCHAPE MURO-01.jpg';
import enchape3 from '../assets/ENCHAPE MURO-03.jpg';
import enchape4 from '../assets/CELOSIA-01.jpg'
import enchape5 from '../assets/CELOSIA-02.jpg'
import enchape6 from '../assets/TABLEROS CELOSIA.jpg'








import './Magazine.css';


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

const Enchapes = () => {
  const pageFlip = useRef(null);

  return (
    <div className="magazine-container">
      <PageFlip ref={pageFlip} width={600} height={700}>
        <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[enchape2]} />
        <MagazinePage images={[enchape3]} />
        <MagazinePage images={[enchape4]} />
        <MagazinePage images={[enchape5]} />
        <MagazinePage images={[enchape6]} />
 
      
        
      </PageFlip>
    </div>
  );
};

export default Enchapes;
 

