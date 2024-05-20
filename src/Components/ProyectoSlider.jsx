import React from 'react';
import cocina from '../assets/COCINA-01.jpg';
import closet from '../assets/CLOSET-02.jpg';
import mueble from '../assets/MUEBLE-03.jpeg';
import muebleTv from '../assets/MUEBLE TV-01.jpeg';
import centroEntretenimiento from '../assets/CENTRO ENTRETENIMIENTO.jpeg';
import puertas from '../assets/PUERTA VIDRIERA-02.jpg'
import lobbies from '../assets/LOBBY-02.jpg'
import baño from '../assets/M BAÑO-05.jpg'
import './ProyectoSlider.css';
import { Link } from 'react-router-dom';

function ProyectoSlider() {
  return (
    <div>
      <section className='classBanner'>
        <div className="image-container">
          <Link to='/cocinas'>
            <img src={cocina} alt="Cocinas" />
            <div className="image-text">Cocinas</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to='/closet'>
            <img src={closet} alt="Closets" />
            <div className="image-text">Closets</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to='/mueblesBaño'>
            <img src={baño} alt="Muebles de Baño" />
            <div class="image-text">Muebles de Baño</div>
          </Link>
        </div>
      </section>

      <section>
        <div className="image-container">
          <Link to='/mueblesTv'>
            <img src={muebleTv} alt="Muebles de TV" />
            <div className="image-text">Muebles de Lavado</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to='/lobbies'>
            <img src={lobbies} alt="Lobbies" />
            <div className="image-text">Lobbies</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to='/mueblesMixto'>
            <img src={muebleTv} alt="Muebles Mixto" />
            <div className="image-text">Muebles Mixto</div>
          </Link>
        </div>

        <div className="image-container">
          <Link to='/puertas'>
            <img src={puertas} alt="Puertas" />
            <div className="image-text">Puertas</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProyectoSlider;
