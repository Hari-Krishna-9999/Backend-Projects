require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoute');
const userRoutes = require('./routes/userRoutes');
const mongoDB = require('./config/db');
mongoDB();
app.use(express.json());
app.use('/api/auth' , authRoutes);
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});