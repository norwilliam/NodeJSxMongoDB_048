const express = require("express");
const router = express.Router();

// Import Controller
const Books = require("../controllers/bookController");

// APIs Routing Config
router.post("/books", Books.addBook);
router.put("/books/:id", Books.updateBook);
router.delete("/books/:id", Books.deleteBook);
router.get("/books", Books.getAllBook);
router.get("/books/:genre", Books.getByBook);
//ป.ล.1 ใช้ localhost:3000/api/books/
//ป.ล.2 router ใช้ /api จาก Routing Config :: app.use("/api", bookRoute); ใน app.js 
//ป.ล.3 อันนี้บอกอาจารย์ครับ เผื่อสงสัยว่า /api มาจากไหนครับ

// Export router
module.exports = router;
