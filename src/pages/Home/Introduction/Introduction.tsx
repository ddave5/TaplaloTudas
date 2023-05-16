import React from 'react'
import './introduction.css'
import introPicture from '../../../assets/images/intro.jpg';

const Introduction = () => {
  return (
    <div className="introduction__container">
      <div className='image__container'>
        <img src={introPicture} alt='intro' className='intro__image'/>
      </div>
      <div className='text__container'>
        <p>
          Üdvözlöm, én vagyok a dietetikus, és szívesen segítek Önnek az egészséges és kiegyensúlyozott étrend megszervezésében. Célom az, hogy az életmódváltás útján segítsek Önnek, és javaslatokat tegyek az egészséges táplálkozásról és életmódról, hogy javítsam az egészségét és csökkentsem az egészségügyi kockázatokat.
        </p>
        <p>
          Munkám során felmérem a táplálkozási szokásait, az életmódját, majd az Ön egyéni igényei és egészségi állapota alapján készítek egyedi étrendet, amely biztosítja az optimális tápanyagbevitelt. Fontos számomra, hogy az étkezések ízletesek és változatosak legyenek, és a lehető legjobban megfeleljenek az Ön igényeinek.
        </p>
      </div>
    </div>
  )
}

export default Introduction