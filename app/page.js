"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const now = new Date();

  const [numberGroups, setNumberGroups] = useState([]);

  const [clickCount, setClickCount] = useState(0);



  const generateRandomNumbers = () => {
    const numbers = Array.from({ length: 60 }, (_, i) => i + 1);
    const shuffledNumbers = shuffleArray(numbers);

    const groupedNumbers = [];
    while (shuffledNumbers.length > 0) {
      groupedNumbers.push(shuffledNumbers.splice(0, 3));
    }

    setNumberGroups(groupedNumbers);
    setClickCount(clickCount + 1);
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
    <main className="flex flex-col items-center justify-center p-5">
      <div className="flex justify-center flex-col">
        <h1>Random Number Groups</h1>
        <button
          onClick={generateRandomNumbers}
          className="bg-slate-600 text-white rounded p-4 mt-5 mb-5"
        >
          Generate Groups
        </button>
      </div>
      <ul className="flex flex-wrap w-full justify-start p-0 m-0">
        {numberGroups.map((group, index) => (
          <li
            key={index}
            className="p-5 w-full sm:w-6/12 md:w-3/12 text-center "
          >
            <div className="flex gap-4 text-xl relative flex-col items-center justify-center border border-slate-500  w-full h-full rounded">
            
              
              <div className="flex justify-between w-full">
                <span className="bg-zinc-400 text-white rounded p-1 text-xs ">
                 
                  Vòng Loại ................
                </span>
              </div>

              <div className="flex w-full justify-center items-center mb-2">
                {group.map((number, subIndex) => (
                  <span
                    key={subIndex}
                    className="border first:rounded-l last:rounded-r border-slate-500 p-2 block text-5xl font-bold"
                  >
                    {number}
                  </span>

                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
