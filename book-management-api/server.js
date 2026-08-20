const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/api/authors", authorRoutes);
app.use("/api/books", bookRoutes);
// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Book Management API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});