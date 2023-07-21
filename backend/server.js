// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connectDB");

const app = express();
dotenv.config();
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));


app.use("/notes",require("./routes/noteRoute"));

connectDB();


app.get("/",function(req,res){
    res.send("Hello");
});

app.listen(8080,function (){
    console.log("Server started on port 8080");
});