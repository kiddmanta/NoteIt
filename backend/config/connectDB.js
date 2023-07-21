const mongoose = require("mongoose");

const connectDB = async ()=>{
    
    try{
        console.log("connecting to MongoDB")
        await mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true});
        console.log(`Server Running on ${mongoose.connection.host}`)
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;