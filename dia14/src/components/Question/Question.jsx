import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../Option/Option";
import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const selectOption = () => {
    
  }

  console.log(quizState);
  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option option={option} key={option} answer={currentQuestion.answer} />
        ))}
      </div>
      {quizState.answerSelected && (
        <button
          onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
          className="button">
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
