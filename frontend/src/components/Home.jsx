import React, { useState } from 'react';
import { useWords } from '../context/WordContext';
import Card from './Card';
import Spinner from './Spinner';

export default function Home() {
  const { words, loading } = useWords();
  const [query, setQuery] = useState('');

  const filtered = words.filter((w) =>
    w.word.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className=" p-4 ">
    <h2 className="text-4xl font-bold mb-4 text-center text-blue-600">Our Dictionary</h2>
      <input
        className="border p-2 w-full mb-4 "
        placeholder="Search a word..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <Spinner />
      ) : (
        filtered.map((word) => <Card key={word._id} word={word} />)
      )}
    </div>
  );
}
