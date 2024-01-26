import React, { useState } from "react";
import ParaTable from "./ParaTable";
import { analyzeTextMetrics } from "../utils/helper";

const Paragraph = () => {
  const [para, setPara] = useState("");

  const { sentenceCount,
    characterCount,
    wordCount,
    spaceCount,
    punctuationCount,
    paragraphCount, } = analyzeTextMetrics(para);

  return (
    <div className="flex w-full flex-col mt-3">
      <textarea
        autoFocus
        rows={10}
        cols={10}
        className=" px-3 mb-4 py-2 rounded-sm focus:none outline-none"
        placeholder="Type of copy/paste your content here..."
        value={para}
        onChange={(e) => setPara(e.target.value)}
      />
      <ParaTable
        key={1}
        paragraphs={paragraphCount}
        sentences={sentenceCount}
        words={wordCount}
        characters={characterCount}
        spaces={spaceCount}
        punctuations={punctuationCount}
      />
    </div>
  );
};

export default Paragraph;
