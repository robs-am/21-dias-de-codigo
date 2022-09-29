import { useContext } from "react";
import { QuizContext} from '../../context/quiz'

import './Question.css'


const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    
    console.log(quizState);
    return (
      
        <div id="question">
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                <p>Opções</p>
            </div>
            <button onClick={() =>dispatch({type: "CHANGE_QUESTION"})} className="button">Continuar</button>
     
        </div>
    );
};

export default Question