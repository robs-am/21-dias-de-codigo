import React from 'react';
import './App.css'
import Header from './components/header';
import MainContent from './components/mainContent';
import Footer from './components/footer';
import Banner from './components/banner';
import Menina2 from './assets/menina2.mp4'


function App() {
  

  return (
    <div className="container">
      
        <video className='video' src={Menina2} autoPlay loop />
        
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
