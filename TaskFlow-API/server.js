const express = require('express');
require('dotenv').config();
const taskRoutes = require('./routes/taskRoute');
const connectDB = require('./config/db');
connectDB();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use('/api/tasks' , taskRoutes);
app.get('/' , (req , res) => {
    res.json({
        message : "Welcome to TaskFlow API"
    })
});

app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`);
});