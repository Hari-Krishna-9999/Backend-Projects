const express = require("express");
const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);

router.get("/", getAllTasks);

router.get("/:id", getTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

module.exports = router;