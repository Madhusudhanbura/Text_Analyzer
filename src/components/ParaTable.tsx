import React from 'react';

interface ParaTableProps {
  characters: number;
  words: number;
  sentences: number;
  paragraphs: number;
  spaces: number;
  punctuations: number;
}

const ParaTable = ({
  characters,
  words,
  sentences,
  paragraphs,
  spaces,
  punctuations,
}: ParaTableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="border-collapse overflow-x-auto bg-white text-left border  border-slate-100 w-full">
        <thead>
          <tr className="font-sans font-medium text-base ">
            <th className="border-2 border-slate-200 p-3 font-sans font-medium text-base text-[#475467] ">
              Characters
            </th>
            <th className="border-2 border-slate-200 p-3 font-sans font-medium text-base text-[#475467] ">
              Words
            </th>
            <th className="border-2 border-slate-200 p-3 font-sans font-medium text-base text-[#475467] ">
              Sentences
            </th>
            <th className="border-2 border-slate-200 p-3 font-sans font-medium text-base text-[#475467] ">
              Paragraphs
            </th>
            <th className="border-2 border-slate-200 p-3 font-sans font-medium text-base text-[#475467] ">
              Spaces
            </th>
            <th className="border-2 border-slate-200 p-3 font-sans font-medium text-base text-[#475467] ">
              Punctuations
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-slate-100 p-3">{characters}</td>
            <td className="border-2 border-slate-100 p-3">{words}</td>
            <td className="border-2 border-slate-100 p-3">{sentences}</td>
            <td className="border-2 border-slate-100 p-3">{paragraphs}</td>
            <td className="border-2 border-slate-100 p-3">{spaces}</td>
            <td className="border-2 border-slate-100 p-3">{punctuations}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ParaTable;
