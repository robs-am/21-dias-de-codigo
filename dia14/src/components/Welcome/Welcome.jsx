import React from "react";
import "./Welcome.css";
import Logo from "./../img/Logo.svg";

const Welcome = () => {
  return (
    <div id="welcome">
      
      
      <button>Iniciar</button>
      <img src={Logo} alt="Logo dragão" />
      
    </div>
  );
};

export default Welcome;
