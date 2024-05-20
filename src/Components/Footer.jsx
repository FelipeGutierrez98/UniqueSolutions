import React from 'react'
import './Footer.css'
import logo from '../assets/Logo-unique-fotor-bg-remover-2024041610840.png'


function Footer() {
  return (
    <div className='positionFooter  bg-body-tertiary'>

      <div className='positionPro'>
        <ul>
          <li><a href="#">Cocinas</a></li>
          <li><a href="#">Closets</a></li>
          <li><a href="#">Puertas</a></li>
        
        </ul>
        <ul>
          <li><a href="#">Vestier</a></li>
          <li><a href="#">Lobbies</a></li>
          <li><a href="#">Enchapes</a></li>
        
        </ul>
        <ul>
          <li><a href="#">Muebles de Baño</a></li>
          <li><a href="#">Muebles de Lavado</a></li>
          <li><a href="#">Recepciones</a></li>
     
        </ul>
      </div>
      <p className='copy'>

        &copy; {new Date().getFullYear()} UniqueSolutions. Todos los derechos reservados.
      </p>

      
      <div class="footer-logo">
                <div class="footer-social">
                    <a href="#"> <i class="fa-brands fa-facebook"></i> </a>
                    <a href="#"> <i class="fa-brands fa-instagram"></i> </a>
                    <a href="#"> <i class="fa-brands fa-twitter-square"></i> </a>
                </div>
            </div>

    </div>

  )
}

export default Footer


{/* <div className='posfooter'> 
  
      <footer className='footer'>
      <div className='linkContainer'>
        <a href="/" className='footerLink'>Inicio</a>
        <a href="/nosotros" className='footerLink'>Nosotros</a>
        <a href="/productos" className='footerLink'>Productos</a>
        <a href="/clientes" className='footerLink'>Clientes</a>
        <a href="/proyectos" className='footerLink'>Proyectos</a>
        <a href="/contacto" className='footerLink'>Contactar</a>
      </div>
      <p className='copy'>
        &copy; {new Date().getFullYear()} uniqueSolutions. Todos los derechos reservados.
      </p>
    </footer>
       </div>
   */}





/*    <div>
       <footer className="footer text-center">
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-logo">
          <h3>GEA</h3>
            <p>Dejamos huella en lo que hacemos.</p>
            <div className='red-social '>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <div className="footer-links">
             <h3>Enlaces útiles</h3> 
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/acerca-de">Acerca de nosotros</a></li>
            </ul>
           </div>
          <div className="footer-contact">
           <h3>Contacto</h3> 
            <p><strong>Dirección:</strong> Av. Principal 123, Ciudad, País</p>
            <p><strong>Teléfono:</strong> +123 456 789</p>
            <p><strong>Email:</strong> info@uniqueSolutions.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()}Unique-Solutions Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    </div> */