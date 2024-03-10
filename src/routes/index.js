const { Router } = require("express");
const booksControllers = require("../controllers/booksControllers")

const router = Router()

router.get("/books", booksControllers.getBooks)
router.get("/books/title", booksControllers.getBookByTitle)
router.get("/books/:id", booksControllers.getBookById)
router.post("/create", booksControllers.createBook)

module.exports = router;