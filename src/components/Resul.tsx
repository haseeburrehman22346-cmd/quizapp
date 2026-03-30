import Link from "next/link";
import Question from "@/types/quiz";
export const ResultCard = ({ isPassed, score, data }: { isPassed: boolean, score: number, data: Question[] }) => {
    return (
        <>
            <div className="relative flex flex-col justify-between gap-8 md:w-2xl max-w-2xl mx-auto bg-white p-12 rounded-lg shadow-gray-200 shadow-xl border border-gray-100 min-h-[400px] flex items-center justify-center">
                <div className="flex flex-col gap-6 items-center text-center bg-white animate-in zoom-in duration-300">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700">Quiz Completed!</h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold">
                        You answered {score} out of {data.length} questions correctly.</p>
                    {isPassed ? (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-500">
                            Congratulations! You Passed! Great job!   🎉
                        </p>) : (<p className="text-sm sm:text-base md:text-lg lg:text-xl text-red-500">
                            Sorry! You Failed. Better luck next time 😊
                        </p>
                    )}
                    <Link className="text-sm sm:text-base md:text-lg lg:text-xl font-[400] px-4 py-2 bg-[#dcdedc] border border-black rounded-md hover:bg-gray-400 transition-colors cursor-pointer w-[200px] text-center" href="/"> Go to Home </Link>
                </div>
            </div>
        </>
    );
};

