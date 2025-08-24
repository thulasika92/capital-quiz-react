import React from "react";
import QuizCard from "./components/QuizCard";
import questions from "./data/questions";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 
                    bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <QuizCard questions={questions} />
    </div>
  );
}
