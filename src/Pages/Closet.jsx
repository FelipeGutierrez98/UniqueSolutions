
 

import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';
import './Closet.css';




import closet1 from '../assets/CLOSET-01.jpg';
import closet2 from '../assets/CLOSET-02.jpg';
import closet3 from '../assets/CLOSET-03.jpeg';
import closet5 from '../assets/CLOSET-05.jpg';
import closet6 from '../assets/CLOSET-06.jpg';

const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstCloset = images.length > 0 && images[0] === closet6;
  const isSecondImagep = images.length > 0 && images[0] === closet6; 
  const isSecondImage4p = images.length > 0 && images[0] === closet2; 
  const isSecondImage5p = images.length > 0 && images[0] === closet3; 
  const isSecondImage6p = images.length > 0 && images[0] === closet5; 
  const isSecondImage7p = images.length > 0 && images[0] === closet1; 

  //Responsive

  const isSecondImage4pM = images.length > 0 && images[0] === closet2; 
  const isSecondImage5pM = images.length > 0 && images[0] === closet3; 
  const isSecondImage6pM = images.length > 0 && images[0] === closet5; 
  const isSecondImage7pM = images.length > 0 && images[0] === closet1; 


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
      {isFirstCloset && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstCloset && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
       {isSecondImage4pM && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImage5pM && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImage6pM && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImage7pM && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImagep && ( 
        <i className="fas fa-arrow-right indicator2  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage4p && ( 

        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}


      {isSecondImage4p && ( 

        <i className="fas fa-arrow-left  indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage5p && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage5p && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage6p && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImage6p && ( 

        <i className="fas fa-arrow-left indicator3" onClick={() => pageFlip.current.flipNext()}></i>
      )} 
      {isSecondImage7p && ( 

        <i className="fas fa-arrow-right indicator " onClick={() => pageFlip.current.flipNext()}></i>
      )}

    </div>
  );
});

const Closet = () => {
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
          <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[closet1]} />
          <MagazinePage images={[closet2]} />
          <MagazinePage images={[closet3]} />
          <MagazinePage images={[closet5]} />
        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
        <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[closet1]} />
          <MagazinePage images={[closet2]} />
          <MagazinePage images={[closet3]} />
          <MagazinePage images={[closet5]} />
        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
        <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[closet1]} />
          <MagazinePage images={[closet2]} />
          <MagazinePage images={[closet3]} />
          <MagazinePage images={[closet5]} />
        </PageFlip>
      </div>
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[closet1]} />
          <MagazinePage images={[closet2]} />
          <MagazinePage images={[closet3]} />
          <MagazinePage images={[closet5]} />
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
        <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[closet1]} />
          <MagazinePage images={[closet2]} />
          <MagazinePage images={[closet3]} />
          <MagazinePage images={[closet5]} />
        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
        <MagazinePage images={[closet6]} title="Closets" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[closet1]} />
          <MagazinePage images={[closet2]} />
          <MagazinePage images={[closet3]} />
          <MagazinePage images={[closet5]} />
        </PageFlip>
      </div>
    </div>
  );
};

export default Closet;


