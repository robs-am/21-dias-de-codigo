import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Option.css";

const Option = ({ option }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      <p>Option</p>
    </div>
  );
};

export default Option;
