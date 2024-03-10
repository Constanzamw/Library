const booksService = require("../services/booksService")

module.exports = {
    getBooks: async (req,res)=>{
        const books = await booksService.getBooks()
        res.status(200).json(books)
    },

    getBookById: async(req,res)=>{
        const {id} = req.params;
        const book = await booksService.getBookById(id)
        res.status(200).json(book)
    },

    getBookByTitle: async(req,res) => { 
        const {title} = req.body;
        const book = await booksService.findBookByTitle(title);
        res.status(200).json(book)
    },

    createBook: async(req,res)=>{
        const {title,author,year,genre} = req.body;
        const newBook = await booksService.createBook({title,author,year,genre});
        res.status(200).json(newBook);
       }
}