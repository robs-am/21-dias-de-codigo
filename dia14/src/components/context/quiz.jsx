import {createContext, useReducer} from "react";
import questions from '../data/questions'

const STAGES = ["Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value ={name:"Quiz"};
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};