const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();


// BODY PARSER
app.use(express.json());


connectDB();


// ROOT ROUTE
app.get("/", (req, res) => {
    res.json({
        message:
            "Support Ticket API is running"
    });
});


app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api/tickets",
    ticketRoutes
);
app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    () => {
        console.log(
            `Server running on port ${PORT}`
        );
    }
);