const NoteModel = require("../model/noteModel");

const deleteNote = async(req,res)=>{
    try{
        await NoteModel.findOneAndDelete({_id:req.body.NoteID});
        res.status(201).send("Deleted Succesfully")
    }
    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

const addNote = async(req,res)=>{
    try{
        const newNote = new NoteModel(req.body);
        await newNote.save();
        res.status(201).json({
            message:"Added Successfully",
            success : true
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message : err,
            success : false
        })
    }
}

const getNotes = async(req,res)=>{
    try{
        const notes = await NoteModel.find({});
        res.status(201).json(notes)
    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports = {getNotes,addNote,deleteNote};