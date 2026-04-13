"use client";
import { useReducer } from "react";
import Question, { QuizAction } from "@/types/quiz";
type State = {
    data: Question[];
    currentQuestion: number;
    selectedOption: string;
    score: number;
};
export type Action = QuizAction;
const useDataSet = () => {
    const initialState: State = {
        data: [],
        currentQuestion: 0,
        selectedOption: "",
        score: 0,
    };
    const reducer = (state: State, action: Action): State => {
        switch (action.type) {
            case "SET_DATA":
                return {
                    ...state,
                    data: action.payload,
                };
            case "NEXT_QUESTION":
                return {
                    ...state,
                    currentQuestion: state.currentQuestion + 1,
                    selectedOption: "",
                };
            case "SET_SELECTED_OPTION":
                const isCorrect = action.payload === state.data[state.currentQuestion]?.correct_answer;
                return {
                    ...state,
                    selectedOption: action.payload,
                    score: isCorrect ? state.score + 1 : state.score,
                };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch] as const
};
export default useDataSet;