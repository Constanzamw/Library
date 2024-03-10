const { Router } = require("express");
const booksControllers = require("../controllers/booksControllers")

const router = Router()

//books
router.get("/books", booksControllers.getBooks)
router.get("/books/title", booksControllers.getBookByTitle)
router.get("/books/author", booksControllers.getBookByAuthor)
router.delete("/books/:id", booksControllers.deleteBook)
router.put("/books/:id", booksControllers.updateBook);
router.get("/books/:id", booksControllers.getBookById)
router.post("/books", booksControllers.createBook)

//favorites
router.get("/books/favorites", booksControllers.getFavoriteBooks);
router.put("/books/favorite/:id", booksControllers.markBookAsFavorite);

module.exports = router;