import React from "react";

export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
      <div
        className="bg-blue-500 h-3 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
