import './NavBar.css'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
      <nav className ='NavBar'>
          <div>
              <img  className = 'Logo-nike' src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/420px-Logo_NIKE.svg.png"/>
          </div>
          <div>
              <ul className = 'List'>
                  <li className = 'li'><a href="#" className = 'a'>Tienda</a></li>
                  <li className = 'li'><a href="#" className = 'a'>Envios</a></li>
                  <li className = 'li'><a href="#" className = 'a'>Servicios</a></li>
              </ul>
          </div>
         <CartWidget />
      </nav>
    )
  }

  export default Navbar
  
