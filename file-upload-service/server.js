const express = require("express");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/api/files", fileRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "File Upload Service is running"
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});