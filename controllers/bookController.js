// Import Model
const Books = require("../models/books");

// Function add and export
exports.addBook = async (req, res) => {
  const { title, author, published_year, genre, available } = req.body;
  const book = new Books({ title, author, published_year, genre, available });
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function update and export
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    const update = req.body;
    Object.assign(book, update);
    const updateBook = await book.save();
    res.json(updateBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Function delete and export
exports.deleteBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "book not found" });
    }
    res.status(200).json({ message: "Book deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function get all data and export
exports.getAllBook = async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Function get data by genre and export
exports.getByBook = async (req, res) => {
  try {
    const { genre } = req.params;
    const book = await Books.findOne({ genre: genre });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
