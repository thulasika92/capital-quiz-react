import React from "react";

export default function Navbar() {
  return React.createElement(
    "nav",
    { className: "flex items-center px-6 py-3 sticky top-0 z-50 bg-transparent" },
    React.createElement(
      "div",
      { className: "flex items-center gap-3" },
      React.createElement("img", { src: "/quiz.png", alt: "Quiz Logo", className: "h-16 w-16" }),
      
    )
  );
}
