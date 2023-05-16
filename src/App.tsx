import React from 'react'
import Navbar from './layouts/Navbar/Navbar.tsx'
import Footer from './layouts/Footer/Footer.tsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Contact from './pages/Contact/Contact.tsx'
import About from './pages/About/About.tsx'
import Prices from './pages/Prices/Prices.tsx'

const App = () => {

  return (
    <React.Fragment >
      <Router >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/prices' element={<Prices/>} />
          <Route path ='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </React.Fragment>
  )
}
export default App;
