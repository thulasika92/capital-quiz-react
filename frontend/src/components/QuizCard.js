import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import ResultCard from "./ResultCard";

export default function QuizCard({ questions }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) setScore(score + 1);

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected("");
      } else {
        setFinished(true);
      }
    }, 600);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFinished(false);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300">
      {!finished && (
        <div className="px-6 py-5 border-b border-gray-200 bg-white">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Capital Quiz</h1>
          <ProgressBar progress={progress} />
        </div>
      )}

      <div className="px-6 py-8 space-y-6">
        {!finished ? (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What is the capital of{" "}
              <span className="text-indigo-600">{questions[current].country}</span>?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[current].options.map((option) => {
                let base =
                  "py-3 px-4 rounded-xl font-medium border transition-all shadow-sm transform duration-150 active:scale-95 select-none";
                let state = selected
                  ? option === questions[current].answer
                    ? "bg-emerald-50 border-emerald-500 text-emerald-800"
                    : option === selected
                    ? "bg-rose-50 border-rose-500 text-rose-800"
                    : "bg-gray-100 border-gray-200 text-gray-500"
                  : "bg-white border-gray-200 hover:bg-gray-50 hover:shadow-lg";

                return (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    disabled={!!selected}
                    className={`${base} ${state}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <ResultCard score={score} total={questions.length} restartQuiz={restartQuiz} />
        )}
      </div>
    </div>
  );
}
