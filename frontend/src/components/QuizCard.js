import React from "react";

export default function QuizCard({ question, handleAnswer }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">{question.question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="py-3 px-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-all duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
