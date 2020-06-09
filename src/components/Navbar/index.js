import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';



const Navbar = (props) => {

    

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/about-us">A propos</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
        </ul>
        
    </div>
   )

 }

export default Navbar