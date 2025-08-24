import React from "react";
import Navbar from "./components/Navbar";
import QuizCard from "./components/QuizCard";
import questions from "./data/questions";

export default function App() {
  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-br from-indigo-100 to-purple-300 flex flex-col" },
    React.createElement(Navbar, null),
    React.createElement(
      "div",
      { className: "flex justify-center w-full mt-10 px-4" },
      React.createElement(QuizCard, { questions: questions })
    )
  );
}
