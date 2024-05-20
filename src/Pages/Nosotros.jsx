import React from 'react'
import closet from '../assets/Leonardo_Kino_XL_generates_an_image_of_a_wood_company_that_hig_1 (1).jpg'
import './Nosotros.css'
import { Link } from 'react-router-dom';
import nosotros from '../assets/LOBBY-02.jpg' 
import Cocina from '../assets/COCINA-01.jpg'

import Valores from '../Components/Valores'


import backgroundImage from '../assets/Baño.webp' // Usa una image

function Nosotros() {
  return (
    <div className="scroll-snap-container"> 
     <img className='fixed-background' src={nosotros} alt="" />
{/*     <div className="fixed-background" />  */}{/* Imagen de fondo fija */}
    <div className="snap-content"> {/* Contenedor de contenido con scroll-snap */}
      <div className="snap-item"> {/* Primer bloque de texto */}
        <h1>QUIENES SOMOS?</h1>
        <p>
        UNIQUE SOLUTIONS S.A.S es una empresa industrializada dedicada a la fabricación e instalación de Cocinas Integrales, muebles de: baño, ropas, lavaderos, peluquería, puertas principales, puertas de comunicaciones, closets, vertieres, escritorios, bibliotecas y cualquier tipo de muebles arquitectónicos y/o carpintería de madera.
        </p>
      </div>

      <div className="snap-item"> {/* Segundo bloque de texto */}
        <h1>MISIÓN</h1>
        <p>
        “Ofrecer a nuestros clientes las mejores ideas para la elaboración de proyectos relacionados con todo tipo muebles en madera, carpintería en madera y cocinas integrales ajustándonos a sus necesidades, generando ambientes agradables, duraderos y de alta calidad, teniendo en cuenta ante todo el cumplimiento y la excelencia."
        </p>
      </div>

      <div className="snap-item"> {/* Tercer bloque de texto */}
        <h1>VISIÓN</h1>
        <p>
        “Ser un referente de calidad y cumplimiento en suministro e instalación de carpintería de madera y muebles de cocina, apoyados en recurso humano altamente calificado y comprometido, acompañados con un espíritu de innovación.”
        </p>
      </div>


      <div className="snap-item"> {/* Tercer bloque de texto */}
        <h1>VALORES</h1>
        <p>
         <li>  <span className='span-bold'>CALIDAD:</span>Elaborar carpintería arquitectónica y muebles de cocina con un alto estándar calidad. </li>
         <li> <span className='span-bold'>CUMPLIMIENTO:</span> Entregar nuestros trabajos dentro de los tiempos con los cuales nos comprometimos. </li>
         <li> <span className='span-bold'>SERVICIO: </span> Tener un factor diferenciador, brindando el mejor servicio posible a nuestros clientes. </li>
         <li> <span className='span-bold'>RESPETO:</span> Conocer el valor propio y honrar el valor de los demás. </li>
         <li>  <span className='span-bold'>TRABAJO EN EQUIPO:</span> Trabajar con un equipo comprometido, buscando siempre obtener los mejores resultados.</li>
        </p>
      </div>

      <div className="snap-item"> {/* Tercer bloque de texto */}
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

   /*  <div>

      <div className='caro'>

        <div className="image-containep">
          <img className='imagen' src={nosotros} alt='logo' />
          <h1 className="image-title">NOSOTROS</h1>

        </div>
      </div> */


{/*    -------------------------------- */}
   
{/* <div className='position'>
          <div className="nosotros-container">
            <img className='img2' src={Cocina} alt="" />
            <div className='linea'></div>
            <div className="texto-container">
              <p>
                UNIQUE SOLUTIONS S.A.S es una empresa industrializada dedicada a la fabricación e instalación de Cocinas Integrales, muebles de: baño, ropas, lavaderos, peluquería, puertas principales, puertas de comunicaciones, closets, vertieres, escritorios, bibliotecas y cualquier tipo de muebles arquitectónicos y/o carpintería de madera
              </p>

              <div className='linea2'></div> */}
             {/*  <button className='boton'>

               <Link to="/contacto" className='button'>+ Info</Link> 
              </button> */}
            {/* </div>
          </div>
        </div>
        <div className='position'>
          <div className="nosotros-container">
            <div className="texto-container">
              <ul>
                <li>Ser una empresa reconocida a nivel nacional por la calidad de sus productos y servicios.</li>
                <li>Satisfacer la necesidad de nuestros clientes, entregando oportunamente los trabajos a nuestros clientes.</li>
                <li>Integrar un equipo capaz de afrontar las adversidades y brindar la mejor atención a nuestros clientes</li>


              </ul>

              <div className='linea2'></div> */}
            {/*   <button className='boton'>

                <Link to="/contacto" className='button'>+ Info</Link>
              </button> */}
            {/* </div>
            <div className='linea'></div>
            <img className='img2' src={Cocina} alt="" />
          </div>
        </div> */}






   {/*    -------------------------  */}

      {/* <div className='position'>
        <div className="nosotros-container">
          <img className='img2' src={closet} alt="" />
          <div className='linea'></div>
          <div className="texto-container">
            <p>
              Ofrecer a nuestros clientes las mejores ideas para la elaboración de proyectos relacionados con todo tipo muebles en madera, carpintería en madera y cocinas integrales ajustándonos a sus necesidades, generando ambientes agradables, duraderos y de alta calidad, teniendo en cuenta ante todo el cumplimiento y la excelencia.
            </p>

            <p>
              Nuestro equipo altamente capacitado y experimentado se esfuerza por ofrecer una amplia gama de productos de la más alta calidad, asegurando así la satisfacción y confianza de nuestros clientes.
            </p>
            <div className='linea2'></div>
            <button className='boton'>

              <Link to="/contacto" className='button'>+ Info</Link>
            </button>
          </div>
        </div>
      </div>

      <div className='position'>
        <div className="nosotros-container">
          <div className="texto-container">
            <p>Ser un referente de calidad y cumplimiento en suministro e instalación de carpintería de madera y muebles de cocina, apoyados en recurso humano altamente calificado y comprometido, acompañados con un espíritu de innovación</p>

            <div className='linea2'></div>
            <button className='boton'>

              <Link to="/contacto" className='button'>+ Info</Link>
            </button>
          </div>
          <div className='linea'></div>
          <img className='img2' src={closet} alt="" />
        </div>
      </div>

      <div className='position'>
        <div className="nosotros-container">
          <img className='img2' src={closet} alt="" />
          <div className='linea'></div>
          <div className="texto-container">
            <ul>
              <li>CALIDAD: Elaborar carpintería arquitectónica y muebles de cocina con un alto estándar calidad.</li>
              <li>CUMPLIMIENTO: Entregar nuestros trabajos dentro de los tiempos con los cuales nos comprometimos.</li>
              <li>SERVICIO: Tener un factor diferenciador, brindando el mejor servicio posible a nuestros clientes.</li>
              <li>RESPETO: Conocer el valor propio y honrar el valor de los demás.</li>
              <li>TRABAJO EN EQUIPO: Trabajar con un equipo comprometido, buscando siempre obtener los mejores resultados.</li>

            </ul>
            <div className='linea2'></div>
            <button className='boton'>

              <Link to="/contacto" className='button'>+ Info</Link>
            </button>
          </div>
        </div>
      </div>
    </div>




 */}










{/* 


 <div className='carousel next'>
   <div className='list'>
     <div className='item'>
       <img className='d-block m-auto' src={Banner1} alt='logo' />
       <div className='content'>
         <div className='author'>LUNDEV</div>
         <div className='title'>DESING</div>
         <div className='topic'>ANIMAL</div>
         <div className='des'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repudiandae eos dolor quidem, quia, aliquid illo rerum quas, voluptates necessitatibus accusantium neque quis odit.
         </div>
         <div className='buttons'>
           <button>see more</button>
           <button>suscribe</button>
         </div>
       </div>
     </div>
     <div className='item'>
       <img className='d-block m-auto' src={Baño} alt='logo' />
       <div className='content'>
         <div className='author'>LUNDEV</div>
         <div className='title'>DESING</div>
         <div className='topic'>ANIMAL</div>
         <div className='des'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repudiandae eos dolor quidem, quia, aliquid illo rerum quas, voluptates necessitatibus accusantium neque quis odit.
         </div>
         <div className='buttons'>
           <button>see more</button>
           <button>suscribe</button>
         </div>
       </div>
     </div>
     <div className='item'>
       <img className='d-block m-auto' src={Cocina} alt='logo' />
       <div className='content'>
         <div className='author'>LUNDEV</div>
         <div className='title'>DESING</div>
         <div className='topic'>ANIMAL</div>
         <div className='des'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae repudiandae eos dolor quidem, quia, aliquid illo rerum quas, voluptates necessitatibus accusantium neque quis odit.
         </div>
         <div className='buttons'>
           <button>see more</button>
           <button>suscribe</button>
         </div>
       </div>
     </div>
   </div>
   <div className='thumbnail'>
     <div className='item'>
       <img className='d-block m-auto' src={Banner1} alt='logo' />
       <div className='content'>
         <div className='title'>
           name slider
         </div>
         <div className='des'>
           description
         </div>
       </div>
     </div>
     <div className='item'>
       <img className='d-block m-auto' src={Cocina} alt='logo' />
       <div className='content'>
         <div className='title'>
           name slider
         </div>
         <div className='des'>
           description
         </div>
       </div>
     </div>
     <div className='item'>
       <img className='d-block m-auto' src={Baño} alt='logo' />
       <div className='content'>
         <div className='title'>
           name slider
         </div>
         <div className='des'>
           description
         </div>
       </div>
     </div>
     <div className='item'>
       <img className='d-block m-auto' src={Baño} alt='logo' />
       <div className='content'>
         <div className='title'>
           name slider
         </div>
         <div className='des'>
           description
         </div>
       </div>
     </div>
   </div>
   <div className='arrows'>
     <button id='prev'> {'<'} </button>
     <button id='next'> {'>'} </button>

   </div>
 </div>  */}