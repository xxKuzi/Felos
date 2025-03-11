import React from "react";
import { useState, useEffect } from "react";

const reasons = [
  "I was sick",
  "Family emergency",
  "Missed the bus",
  "Overslept",
  "Doctor's appointment",
  "Traffic jam",
  "Car broke down",
  "Had a dentist appointment",
  "Power outage",
  "Weather conditions",
];

export default function ReasonSpinner() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    setSelectedReason(null);
    setTimeout(() => {
      const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
      setSelectedReason(randomReason);
      setSpinning(false);
    }, 1500); // 1.5 sec spinning animation
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-2xl font-bold mb-4">Why wasn't I in school?</div>
      <button
        onClick={spin}
        disabled={spinning}
        className={`px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 disabled:bg-gray-400 transition duration-200 ease-in-out ${
          spinning ? "cursor-not-allowed" : ""
        }`}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
      {selectedReason && (
        <div className="mt-6 px-4 py-2 bg-white shadow-md rounded-lg text-lg font-medium animate-bounce">
          {selectedReason}
        </div>
      )}
    </div>
  );
}
