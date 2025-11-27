import React from "react";

export default function ProgressTracker({ tasks = [] }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="w-full mt-6 p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
      {/* Progress text */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
        {completed} out of {total} tasks completed ({percentage}%)
      </p>

      {/* Progress bar */}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-3 bg-blue-500 dark:bg-blue-400 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
