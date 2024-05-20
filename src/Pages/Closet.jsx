 import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
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

   {/*  {arrowLink && (
      <div className="bottom-left-arrow">
        <Link to={arrowLink}>BACK &#9660;</Link> 
      </div>
    )} */}

    <div className="corner top-left" />
    <div className= "corner top-right" />
  </div>
));

const Closet = () => {
  const pageFlip = useRef(null);

  return (
    <div className="magazine-container">
      <PageFlip ref={pageFlip} width={600} height={700}>
        <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[closet1]} />
        <MagazinePage images={[closet2]} />
        <MagazinePage images={[closet3]} />
        <MagazinePage images={[closet5]} />
      </PageFlip>
    </div>
  );
};

export default Closet;
 
