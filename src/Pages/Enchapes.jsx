import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';
import enchape1 from '../assets/ENCHAPE CELOSIA.jpg';
import enchape2 from '../assets/ENCHAPE MURO-01.jpg';
import enchape3 from '../assets/ENCHAPE MURO-03.jpg';
import enchape4 from '../assets/CELOSIA-01.jpg'
import enchape5 from '../assets/CELOSIA-02.jpg'
import enchape6 from '../assets/TABLEROS CELOSIA.jpg'




const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstEnchape = images.length > 0 && images[0] === enchape1;
  const isSecondImagea = images.length > 0 && images[0] === enchape1;
  const isSecondImageb = images.length > 0 && images[0] === enchape2;
  const isSecondImagec = images.length > 0 && images[0] === enchape3;
  const isSecondImaged = images.length > 0 && images[0] === enchape4;
  const isSecondImagee = images.length > 0 && images[0] === enchape5;
  const isSecondImagef = images.length > 0 && images[0] === enchape6;
 
  // Responsive mobile 
  const isSecondImageb1 = images.length > 0 && images[0] === enchape2;
  const isSecondImagec2 = images.length > 0 && images[0] === enchape3;
  const isSecondImaged3 = images.length > 0 && images[0] === enchape4;
  const isSecondImagee4 = images.length > 0 && images[0] === enchape5;
  const isSecondImagef5 = images.length > 0 && images[0] === enchape6;

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
      {isFirstEnchape && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstEnchape&& (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
       {isSecondImageb1&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImagec2&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImaged3&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImagee4&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImagef5&& ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImagea && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageb && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
   
      {isSecondImagec && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagec && (

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImaged && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     
      {isSecondImagee && ( 
        <i className="fas fa-arrow-left indicator1  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagee && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImagef && ( 
        <i className="fas fa-arrow-left indicator3" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     

    </div>
  );
});

const Enchapes= () => {
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
          <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[enchape2]} />
          <MagazinePage images={[enchape3]} />
          <MagazinePage images={[enchape4]} />
          <MagazinePage images={[enchape5]} />
          <MagazinePage images={[enchape6]} />

        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
          <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[enchape2]} />
          <MagazinePage images={[enchape3]} />
          <MagazinePage images={[enchape4]} />
          <MagazinePage images={[enchape5]} />
          <MagazinePage images={[enchape6]} />

        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
          <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[enchape2]} />
          <MagazinePage images={[enchape3]} />
          <MagazinePage images={[enchape4]} />
          <MagazinePage images={[enchape5]} />
          <MagazinePage images={[enchape6]} />

        </PageFlip>
      </div>
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
          <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[enchape2]} />
          <MagazinePage images={[enchape3]} />
          <MagazinePage images={[enchape4]} />
          <MagazinePage images={[enchape5]} />
          <MagazinePage images={[enchape6]} />
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
          <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[enchape2]} />
          <MagazinePage images={[enchape3]} />
          <MagazinePage images={[enchape4]} />
          <MagazinePage images={[enchape5]} />
          <MagazinePage images={[enchape6]} />

        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
          <MagazinePage images={[enchape1]} title="Enchapes" link="/cocinas" arrowLink="/productos" />
          <MagazinePage images={[enchape2]} />
          <MagazinePage images={[enchape3]} />
          <MagazinePage images={[enchape4]} />
          <MagazinePage images={[enchape5]} />
          <MagazinePage images={[enchape6]} />
        </PageFlip>
      </div>
    </div>
  );
};

export default Enchapes;



