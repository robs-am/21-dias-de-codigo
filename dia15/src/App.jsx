import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MainContent from "./components/mainContext/mainContent";
import Footer from "./components/footer";
import Banner from "./assets/banner.png";

import Speakers from "./components/Speakers";
import Earbuds from "./components/Earbuds";
import Headphones from "./components/Headphones";
import { Router, Switch } from "react-router-dom";


/* import Menina2 from "./assets/menina2.mp4"; */

function App() {
  return (
    <div className="container">
      <img classname="banner" src={Banner} alt="banner mulher headphone" />
      {/* <video className="video" src={Menina2} autoPlay loop /> */}
      <Router>
        <Header />
          <Switch>
        <MainContent />
        <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
