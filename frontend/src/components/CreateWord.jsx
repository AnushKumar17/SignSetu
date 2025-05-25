import React, { useState } from 'react';
import { useWords } from '../context/WordContext';
import Spinner from './Spinner';

export default function AddWord() {
  const { addWord, loading } = useWords();
  const [form, setForm] = useState({
    word: '',
    definition: '',
    imageUrl: '',
    videoUrl: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord(form);
    setForm({ word: '', definition: '', imageUrl: '', videoUrl: '' });
  };

  return (
    <div className="w-[80%] mx-auto p-4">
      <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Add a Word</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Word"
          value={form.word}
          onChange={(e) => setForm({ ...form, word: e.target.value })}
        />
        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Definition"
          value={form.definition}
          onChange={(e) => setForm({ ...form, definition: e.target.value })}
        />
        
        <div className="flex flex-col md:flex-row gap-2 mb-2">
          <input
            className="border p-2 w-full rounded"
            placeholder="Image URL"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          />
          <input
            className="border p-2 w-full rounded"
            placeholder="Video URL"
            value={form.videoUrl}
            onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded  hover:bg-green-700 hover:scale-105 transition-colors duration-600"
        >
          {loading ? 'Adding...' : 'Add Word'}
        </button>
      </form>
    </div>
  );
}
