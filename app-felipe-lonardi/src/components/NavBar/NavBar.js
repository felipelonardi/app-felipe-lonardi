import './NavBar.css'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom'


const Navbar = () => {
    return (
      <nav className ='NavBar'>
          <div>
              <img  className = 'Logo-nike' src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/420px-Logo_NIKE.svg.png"/>
          </div>
          <div>
              <ul className = 'List'>
              <li> <NavLink to={'/category/tienda'} className="a" >Tienda</NavLink></li>
              <li><NavLink to={'/category/envios'} className="a" >Envios</NavLink></li>
              <li><NavLink to={'/category/servicios'} className="a" >Servicios</NavLink></li>

              </ul>
          </div>
         <CartWidget />
      </nav>
    )
  }

  export default Navbar
  
