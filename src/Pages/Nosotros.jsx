import React from 'react'
import closet from '../assets/Leonardo_Kino_XL_generates_an_image_of_a_wood_company_that_hig_1 (1).jpg'
import './Nosotros.css'
import { Link } from 'react-router-dom';
import nosotros from '../assets/LOBBY-02.jpg' 
import Cocina from '../assets/COCINA-01.jpg'

import Valores from '../Components/Valores'


import backgroundImage from '../assets/Baño.webp'

function Nosotros() {
  return (
    <div className="scroll-snap-container"> 
     <img className='fixed-background' src={nosotros} alt="" />

    <div className="snap-content"> 
      <div className="snap-item"> 
        <h1>QUIENES SOMOS?</h1>
        <p>
        UNIQUE SOLUTIONS S.A.S es una empresa industrializada dedicada a la fabricación e instalación de Cocinas Integrales, muebles de: baño, ropas, lavaderos, peluquería, puertas principales, puertas de comunicaciones, closets, vertieres, escritorios, bibliotecas y cualquier tipo de muebles arquitectónicos y/o carpintería de madera.
        </p>
      </div>

      <div className="snap-item"> 
        <h1>MISIÓN</h1>
        <p>
        “Ofrecer a nuestros clientes las mejores ideas para la elaboración de proyectos relacionados con todo tipo muebles en madera, carpintería en madera y cocinas integrales ajustándonos a sus necesidades, generando ambientes agradables, duraderos y de alta calidad, teniendo en cuenta ante todo el cumplimiento y la excelencia."
        </p>
      </div>

      <div className="snap-item"> 
        <h1>VISIÓN</h1>
        <p>
        “Ser un referente de calidad y cumplimiento en suministro e instalación de carpintería de madera y muebles de cocina, apoyados en recurso humano altamente calificado y comprometido, acompañados con un espíritu de innovación.”
        </p>
      </div>


      <div className="snap-item"> 
        <h1>VALORES</h1>
        <p>
         <li>  <span className='span-bold'>CALIDAD:</span>Elaborar carpintería arquitectónica y muebles de cocina con un alto estándar calidad. </li>
         <li> <span className='span-bold'>CUMPLIMIENTO:</span> Entregar nuestros trabajos dentro de los tiempos con los cuales nos comprometimos. </li>
         <li> <span className='span-bold'>SERVICIO: </span> Tener un factor diferenciador, brindando el mejor servicio posible a nuestros clientes. </li>
         <li> <span className='span-bold'>RESPETO:</span> Conocer el valor propio y honrar el valor de los demás. </li>
         <li>  <span className='span-bold'>TRABAJO EN EQUIPO:</span> Trabajar con un equipo comprometido, buscando siempre obtener los mejores resultados.</li>
        </p>
      </div>

      <div className="snap-item"> 
        <h1>OBJETIVOS</h1>
        <p>
         <li> Ser una empresa reconocida a nivel nacional por la calidad de sus productos y servicios.</li>
         <li> Satisfacer la necesidad de nuestros clientes, entregando oportunamente los trabajos a nuestros clientes.</li>
         <li> Integrar un equipo capaz de afrontar las adversidades y brindar la mejor atención a nuestros clientes</li>
        </p>
      </div>
    </div>
  </div>

  )
}

export default Nosotros
