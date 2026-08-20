const mongoose = require('mongoose');
const mongoDB = async(req , res) => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb Database Connected Successfully");
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = mongoDB;