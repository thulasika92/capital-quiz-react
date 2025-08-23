import React, { useState } from "react";
import quizData from "../data/Countries";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const [questions] = useState(() =>
    quizData
      .sort(() => 0.5 - Math.random()) // shuffle questions randomly
      .slice(0, 15) // pick 15 random questions per game
  );
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);

    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    window.location.reload();
  };

  return (
  <div className="quiz-container fade-in">
    {showResult ? (
      <Result score={score} total={questions.length} restartQuiz={restartQuiz} />
    ) : (
      <Question
        question={questions[current]}
        current={current}
        total={questions.length}
        selected={selected}
        handleAnswer={handleAnswer}
      />
    )}
  </div>
);

}
