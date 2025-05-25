const express = require('express');
const router = express.Router();
const Word = require('../models/Word');

// GET all words
router.get('/', async (req, res) => {
  const words = await Word.find();
  res.json(words);
});

// GET a specific word
router.get('/:query', async (req, res) => {
  const word = await Word.findOne({ word: req.params.query });
  if (!word) return res.status(404).json({ error: "Word not found" });
  res.json(word);
});

// POST a new word
router.post('/', async (req, res) => {
  const newWord = new Word(req.body);
  await newWord.save();
  res.status(201).json(newWord);
});

// PUT (edit)
router.put('/:id', async (req, res) => {
  const updated = await Word.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Word.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
