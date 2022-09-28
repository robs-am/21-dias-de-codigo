import React from "react";
import "./Question.css"

const Question = () => {
    return (
        <div id="question">
            <p>Pergunta de 0 a 10</p>
            <h2>Pergunta atual</h2>
            <div id="options-container">
                <p>Opções</p>
            </div>
            <button>Continuar</button>
        </div>
    );
};

export default Question