import React from "react";

export default function Question({ question, current, total, selected, handleAnswer }) {
  // Generate 3 random options + correct answer
  const options = React.useMemo(() => {
    const allCapitals = [
      question.answer,
      ...["Paris", "Berlin", "Rome", "Madrid", "Tokyo", "Ottawa", "Beijing", "Canberra"], // fallback distractors
    ];
    return [...new Set(allCapitals)].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [question]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
        {current + 1}/{total}: What is the capital of{" "}
        <span className="text-blue-600 font-bold">{question.country}</span>?
      </h2>
      <div className="grid grid-cols-1 gap-3 w-full">
        {options.map((option, index) => {
          let btnClass = "bg-blue-500 hover:bg-blue-600";
          if (selected) {
            if (option === question.answer) btnClass = "bg-green-500";
            else if (option === selected) btnClass = "bg-red-500";
            else btnClass = "bg-gray-400";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={selected}
              className={`${btnClass} text-white py-3 rounded-lg transition text-base sm:text-lg`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
