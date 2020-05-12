import React from 'react';
import './style.css';

/**
 @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Accueil</a>
            <a href="#">A propos</a>
            <a href="#">Contactez nous</a>
        </nav>
        
    </header>
   )

 }

export default Header