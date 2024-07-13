import React, { useState } from 'react';

function QuizSet2() {
    const totalSteps = 5;
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(totalSteps).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const progressWidth = `${(currentStep / totalSteps) * 100}%`;

    const ques = [
        {
            question: "The colour pink is a major part of which fashion aesthetic?",
            options: [
              { answer: "lo-fi", isCorrect: false },
              { answer: "baddie", isCorrect: false },
              { answer: "barbie-core", isCorrect: true }
            ]
          },
          {
            question: "Which fashion aesthetic is inspired by the 'Eloise' book series?",
            options: [
              { answer: "clean girl", isCorrect: false },
              { answer: "plaza-core", isCorrect: true },
              { answer: "barbie-core", isCorrect: false }
            ]
          },
          {
            question: "Which of the following describes the 'twee' aesthetic?",
            options: [
              { answer: "dark and surreal", isCorrect: false },
              { answer: "vintage and feminine", isCorrect: true },
              { answer: "luxury and preppy", isCorrect: false }
            ]
          },
          {
            question: "The Harajuku district in Japan influenced which of the following fashion aesthetics?",
            options: [
              { answer: "twee", isCorrect: false },
              { answer: "weird girl", isCorrect: true },
              { answer: "lo-fi", isCorrect: false }
            ]
          },
          {
            question: "Witchcraft and spooky movies are a part of which aesthetic?",
            options: [
              { answer: "academia", isCorrect: false },
              { answer: "whimsgothic", isCorrect: true },
              { answer: "coquette", isCorrect: false }
            ]
          }
    ];

    const handleOptionChange = (optionIndex) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentStep - 1] = optionIndex;
        setSelectedAnswers(newSelectedAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        selectedAnswers.forEach((answerIndex, questionIndex) => {
            if (answerIndex !== null && ques[questionIndex].options[answerIndex].isCorrect) {
                newScore++;
            }
        });
        setScore(newScore);
        setIsSubmitted(true);
    };

    return (
        <div>
            <div className="mt-10 mr-20 ml-20 overflow-hidden rounded-full bg-gray-200">
                <div className="h-2 rounded-full bg-blue-500" style={{ width: progressWidth }}></div>
            </div>
            {ques.slice(currentStep - 1, currentStep).map((q, questionIndex) => (
                <div key={questionIndex}>
                    <div className="mr-60 ml-60 mt-10 bg-orange-100 relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
                        <div className="sm:flex sm:justify-between sm:gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{q.question}</h3>
                            </div>
                        </div>
                    </div>
                    <fieldset className="mr-60 ml-60 mt-10 space-y-4">
                        <legend className="sr-only">Options</legend>
                        {q.options.map((option, optionIndex) => (
                            <div key={optionIndex}>
                                <label
                                    className={`flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200
                                    ${
                                        selectedAnswers[currentStep - 1] !== null
                                            ? selectedAnswers[currentStep - 1] === optionIndex
                                                ? option.isCorrect
                                                    ? 'bg-green-200'
                                                    : 'bg-red-200'
                                                : ''
                                            : ''
                                    }`}
                                >
                                    <div>
                                        <p className="text-gray-700">{option.answer}</p>
                                    </div>
                                    <input
                                        type="radio"
                                        name={`question${questionIndex}`}
                                        className="size-5 bg-orange-200 border-gray-300 text-blue-500"
                                        checked={selectedAnswers[currentStep - 1] === optionIndex}
                                        onChange={() => handleOptionChange(optionIndex)}
                                    />
                                </label>
                            </div>
                        ))}
                    </fieldset>
                </div>
            ))}
            <div className="flex justify-center gap-x-4 mx-auto">
                <button
                    className='mt-10 bg-gray-400 rounded-md p-2'
                    onClick={() => setCurrentStep(currentStep - 1)}
                    disabled={currentStep === 1}
                >
                    Previous
                </button>
                <button
                    className='mt-10 bg-pink-500 rounded-md p-2'
                    onClick={() => setCurrentStep(currentStep + 1)}
                    disabled={currentStep === totalSteps}
                >
                    Next
                </button>
                {currentStep === totalSteps && (
                    <button
                        className='mt-10 bg-green-500 rounded-md p-2'
                        onClick={handleSubmit}
                        disabled={isSubmitted}
                    >
                        Submit
                    </button>
                )}
            </div>
            {isSubmitted && (
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold">Your Score: {score}/{totalSteps}</h2>
                </div>
            )}
        </div>
    );
}

export default QuizSet2;
