import React from "react";

interface WordTableProps {
  words: number;
  characters: number;
}

const WordTable = ({ characters, words }: WordTableProps) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3 border-2 border-slate-200">
              Characters
            </th>
            <th scope="col" className="px-6 py-3 border-2 border-slate-200">
              Words
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-grey-200 border-b">
            <td className="px-6 py-4">{characters}</td>
            <td className="px-6 py-4">{words}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;

