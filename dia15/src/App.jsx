import React from "react";
import "./App.css";
import Header from "./components/header/header";
import MainContent from "./components/mainContext/mainContent";
import Footer from "./components/footer";

import Menina2 from "./assets/menina2.mp4";

function App() {
  return (
    <div className="container">
      <video className="video" src={Menina2} autoPlay loop />

      <Header />
      
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
