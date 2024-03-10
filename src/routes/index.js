const { Router } = require("express");
const booksControllers = require("../controllers/booksControllers")

const router = Router()

router.get("/books", booksControllers.getBooks)
router.get("/books/title", booksControllers.getBookByTitle)
router.delete("/books/:id", booksControllers.deleteBook)
router.put("/books/:id", booksControllers.updateBook);
router.get("/books/:id", booksControllers.getBookById)
router.post("/books", booksControllers.createBook)

module.exports = router;