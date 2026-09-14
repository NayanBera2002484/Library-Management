const express = require("express");
const router = express.Router();

const Book = require("../schema/book-schema");

// Admin Only: Add book
router.post("/add", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json("Book added successfully");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// User/Admin: View/Search Books
router.get("/all", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

router.get("/search", async (req, res) => {
  const query = req.query.query;
  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { isbn: { $regex: query, $options: "i" } },
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err });
  }
});

router.delete('/deleteAllBooks', async (req, res) => {
  try {
    await Book.deleteMany({});
    res.status(200).send('All books deleted by admin.');
  } catch (err) {
    res.status(500).send('Error deleting books.');
  }
});

module.exports = router;