const Book = require("../models/Book")

module.exports = {
    getBooks: async ()=>{
        const books = await Book.find();
        return books;
    },
    
    getBookById: async (id)=>{
        const book = await Book.findById(id);
        return book;
    },

    findBookByTitle: async (title)=>{
        const book = await Book.findOne({title});
        return book;
    },
    
    createBook: async (book)=>{
        const newBook = await Book.create(book)
        return newBook;

    },


}