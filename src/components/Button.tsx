import { Props } from "@/types/quiz";
const Options = ({ data, currentQuestion, selectedOption, dispatch }:Props) => {
    const answers = [
        ...data[currentQuestion]?.incorrect_answers,
        data[currentQuestion]?.correct_answer
    ];
    return (
        <>
            {answers.map((answer, index) => {
                const isCorrect = answer === data[currentQuestion]?.correct_answer;
                const isSelected = selectedOption === answer;
                return (
                    <button
                        key={index}
                        onClick={() =>
                            !selectedOption &&
                            dispatch({ type: "SET_SELECTED_OPTION", payload: answer })
                        }
                        disabled={!!selectedOption}
                        className={`text-base md:text-lg px-4 py-2 border border-black rounded-lg
                        ${selectedOption
                                ? isCorrect
                                    ? "bg-black text-white"
                                    : isSelected
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-300 text-black"
                                : "bg-gray-200 hover:bg-gray-300 text-black cursor-pointer"
                            }`}
                        dangerouslySetInnerHTML={{ __html: answer }}
                    ></button>
                );
            })}
        </>
    );
};
export default Options;