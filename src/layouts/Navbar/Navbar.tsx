import React, {useEffect} from 'react'
import './navbar.css'
import NavbarUtil from '../../utils/NavbarUtil.tsx';

const Navbar = () => {

  useEffect(() => {
    NavbarUtil.scrollHideAndShow(document.getElementById("nav"));
  },[])

  return (
    <nav id="nav" className='nav'>
      <div className='logo__container'>
        <a href='/' className='logo__text'>Tápláló tudás</a>
      </div>
      <div className="menu__container">
        <a href='/about'>Rólam</a>
        <a href='/prices'>Árlista</a>
        <a href='/'>Kövess minket!</a>
        <a href='/contact'>Kapcsolat</a>
      </div>
    </nav>
  )
}

export default Navbar