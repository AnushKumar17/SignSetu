import React from 'react';
import { useWords } from '../context/WordContext';

export default function WordCard({ word }) {
  const { deleteWord } = useWords();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border rounded shadow p-4 mb-4 gap-4">
      {/* Left: Image */}
      <div className="w-full md:w-1/4">
        {word.imageUrl && (
          <img
            src={word.imageUrl}
            alt={word.word}
            className="w-full h-32 object-cover rounded"
          />
        )}
      </div>

      {/* Center: Word & Definition */}
      <div className="w-full md:w-2/4 text-center md:text-left">
        <h2 className="text-xl font-semibold">{word.word}</h2>
        <p className="text-gray-700">{word.definition}</p>
      </div>

      {/* Right: Video */}
      <div className="w-full md:w-1/4">
        {word.videoUrl && (
          <video
            controls
            src={word.videoUrl}
            className="w-full h-32 object-cover rounded"
          />
        )}
      </div>


      <div className="w-full md:w-auto mt-2 md:mt-0 md:ml-4">
        <button
          onClick={() => deleteWord(word._id)}
          className="bg-red-500 hover:scale-105 hover:bg-red-300 text-white px-3 py-1 rounded w-full"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
