import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function ResultCard({ score, total, restartQuiz }) {
  const { width, height } = useWindowSize();
  const percent = Math.round((score / total) * 100);

  return (
    <div className="relative text-center space-y-6 animate-fadeIn">
      {/* Show confetti only if score >= 8 */}
      {score >= 8 && <Confetti width={width} height={height} />}

      <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 flex items-center justify-center shadow-lg">
        <span className="text-white text-2xl font-bold">✓</span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
        Quiz Completed
      </h2>

      <p className="text-lg text-gray-600">
        You scored <span className="font-bold text-indigo-600">{score}</span> out of{" "}
        <span className="font-bold text-indigo-600">{total}</span> ({percent}%)
      </p>

      {/* Success or encouragement message */}
      {score >= 8 ? (
        <p className="text-green-600 font-semibold text-lg">
          🎉 Awesome job! You're a Capital Quiz Master! 🏆
        </p>
      ) : (
        <p className="text-red-500 font-semibold text-lg">
          Keep practicing! You'll do even better next time 💪
        </p>
      )}

      <button
        onClick={restartQuiz}
        className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-300"
      >
        Restart Quiz
      </button>
    </div>
  );
}
