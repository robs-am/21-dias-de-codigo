import React from 'react';
import './App.css'
import Header from './components/header';
import MainContent from './components/mainContent';
import Footer from './components/footer';
import Banner from './components/banner';
import Menina from './assets/menina.mp4'


function App() {
  

  return (
    <div className="container">
      <video className='video' src={Menina} autoPlay loop />
           
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
