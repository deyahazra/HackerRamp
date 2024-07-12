import React, { useState } from 'react';

function QuizSet() {
    const totalSteps = 5;
    const [currentStep, setCurrentStep] = useState(1); // Starting at step 1
    const [selectedAnswers, setSelectedAnswers] = useState(Array(totalSteps).fill(null)); // Track selected answers

    const progressWidth = `${(currentStep / totalSteps) * 100}%`;

    const ques = [
        {
            question: "Where is Armani from?",
            options: [
                { answer: "Milan", isCorrect: true },
                { answer: "Paris", isCorrect: false },
                { answer: "California", isCorrect: false }
            ]
        },
        {
            question: "What is Burberry's logo?",
            options: [
                { answer: "A man on horse", isCorrect: false },
                { answer: "A knight on horse", isCorrect: true },
                { answer: "A flag on horse", isCorrect: false }
            ]
        },
        {
            question: "What is Gucci's colour scheme?",
            options: [
                { answer: "Red and green", isCorrect: true },
                { answer: "Red and orange", isCorrect: false },
                { answer: "Red and brown", isCorrect: false }
            ]
        },
        {
            question: "Which clothing company uses a simple double 'HH' split diagonally down the middle?",
            options: [
                { answer: "Helly Hansen", isCorrect: true },
                { answer: "Hackwith", isCorrect: false },
                { answer: "H&M", isCorrect: false }
            ]
        },
        {
            question: "In which year was the Levi company established?",
            options: [
                { answer: "1850", isCorrect: false },
                { answer: "1852", isCorrect: false },
                { answer: "1853", isCorrect: true }
            ]
        }
    ];

    const handleOptionChange = (optionIndex) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentStep - 1] = optionIndex;
        setSelectedAnswers(newSelectedAnswers);
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
                                    className={`bg-orange-100 flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 p-4 text-sm font-medium shadow-sm hover:border-gray-200
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

                >
                    {currentStep === totalSteps ? 'Submit' : 'Next'}
                </button>
            </div>
        </div>
    );
}

export default QuizSet;

{/*  */}