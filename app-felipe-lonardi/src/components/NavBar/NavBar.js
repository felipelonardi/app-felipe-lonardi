import './NavBar.css'
import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink, Link} from 'react-router-dom'
import { getCategories } from '../products/product';


const Navbar = () => {
    return (
      <nav className ='NavBar'>
          <div>
              <a href='localhost:3000'> 
              <img  className = 'Logo-nike' src= "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/420px-Logo_NIKE.svg.png"/>
              </a>
              
          </div>
          <div>
              <ul className = 'List'>
              <li> <NavLink to={'/category/airforce'} className="a" >Air Force</NavLink></li>
              <li><NavLink to={'/category/sb'} className="a" >Sb</NavLink></li>
              <li><NavLink to={'/category/airjordan'} className="a" >Air Jordan</NavLink></li>

              </ul>
          </div>
         <CartWidget />
      </nav>
    )
  }

  export default Navbar
  
