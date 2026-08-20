const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        description : {
            type : String,
            require : true
        },
        status : {
            type : String,
            enum : ["pending", "in-progress", "completed"],
            default : "pending"
        },
        priority : {
            type : String,
            enum : ["low", "medium", "high"],
            default : "medium"
        }
    },
    {
        timestamps : true
    }
);

const Task = mongoose.model('Task' , taskSchema);

module.exports = Task;