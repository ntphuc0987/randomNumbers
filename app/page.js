"use client";

import { useState } from "react";

export default function Home() {
  const [numberGroups, setNumberGroups] = useState([]);

  const generateRandomNumbers = () => {
    const numbers = Array.from({ length: 99 }, (_, i) => i + 1);
    const shuffledNumbers = shuffleArray(numbers);

    const groupedNumbers = [];
    while (shuffledNumbers.length > 0) {
      groupedNumbers.push(shuffledNumbers.splice(0, 3));
    }

    setNumberGroups(groupedNumbers);
  };

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <main className="flex flex-col h-screen items-center justify-center p-5">
      <div className="flex justify-center flex-col">
        <h1>Random Number Groups</h1>
        <button
          onClick={generateRandomNumbers}
          className="bg-slate-600 text-white rounded p-4 mt-5 mb-5"
        >
          Generate Groups
        </button>
      </div>
      <ul className="flex flex-wrap w-full justify-start border-">
        {numberGroups.map((group, index) => (
          <li key={index} className="p-5 w-3/12 text-center ">
            Group {index + 1}: {group.join(", ")}
          </li>
        ))}
      </ul>
    </main>
  );
}
