import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WordContext = createContext();
export const useWords = () => useContext(WordContext);

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWords = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/words');
      setWords(res.data);
    } catch (error) {
      console.error('Error fetching words:', error);
    }
    setLoading(false);
  };

  const addWord = async (word) => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/words', word);
      setWords((prev) => [...prev, res.data]);
    } catch (error) {
      console.error('Error adding word:', error);
    }
    setLoading(false);
  };

  const editWord = async (id, updated) => {
    setLoading(true);
    try {
      const res = await axios.put(`http://localhost:5000/words/${id}`, updated);
      setWords((prev) => prev.map((w) => (w._id === id ? res.data : w)));
    } catch (error) {
      console.error('Error editing word:', error);
    }
    setLoading(false);
  };

  const deleteWord = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/words/${id}`);
      setWords((prev) => prev.filter((w) => w._id !== id));
    } catch (error) {
      console.error('Error deleting word:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <WordContext.Provider value={{ words, addWord, editWord, deleteWord, loading }}>
      {children}
    </WordContext.Provider>
  );
};
