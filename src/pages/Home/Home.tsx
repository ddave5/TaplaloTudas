import React, {useState } from 'react'
import './home.css'
import Video from '../../assets/videos/home.mp4';
import Image from '../../assets/images/homeImage.jpg'
import Introduction from './Introduction/Introduction.tsx';
import Portfolio from './Portfolio/Portfolio.tsx';
import Contact from './Conctact/Contact.tsx';

const Home = () => {

  const [loading, setLoading] = useState(true);

  return (
    <div className='home container'>
      {loading && <p>Loading...</p>}

      <div id="home" className='home__container'>
         {window.innerWidth > 600 ? <video width="100%" src={Video} className='opening__video'
                muted loop autoPlay disablePictureInPicture  preload='auto'
                onLoadedData={() => setLoading(false)}/> : <img className='opening__image' src={Image} alt='taplalotudas'/>}
        <div className='dark__blur'/>
        <div className='title__container'>
          <h1 className='opening__title'>Félegyházi Edina</h1>
          <h2 className='opening__subtitle'>dietetikus</h2>
        </div>
        <div className='spacer layerIntro'/>
        <Introduction />
        <div className='spacer layerIntroPortfolio'/>
        <Portfolio /> 
        <div className='spacer layerPortfolioContact'/>
        <Contact /> 
      </div>
      
    </div>
  )
}

export default Home