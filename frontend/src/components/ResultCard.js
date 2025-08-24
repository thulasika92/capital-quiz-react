import React from "react";

export default function ResultCard({ score, total, restartQuiz }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished! 🎉</h2>
      <p className="text-lg mb-6">
        You scored <span className="font-bold">{score}</span> out of{" "}
        <span className="font-bold">{total}</span>
      </p>
      <button
        onClick={restartQuiz}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-medium transition-all"
      >
        Restart Quiz
      </button>
    </div>
  );
}
