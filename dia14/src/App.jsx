import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from "./components/Welcome/Welcome";
import Question from "./components/Question/Question";

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>House of Dragon Quizz App</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
    </div>
  );
}

export default App;
