const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  isbn: String,
  genre: String,
  published: String,
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
