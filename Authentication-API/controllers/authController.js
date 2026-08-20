const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = async (req , res) => {
    try{
        const { name , email , password } = req.body;
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400).json({
                success : false,
                message : "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password , 10);
        const user = await User.create({
            name,
            email,
            password : hashedPassword,
            role : req.body.role || 'user'
        });
        res.status(201).json({
            success : true,
            message : "User registered successfully",
            "user" : {
                "name" : user.name,
                "email" : user.email
            }
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        });
    }
}


const loginUser = async(req  , res) => {
    try{
        const {email , password} = req.body;
        // check user in data base or not
        const user = await User.findOne({email});

        //if not return error message
        if(!user){
            return res.status(400).json({
                success : false,
                message : "Invalid email or password"
            });
        }

        //compare hashed password with user entered password by converting into hashed password
        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid){
            return res.status(400).json({
                success : false,
                message : "Invalid password or email"
            });
        }

        const token = jwt.sign(
            { 
                userId: user._id ,
                role: user.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        //if user exists and password is valid then return success message
        res.status(200).json({
            success : true,
            message : "User logged in successfully",
            token : token,
            "user" : {
                "name" : user.name,
                "email" : user.email,
            }
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        });
    }
}


const getProfile = async(req , res) => {
    const userId = req.user.userId;
    try{
        const user = await User.findById(userId).select('-password');
        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not found"
            });
        }
        res.status(200).json({
            success : true,
            user
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : err.message
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({
            success: true,
            users
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}
module.exports = { registerUser , loginUser , getProfile , getAllUsers };