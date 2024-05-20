import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo-unique-fotor-bg-remover-2024041610840.png'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const links = [
  {
    name: 'inicio',
    href: '/inicio'
  },
  {
    name: 'nosotros',
    href: '/nosotros'
  },
  {
    name: 'productos',
    href: '/productos'
  },
  {
    name: 'clientes',
    href: '/clientes'
  },
  {
    name: 'proyectos',
    href: '/proyectos'
  },
  {
    name: 'contacto',
    href: '/contacto'
  }, 

  
]
const routes =[

  {
    name: 'cocinas',
    href: '/cocinas'
  }
]

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container >
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
      <img className='logo' src={logo} alt='logo' /> 
      <Navbar.Toggle  aria-controls="basic-navbar-nav " className='basic-navbar-nav1' />
      <Navbar.Collapse id="basic-navbar-nav" className='po'>
        <Nav className="me-auto ">
        {links.map(menu => (
            <Link to={menu.href} className='linkUnidad'>{menu.name.toUpperCase()}</Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
/*     <div className='img'>
          </div> */


          
        /*   <header>

      <nav className='navBar'>
        <div className='links'>
        <img className='logo' src={logo} alt='logo' /> 
          {links.map(menu => (
            <Link to={menu.href} className='linkUnidad'>{menu.name.toUpperCase()}</Link>
          ))}
        </div>
     
      </nav>
          </header> */
  )
} 