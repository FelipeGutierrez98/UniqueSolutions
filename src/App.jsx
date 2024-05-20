import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
/* COMPONENTS */
import Header from './Components/Header';
import Banner from './Components/Banner';
import Footer from './Components/Footer';

/* PAGES */
import Inicio from './Pages/Inicio'
import Nosotros from './Pages/Nosotros';
import Clientes from './Pages/Clientes';
import Productos from './Pages/Productos';
import Proyectos from './Pages/Proyectos';
import Contacto from './Pages/Contacto';
import Cocinas from './Pages/Cocinas'
import Closet from './Pages/Closet';
import MueblesBaño from './Pages/MueblesBaño'
import MueblesLava from './Pages/MueblesLava';
import Lobbies from './Pages/Lobbies'
import Puertas from './Components/Puertas';
import Muebles from './Pages/Muebles';



import './App.css'
import Vestieres from './Pages/Vestieres';
import Enchapes from './Pages/Enchapes';


const App = () => {
  
  return (
    <div>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/cocinas" element={<Cocinas/>} />
      <Route path="/mueblesBaño" element={<MueblesBaño/>} />
      <Route path="/closet" element={<Closet/>} />
      <Route path="/lobbies" element={<Lobbies/>} />
      <Route path="/mueblesLava" element={<MueblesLava/>} />
      <Route path="/puertas" element={<Puertas/>} />
      <Route path="/puertas" element={<Muebles/>} />
      <Route path="/vestier" element={<Vestieres/>} />
      <Route path="/enchape" element={< Enchapes/>} />


    </Routes>
   {/* 
   {/*   <Button> click me</Button> */}
   <Footer/>
    </Router>
    </div>
  )
}

export default App


