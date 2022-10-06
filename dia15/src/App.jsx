import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MainContent from "./components/mainContext/mainContent";
import Footer from "./components/footer";
import Banner from "./assets/banner.png"
import { useState } from "react";
import { MenuMobile } from "./components/MenuMobile";
/* import Menina2 from "./assets/menina2.mp4"; */

function App() {
  const[menuIsVisible, setMenuisVisible] = useState(true);

  return (
    <div className="container">
      <img classname="banner" src={Banner} alt="banner mulher headphone" />
      {/* <video className="video" src={Menina2} autoPlay loop /> */}

      <Header />
      <MenuMobile 
      menuIsVisible={menuIsVisible}
      setMenuisVisible={setMenuisVisible}
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
