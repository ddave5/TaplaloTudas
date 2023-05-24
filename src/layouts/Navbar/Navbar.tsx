import React, {useEffect, useState} from 'react'
import './navbar.css'
import NavbarUtil from '../../utils/NavbarUtil.tsx';
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

  let [isActive, setActive] = useState(true);

  useEffect(() => {
    let navigation = document.getElementById("nav");
    let menuButton = document.getElementById("menuButton");

    NavbarUtil.scrollHideAndShow(navigation);

    document.onclick = function(e){
      if(e.target !== navigation && e.target !== menuButton && !isActive){
        navigation.classList.remove("active");
      }
    }
  },[isActive])

  return (
    <nav id="nav" className={isActive ? null : "active"}>
      <div className='logo__container'>
        <a href='/' className='logo__text'>Tápláló tudás</a>
        <p onClick={() => setActive(!isActive)}><GiHamburgerMenu/></p>
      </div>
      <div className="navbar__menu">
        <ul className='menu__container'>
          <li><a href='/about'>Rólam</a></li>
          <li><a href='/prices'>Árlista</a></li>
          <li><a href='/'>Kövess minket!</a></li>
          <li><a href='/contact'>Kapcsolat</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar