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

