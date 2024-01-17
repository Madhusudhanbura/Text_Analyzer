import React, { useState } from "react";
import Word from "./Word";
import Paragraph from "./Paragraph";

const WordParaComponent = () => {
  const [activeTab, setActiveTab] = useState<"word" | "paragraph">("word");

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col p-2 w-full ">
        <div className="flex max-md:flex-col tab max-w-fit ">
          <button
            onClick={() => setActiveTab("word")}
            className={`px-32 py-2 rounded-md ${
              activeTab === "word"
                ? " bg-white shadow-sm border border-red-100"
                : " "
            }`}
          >
            Word
          </button>
          <button
            onClick={() => setActiveTab("paragraph")}
            className={`px-32 py-2 rounded-md ${
              activeTab === "paragraph" ? " bg-white shadow-sm border" : " "
            }`}
          >
            Paragraph
          </button>
        </div>
      </div>
      {activeTab === "word" ? <Word /> : <Paragraph />}
    </div>
  );
};

export default WordParaComponent;
