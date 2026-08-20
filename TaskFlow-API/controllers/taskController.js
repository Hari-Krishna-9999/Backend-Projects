const Task = require('../models/taskModel');

const createTask = async (req , res) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json({
            message : "Task Created Successfully",
            task
        });
    }catch(error){
        res.status(501).json({
            message : "Task Creation Failed",
            error : error.message
        });
    }
};


const getAllTasks = async (req , res) => {
    try{
        const tasks = await Task.find();
        res.status(200).json({
            message : "Tasks Fetched Successfully",
            tasks
        })
    }catch(error){
        res.status(500).json({
            message : "Error Fetching Tasks",
            error : error.message
        })
    }
};


const getTask = async(req , res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({
                message : "Task not found"
            })
        }
        res.status(200).json({
            message : "Task Fetched Successfully",
            task
        })
    }catch(error){
        res.status(500).json({
            message : "Failed to fetch the task",
            error : error.message
        })
    }
};

const updateTask = async (req , res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id , req.body);
        if(!task){
            return res.status(404).json({
                message : "Task not found"
            });
        }
        res.status(200).json({
            message : "Task Updated Successfully",
            task
        });
    }catch(error){
        res.status(500).json({
            message : "Failed to update the task",
            error : error.message
        })
    }
}

const deleteTask = async(req , res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).json({
                message : "Task not found"
            })
        }
        res.status(200).json({
            message : "Task Deleted Successfully",
            task
        })
    }catch(error){
        res.status(500).json({
            message : "Failed to delete the task",
            error : error.message
        })
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
}