const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        genre: {
            type: String,
            required: true,
            trim: true
        },

        publishedYear: {
            type: Number,
            required: true
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        },

        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;