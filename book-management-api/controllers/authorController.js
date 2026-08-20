const Author = require("../models/authorModel");

// Create Author
const createAuthor = async (req, res) => {
    try {
        const { name, email, bio } = req.body;

        const author = await Author.create({
            name,
            email,
            bio
        });

        res.status(201).json({
            message: "Author created successfully",
            author
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create author",
            error: error.message
        });
    }
};

// Get All Authors
const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find().populate("author");

        res.status(200).json({
            count: authors.length,
            authors
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch authors",
            error: error.message
        });
    }
};

module.exports = {
    createAuthor,
    getAuthors
};