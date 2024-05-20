import React from 'react'
import cocina from '../assets/COCINA-01.jpg'
import closet from '../assets/CLOSET-02.jpg'
import mueble from '../assets/MUEBLE-03.jpeg'
import muebleTv from '../assets/MUEBLE TV-01.jpeg'
import centroEntretenimiento from '../assets/CENTRO ENTRETENIMIENTO.jpeg'

function Valores() {
  return (
    <section>
      <div className="image-container">
        <div className="image-text">CALIDAD: Elaborar carpintería arquitectónica y muebles de cocina con un alto estándar calidad.</div>
        <img src={cocina} alt="banner" />
      </div>
      <div className="image-container">
        <img src={closet} alt="baño" />
        <div className="image-text">CUMPLIMIENTO: Entregar nuestros trabajos dentro de los tiempos con los cuales nos comprometimos.</div>
      </div>
      <div className="image-container">
        <img src={mueble} alt="logo" />
        <div className="image-text">SERVICIO: Tener un factor diferenciador, brindando el mejor servicio posible a nuestros clientes.</div>
      </div>
      <div className="image-container">
        <img src={muebleTv} alt="cocina" />
        <div className="image-text">RESPETO: Conocer el valor propio y honrar el valor de los demás.</div>
      </div>
      <div className="image-container">
        <img src={centroEntretenimiento} alt="cocina" />
        <div className="image-text">TRABAJO EN EQUIPO: Trabajar con un equipo comprometido, buscando siempre obtener los mejores resultados.</div>
      </div>
    </section>
  )
}

export default Valores
