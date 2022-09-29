import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./GameOver.css";
import Dracarys from "../img/Dracarys.gif";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="gameover">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas</p>
            <img src={Dracarys} alt="Gif de Dragão" />
            <button onClick={() => dispatch({type:"NEW_GAME"})} className="reiniciar">Reiniciar</button>
        </div>
    )
}

export default GameOver;