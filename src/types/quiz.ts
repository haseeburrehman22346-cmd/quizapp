interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  selectedOption: string;
}
export default Question
export type QuizAction = 
  | { type: 'SET_DATA'; payload: Question[] }
  | { type: 'SET_SELECTED_OPTION'; payload: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'RESET' };
export interface Props {
  data: Question[];
  currentQuestion: number;
  selectedOption: string | null;
  dispatch: React.Dispatch<QuizAction>;
}