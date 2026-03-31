import Question from "@/types/quiz";
import { Action } from "@/reducer/quizReducer";
const Options = ({ data, currentQuestion, dispatch, selectedOption }: { data: Question[]; currentQuestion: number; dispatch: (action: Action) => void; selectedOption: string }) => {
    const question = data[currentQuestion];
    if (!question) return null;
    const answers = [
        ...(question.incorrect_answers || []),
        question.correct_answer
    ];
    return (
        <>
            {answers.map((answer, index) => {
                const isCorrect = answer === question.correct_answer;
                const isSelected = selectedOption === answer;

                return (
                    <button
                        key={index}
                        onClick={() =>
                            !selectedOption &&
                            dispatch({ type: "OPTION_SELECTED", payload: answer })
                        }
                        disabled={!!selectedOption}
                        className={`px-4 py-2 border border-black rounded-lg
                        ${selectedOption
                                ? isCorrect
                                    ? "bg-black text-white"
                                    : isSelected
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-300 text-black"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    />
                );
            })}
        </>
    );
};
export default Options;
