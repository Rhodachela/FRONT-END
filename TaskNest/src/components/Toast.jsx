import React, { useEffect } from "react";

export default function Toast({ message, onClose, duration = 3000, type = "error" }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`fixed top-35 ${bgColor} text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in`}>
      {message}
    </div>
  );
}

