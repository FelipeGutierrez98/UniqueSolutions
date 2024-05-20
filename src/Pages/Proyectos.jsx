import React from 'react'
import './Proyectos.css'
import Banner1 from '../assets/banner.webp'
import kornLogo from '../assets/kornGroup.png'
import kovok from '../assets/Kovok-Photoroom.png-Photoroom.png'
import cgrLogo from '../assets/CGR.png'
import tramontana from '../assets/ImagesLogo-Tramontana-removebg-preview.png'
import AmbienttiLogo from '../assets/01-AMBIENTTI-Photoroom.png-Photoroom.png'
import { Link } from 'react-router-dom'
import proyectos from '../assets/LOBBY-01.jpg'

function Proyectos() {
  return (
    <div>

     {/*  <div className='caro'>

        <div className="image-containep">
          <img className='imagen' src={proyectos} alt='logo' />
          <h1 className="image-title w">PROYECTOS</h1>

        </div>
      </div> */}


      <div className='position'>

        <div className='principal-Proyectos'>
          <div className='card'>
            <div className='face front'>
              <img className='img2 ' src={cgrLogo} alt="" />
              <h3>
                Edificio Fontanna 105
              </h3>
            </div>
            <div className='face back'>


              <h3> Edificio Fontanna 105</h3>

              <p className='pro'>

              (Calle 105 No. 49 – 08, Bogotá) - Constructora CGR Ingeniería y Gerencia de Proyectos SAS
              </p>

              <div className='link' >
                <a href="https://cgrconstructores.com/portfolio/fonttana-105-apartamentos/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>

              </div>
            </div>
          </div>


          <div className='card'>
            <div className='face front'>
              <img className='img2 x' src={tramontana} alt="" />
              <h3>
                Conjunto Residencial Montemadero
              </h3>
            </div>
            <div className='face back'>


              <h3> Conjunto Residencial Montemadero</h3>

              <p className='pro'>

              (La Calera - Cundinamarca) - Tramontana Constructora SAS
              </p>
              <div className='link' >
              <a href="https://tramontanaconstructora.com/property/montemadero-casas-la-calera/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              </div>
            </div>
          </div>


          <div className='card'>
            <div className='face front'>
              <img className='img2' src={kovok} alt="" />
              <h3>
                Condominio Residencial Tarragona Club  (Cota - Cundinamarca).  Constructora Kovok SAS
              </h3>
            </div>
            <div className='face back'>


              <h3>  Condominio Residencial Tarragona Club </h3>

              <p className='pro'>

              (Cota - Cundinamarca).  Constructora Kovok SAS
              </p>
              <div className='link' >
              <a href="https://www.ambientti.com.co/proyectos/tarragona/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              
              </div>
            </div>
          </div>


          <div className='card'>
            <div className='face front'>
              <img className='img2' src={kovok} alt="" />
              <h3>
                Conjunto Residencial Reserva Akora
              </h3>
            </div>
            <div className='face back'>


              <h3>   Conjunto Residencial Reserva  de Akora  </h3>
              <p className='pro'>

              (Tocancipa - Cundinamarca). Constructora Kovok SAS
              </p>

              <div className='link' >
              <a href="https://www.ambientti.com.co/proyectos/reserva-akora/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              </div>
            </div>
          </div>


          <div className='card'>
            <div className='face front'>
              <img className='img2' src={cgrLogo} alt="" />
              <h3>
                Edificio Morein
              </h3>
            </div>
            <div className='face back'>


              <h3> Edificio Morein </h3>

              <p className='pro'>

              (Calle 161A No.16C 59, Bogotá) - Constructora CGR Ingeniería y Gerencia de Proyectos SAS
              </p>

              <div className='link' >
              <a href="https://cgrconstructores.com/portfolio/morein/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='face front'>
              <img className='img2' src={kornLogo} alt="" />
              <h3>
                Edificio Urban K- Morph 95
              </h3>
            </div>
            <div className='face back'>


              <h3> Edificio Morein K- Morph 95 </h3>

               <p className='pro'>

              (Calle 95 No. 21 - 80, Bogotá) -  Constructora Ki Tower - A Korn Arquitectos
               </p>

              <div className='link' >
              <a href="https://www.novarealestate.net/urban-k-a-korn-arquitectos"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              
            
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='face front'>
              <img className='img2 x' src={AmbienttiLogo} alt="" />
              <h3>
                Conjunto Residencial Arbolatto
              </h3>
            </div>
            <div className='face back'>


              <h3> Edificio Morein K- Morph 95 </h3>

               <p className='pro'>

              (Funza - Cundinamarca) -  Ambientti Constructora Inmobiliaria S.A.
               </p>

              <div className='link' >
              <a href="https://www.ambientti.com.co/proyectos/arbolatto-apartamentos/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              </div>
            </div>
          </div>


          <div className='card'>
            <div className='face front'>
              <img className='img2' src={kornLogo} alt="" />
              <h3>
                Edificio La Primera - Kandelaria
              </h3>
            </div>
            <div className='face back'>


              <h3>  Edificio La Primera - Kandelaria </h3>

               <p className='pro'>
               (Cra. 1 No. 8-20, Bogotá) -  Constructora Kandelaria SAS - A Korn Arquitectos
               </p>
              

              <div className='link' >
              <a href="https://www.ambientti.com.co/proyectos/arbolatto-apartamentos/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              
              </div>
            </div>
          </div>

          <div className='card'>
            <div className='face front'>
              <img className='img2 x' src={AmbienttiLogo} alt="" />
              <h3>
                Edificio Sotaventto
              </h3>
            </div>
            <div className='face back'>


              <h3>Edificio Sotaventto </h3>

              <p className='pro'>

              (Calle 104A No, 45A-60, Bogotá) -  Ambientti Constructora Inmobiliaria S.A.
              </p>
              <div className='link' >

              <a href="https://ambientti.com.co/"
                  target="_blank"
                  rel="noopener noreferrer">
                  + Info
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
