import React, {useState } from "react";

import WordTable from "./WordTable";
import { calculateTextMetrics } from "../utils/helper";

const Word = () => {
  const [text, setText] = useState("");

  const { characterCount, wordCount } = calculateTextMetrics(text);

  return (
    <div className="flex  flex-col mt-3">
      <div className="flex gap-4 mb-4 items-center ">
        <input
          type="text"
          autoFocus
          value={text}
          placeholder="Start typing here..."
          className="h-10  px-3 w-10/12 py-2 border border-[#D2D6DB] rounded-sm focus:none outline-none"
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-[#731EE2] text-[#FFFFFF] px-3 py-2 font-sans font-normal rounded-sm  text-sm">
          Process Word
        </button>
      </div>
      <WordTable words={words} characters={characters} />
      <div className="w-full p-3 flex flex-col border border-[#D2D6DB] mt-4">
        {data.map((row, index) => {
          return (
            <div key={index} className="flex gap-4 w-full justify-start">
              <div className="font-sans font-medium min-w-[100px] w-1/12 text-base text-[#475467]">
                {row.name}
              </div>
              <div className="text-[#111927] font-sans font-medium text-base">
                {row.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Word;
