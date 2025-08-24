import React from "react";

export default function ResultCard({ score, total, restartQuiz }) {
  const percent = Math.round((score / total) * 100);

  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
        <span className="text-white text-2xl font-bold">✓</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        Quiz Completed
      </h2>
      <p className="text-gray-600">
        You scored <span className="text-indigo-600 font-bold">{score}</span> out of {total} ({percent}%)
      </p>
      <button
        onClick={restartQuiz}
        className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition shadow-lg"
      >
        Restart Quiz
      </button>
    </div>
  );
}
