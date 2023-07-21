import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
import InputForm from "./InputForm";
import axios from 'axios';

function App(){

    const [notes,setNotes] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
          try {
            const response = await axios.get("http://localhost:8080/notes/get-notes");
            setNotes(response.data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchTransactions();
    }, [notes]);

    const deleteNote= async(noteID)=>{
        try{
            await axios.post('http://localhost:8080/notes/delete-notes',{NoteID:noteID});
          }
          catch(err){
            console.log(err);
          }
    }

    const addNote = async(note)=>{
        try {
            await axios.post("http://localhost:8080/notes/add-notes",note);
            console.log(note);
            
        } catch (err) {
            console.log(err);
        }
    }

    return (<div>
        <Header />
        <InputForm 
            addItem={addNote}
        />
        {notes.map((n) => (
            <Note 
                key={n._id}
                id={n._id}
                name={n.title}
                content={n.content}
                deleteN={deleteNote}
            />
        ))}
        <Footer />
    </div>);
}

export default App;
