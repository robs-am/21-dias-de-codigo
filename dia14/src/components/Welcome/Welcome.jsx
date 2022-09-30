import React from 'react';

import { useContext } from "react";
import { QuizContext} from '../../context/quiz'
import "./Welcome.css";
import Logo from "./../img/Logo.svg";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    

    
  return (
    <div id="welcome">
      
      
      <button onClick={() => dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
      <img className='logo' src={Logo} alt="Logo dragão" />
      
    </div>
  );
};

export default Welcome;
