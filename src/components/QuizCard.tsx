"use client";
import useQuiz from "@/hooks/usequiz";
import { ResultCard } from "./Resul";
import Options from "./Button";
export const QuizCard = () => {
    const { data, currentQuestion, dispatch, selectedOption, score } = useQuiz();
    const isPassed = (score / data.length) * 100 >= 60;
    if (!data.length) {
        return null
    }
    if (currentQuestion >= data.length) {
        return <ResultCard isPassed={isPassed} score={score} data={data} />
    }
    return (
        <>
            <div className="relative min-h-[100vh] flex flex-col items-center justify-center p-12 bg-white text-black">
                <div className="fixed top-0 left-0 w-full bg-gray-100 h-4 z-50">
                    <div className="bg-gray-500 h-full transition-all duration-500 ease-out" style={{ width: `${((currentQuestion + 1) / data.length) * 100}%` }}></div>
                </div>
                <div className="relative flex flex-col justify-between gap-8 md:w-2xl max-w-2xl mx-auto bg-white p-12 rounded-lg shadow-gray-200 shadow-xl border border-gray-100 min-h-[400px] flex items-center justify-center">
                    <div className="flex flex-col gap-4 w-full">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">Question {currentQuestion + 1} of {data.length}</h2>
                            <p className="text-sm md:text-base lg:text-lg text-gray-600">{data[currentQuestion]?.category}</p>
                            <div className="flex gap-1 text-black mt-1">
                                {Array.from({ length: data[currentQuestion]?.difficulty === 'easy' ? 1 : data[currentQuestion]?.difficulty === 'medium' ? 2 : 3 }).map((_, i) => (
                                    <svg key={i} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-black" height="1em" width="1em"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" /> </svg>
                                ))}
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-medium" dangerouslySetInnerHTML={{ __html: data[currentQuestion]?.question }}>
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* {[...data[currentQuestion]?.incorrect_answers,
                            data[currentQuestion]?.correct_answer].map((answer, index) => {
                                const isCorrect = answer === data[currentQuestion]?.correct_answer;
                                const isSelected = selectedOption === answer;
                                return (
                                    <button key={index} onClick={() =>
                                        !selectedOption && dispatch({ type: "OPTION_SELECTED", payload: answer })}
                                        disabled={!!selectedOption}
                                        className={`text-base md:text-lg px-4 py-2 border border-black rounded-lg transition-all duration-300 font-medium
            ${selectedOption ? isCorrect ? "bg-black text-white" : isSelected ? "bg-red-500 text-white" : "bg-gray-300 text-black" : "bg-gray-200 hover:bg-gray-300 text-black cursor-pointer"}`} dangerouslySetInnerHTML={{ __html: answer }}>
                                    </button>);
                            })} */}
                            <Options data={data} currentQuestion={currentQuestion} selectedOption={selectedOption} dispatch={dispatch} />
                        </div>
                        <div className="flex flex-col items-center gap-4 mt-4 min-h-[120px]">{selectedOption && (
                            <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
                                <p className="text-2xl md:text-3xl font-bold text-black">{selectedOption === data[currentQuestion]?.correct_answer ? "Correct!" : "Sorry!"}</p>
                                <button onClick={() => dispatch({ type: "NEXT_QUESTION" })} className="text-base md:text-lg font-medium px-12 py-2 bg-gray-300 text-black border border-black rounded-lg hover:bg-gray-400 transition-all cursor-pointer"> Next Question</button>
                            </div>)}
                        </div>
                        <div className="w-full mx-auto mt-8">
                            <div className="flex justify-between mb-2 text-sm md:text-base font-bold text-gray-800">
                                <span>Score: {Math.round((score / (currentQuestion + (selectedOption ? 1 : 0))) * 100) || 0}%</span>
                                <span>Max Score: {Math.round(((score + (data.length - (currentQuestion + (selectedOption ? 1 : 0)))) / data.length) * 100)}%</span>
                            </div>
                            <div className="w-full bg-white h-8 relative rounded-md border overflow-hidden border-black">
                                <div className="bg-gray-200 rounded-tl-md rounded-bl-md h-full absolute top-0 left-0" style={{ width: `${Math.round(((score + (data.length - (currentQuestion + (selectedOption ? 1 : 0)))) / data.length) * 100)}%` }}></div>
                                <div className="bg-gray-400 h-full absolute rounded-tl-md rounded-bl-md top-0 left-0" style={{ width: `${Math.round(((currentQuestion + (selectedOption ? 1 : 0)) / data.length) * 100)}%` }}></div>
                                <div className="bg-gray-800 h-full absolute rounded-tl-md rounded-bl-md top-0 left-0" style={{ width: `${Math.round((score / data.length) * 100)}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizCard;