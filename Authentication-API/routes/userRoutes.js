const express = require('express');
const router = express.Router();
const {registerUser , loginUser , getProfile, getAllUsers} = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
router.get(
    "/admin/all",
    authMiddleware,
    authorize("admin"),
    getAllUsers
);
module.exports = router;