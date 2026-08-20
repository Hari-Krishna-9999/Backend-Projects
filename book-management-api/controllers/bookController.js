const Book = require("../models/bookModel");

// Create Book
const createBook = async (req, res) => {
    try {
        const {
            title,
            genre,
            publishedYear,
            rating,
            author
        } = req.body;

        const book = await Book.create({
            title,
            genre,
            publishedYear,
            rating,
            author
        });

        res.status(201).json({
            message: "Book created successfully",
            book
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create book",
            error: error.message
        });
    }
};


const getBooks = async (req, res) => {
    try {
        const { 
            genre,
            publishedYear,
            rating,
            author,
            minRating,
            maxRating,
            minYear,
            maxYear,
            search,
            sort,
            page = 1,
            limit = 10
        } = req.query;
        const filter = {};
        if (genre) {
            filter.genre = genre;
        }

        if (publishedYear) {
            filter.publishedYear = Number(publishedYear);
        }

        if (rating) {
            filter.rating = Number(rating);
        }

        if (author) {
            filter.author = author;
        }

        if(minRating || maxRating) {
            filter.rating = {};
            if(minRating) {
                filter.rating.$gte = Number(minRating);
            }
            if(maxRating) {
                filter.rating.$lte = Number(maxRating);
            }
        }

        if(minYear || maxYear) {
            filter.publishedYear = {};
            if(minYear) {
                filter.publishedYear.$gte = Number(minYear);
            }
            if(maxYear) {
                filter.publishedYear.$lte = Number(maxYear);
            }
        }

        if(search){
            filter.title = {
                $regex : search,
                $options: "i"
            }
        }
        let skip = (page - 1) * limit;
        let query = Book.find(filter)
                        .populate("author")
                        .skip(skip)
                        .limit(Number(limit));
        if(sort) {
            query = query.sort(sort);
        }
        const books = await query;
        
        
        res.status(200).json({
            count: books.length,
            page: Number(page),
            limit: Number(limit),
            books
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch books",
            error: error.message
        });
    }
};


const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
            .populate("author");

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch book",
            error: error.message
        });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        ).populate("author");

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book updated successfully",
            book
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update book",
            error: error.message
        });
    }
};


const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.status(200).json({
            message: "Book deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete book",
            error: error.message
        });
    }
};


module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
};