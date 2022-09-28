import { useContext } from 'react';
import './App.css'
import Welcome from './components/Welcome/Welcome';
import { Question } from './components/Question/Question';

function App() {
 

  return (
    <div className="App">
      <h1>House of Dragon Quizz App</h1>
      <Welcome />
    </div>
  )
}

export default App
