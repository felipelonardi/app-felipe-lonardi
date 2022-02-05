
import './NavBar.css'
import React from 'react';

const Navbar = () => {
    return (
      <nav className ='NavBar'>
          <div>
              <h3>Pampa Gin</h3>
          </div>
          <div>
              <ul className = 'List'>
                  <li className = 'li'><a href="#" className = 'a'>Tienda</a></li>
                  <li className = 'li'><a href="#" className = 'a'>Envios</a></li>
                  <li className = 'li'><a href="#" className = 'a'>Servicios</a></li>
              </ul>
          </div>
      </nav>
    )
  }

  export default Navbar
  