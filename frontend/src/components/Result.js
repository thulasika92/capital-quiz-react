import React from "react";

export default function Result({ score, total, restartQuiz }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">🎉 Quiz Completed!</h2>
      <p className="text-lg sm:text-xl mb-4">
        Your Score: <span className="text-blue-600">{score}</span> / {total}
      </p>
      <button
        onClick={restartQuiz}
        className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition text-base sm:text-lg"
      >
        Restart Quiz
      </button>
    </div>
  );
}
