import WordParaComponent from "./components/WordParaComponent";
import "./index.css";
import React from "react";

function App() {
  return (
    <div className="flex flex-col p-4 h-full w-full">
      <div>
        <h1 className="font-medium text-5xl text-[#344054] max-md:text-center max-md:mt-5 font-inter">
          Text Analyzer
        </h1>
        <p className="mt-4 mb-6 text-[#475467] max-md:text-center max-md leading-snug md:text-4xl font-normal font-sans">
          Text Analyzer is a simple free online tool for SEO web content
          analysis that helps you find most frequent phrases and words, number
          of characters, words, sentences and paragraphs, and estimated read and
          speak time of your content.
        </p>
        <WordParaComponent />
      </div>
    </div>
  );
}

export default App;
