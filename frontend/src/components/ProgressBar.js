import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
