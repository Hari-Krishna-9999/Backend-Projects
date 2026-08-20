const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        bio: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true
    }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;