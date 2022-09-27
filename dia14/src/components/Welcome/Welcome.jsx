import React from 'react';

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";
import Logo from "./../img/Logo.svg";

const Welcome = () => {
    const quizState = useContext(QuizContext);
    console.log(quizState);
  return (
    <div id="welcome">
      
      
      <button>Iniciar</button>
      <img src={Logo} alt="Logo dragão" />
      
    </div>
  );
};

export default Welcome;
