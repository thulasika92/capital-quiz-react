import React, { useState } from "react";
import QuizCard from "./components/QuizCard";
import ResultCard from "./components/ResultCard";
import ProgressBar from "./components/ProgressBar";
import questions from "./data/questions";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrent(0);
    setFinished(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        {!finished ? (
          <>
            <ProgressBar current={current + 1} total={questions.length} />
            <QuizCard
              question={questions[current]}
              handleAnswer={handleAnswer}
            />
          </>
        ) : (
          <ResultCard
            score={score}
            total={questions.length}
            restartQuiz={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}
