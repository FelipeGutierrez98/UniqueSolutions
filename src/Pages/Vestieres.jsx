import React, { useRef } from 'react';
import PageFlip from 'react-pageflip';
import { Link } from 'react-router-dom';
import './Magazine.css';
import vestier1 from '../assets/VESTIER-01.jpg';
import vestier2 from '../assets/VESTIER-02.jpg';
import vestier3 from '../assets/VESTIER-03.jpg';
import vestier4 from '../assets/VESTIER-03A.jpg';
import vestier5 from '../assets/VESTIER-03B.jpg';
import vestier6 from '../assets/Copia de VESTIER-04.jpeg';


const MagazinePage = React.forwardRef(({ images, title, link }, ref) => {
  const isFirstVestier = images.length > 0 && images[0] === vestier1;
  const isSecondImageV1 = images.length > 0 && images[0] === vestier1;
  const isSecondImageV2 = images.length > 0 && images[0] === vestier2;
  const isSecondImageV3 = images.length > 0 && images[0] === vestier3;
  const isSecondImageV4 = images.length > 0 && images[0] === vestier4;
  const isSecondImageV5 = images.length > 0 && images[0] === vestier5;
  const isSecondImageV6 = images.length > 0 && images[0] === vestier6;

 //responsive mobile
 const isSecondImageV2M = images.length > 0 && images[0] === vestier2;
 const isSecondImageV3M = images.length > 0 && images[0] === vestier3;
 const isSecondImageV4M = images.length > 0 && images[0] === vestier4;
 const isSecondImageV5M = images.length > 0 && images[0] === vestier5;
 const isSecondImageV6M = images.length > 0 && images[0] === vestier6;
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
      {isFirstVestier && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator1"></i>
        </Link>
      )}
      {isFirstVestier && (
        <Link to="/Productos" className="arrow-link">
          <i className="fas fa-arrow-left indicator3"></i>
        </Link>
      )}
       {isSecondImageV2M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageV3M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageV4M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageV5M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
       {isSecondImageV6M && ( 
        <i className="fas fa-arrow-left indicator3 " ></i>
      )}
      {isSecondImageV1 && ( 

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageV2 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     
      {isSecondImageV3 && ( 

        <i className="fas fa-arrow-left indicator1" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageV3 && (

        <i className="fas fa-arrow-right indicator2" onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageV4 && ( 

        <i className="fas fa-arrow-right indicator" onClick={() => pageFlip.current.flipNext()}></i>
      )}
     
      {isSecondImageV5 && ( 
        <i className="fas fa-arrow-left indicator1  " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageV5 && ( 
        <i className="fas fa-arrow-right indicator2 " onClick={() => pageFlip.current.flipNext()}></i>
      )}
      {isSecondImageV6 && ( 
        <i className="fas fa-arrow-left indicator3" onClick={() => pageFlip.current.flipNext()}></i>
      )}
    

    </div>
  );
});

const Vestieres = () => {
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
        <MagazinePage images={[vestier1]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier2]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />

        </PageFlip>
      </div>

      <div className="magazine-container1">
        <PageFlip ref={pageFlip} width={450} height={450} >
        <MagazinePage images={[vestier1]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier2]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />

        </PageFlip>
      </div>
      <div className="magazine-container2">
        <PageFlip ref={pageFlip} width={700} height={600} >
        <MagazinePage images={[vestier1]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier2]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />

        </PageFlip>
      </div>
      <div className="magazine-container3">
        <PageFlip ref={pageFlip} width={900} height={600} >
        <MagazinePage images={[vestier1]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier2]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />
        </PageFlip>
      </div>
      <div className="magazine-container4">
        <PageFlip ref={pageFlip} width={550} height={600} >
        <MagazinePage images={[vestier1]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier2]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />

        </PageFlip>
      </div>
      <div className="magazine-container5">
        <PageFlip ref={pageFlip} width={350} height={500} >
        <MagazinePage images={[vestier1]} title="Vestieres" link="/cocinas" arrowLink="/productos" />
        <MagazinePage images={[vestier2]} />
        <MagazinePage images={[vestier3]} />
        <MagazinePage images={[vestier4]} />
        <MagazinePage images={[vestier5]} />
        <MagazinePage images={[vestier6]} />
        </PageFlip>
      </div>
    </div>
  );
};

export default Vestieres;




 

