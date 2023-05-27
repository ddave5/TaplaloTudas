import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className='footer__company'>
          <div className='footer__company__container'>
            <h1>Tápláló tudás</h1>
            <p>
              Dietetikusként szakszerű segítséget nyújtok az egészség és táplálkozás terén. 
              Segítek egyéni étrendek készítésében, táplálkozási tanácsadásban és életmódváltásban. 
              Célom az, hogy mindenki megtalálja a számára legmegfelelőbb és legtáplálóbb életmódot.
            </p>
          </div>
        </div>
        <div className='footer__options'>
          <div className='options__container'>
            <div className='option__box footer__contact'>
              <h2>Kapcsolat</h2>
              <ul>
                <li> Budapest, </li>
                <li> Jegesmedve utca, 1.</li>
                <li> +36 20 123 45 67</li>
                <li> felegyhaziedina@gmail.com</li>
              </ul>
            </div>
            <div className='option__box footer__documents'>
              <h2>Doumentumok</h2>
              <ul>
                <li><a href='#home'>Impresszum</a></li>
                <li><a href='#home'>Adatvédelmi nyilatkozat</a></li>
                <li><a href='#home'>Szerzői jogi nyilatkozat</a></li>
              </ul>
            </div>
            <div className='option__box footer__socials'>
              <ul>
                <li><a href='#home'><FaFacebookF /></a></li>
                <li><a href='#home'><FaInstagram/></a></li>
                <li><a href='#home'><FaLinkedin /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__copyright'>
        <p>©2023. Created by <a href="https://felegyhazi-david.web.app/">David Felegyhazi</a></p>
      </div>
    </footer>
  )
}

export default Footer