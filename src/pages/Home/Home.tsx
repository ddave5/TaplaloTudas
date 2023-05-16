import React, { useEffect, useState } from 'react'
import './home.css'
import Video from '../../assets/videos/home.mp4'
import Introduction from './Introduction/Introduction.tsx';
import Portfolio from './Portfolio/Portfolio.tsx';
import Contact from './Conctact/Contact.tsx';

const Home = () => {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <p>Loading...</p>}

      <div id="home" className='home__container'>
        <video width="100%" src={Video} className='opening__video'
                muted loop autoPlay disablePictureInPicture  preload='auto'
                onLoadedData={() => setLoading(false)}/>
        <div className='dark__blur'/>
        <div className='title__container'>
          <h1 className='opening__title'>Félegyházi Edina</h1>
          <h2 className='opening__subtitle'>dietetikus</h2>
        </div>
        <div className="coloring__container">
          <div className="opening__coloring__box"/>
        </div>
      </div>
      <div className="content__container">
          <Introduction />
          <Portfolio />
      </div>
      <div className='contract'>
        <Contact />
      </div>
    </>
  )
}

export default Home