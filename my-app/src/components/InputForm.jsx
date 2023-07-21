import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function InputForm(props){

    const [isExpanded,setIsExpanded] = useState(false);

    const [notesArray,setNotesArray] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setNotesArray(prevValue =>  {
            return {
                ...prevValue,
                [name] : value
            }
        })
        console.log(notesArray)
    }

    function handleClick(){
        setIsExpanded(prevValue =>{
            return !prevValue;
        })
    }
    
    function addI(event){
        props.addItem(notesArray);
        setNotesArray({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    return <div>
        <form className="create-note">
            {isExpanded && <input onChange={handleChange} value={notesArray.title} name="title" placeholder="Title" />}
            <textarea onClick={handleClick} onChange={handleChange} value={notesArray.content} name="content" placeholder="Take a note..." 
            rows={isExpanded ? "3" : "1"}
             />
            <Zoom in={isExpanded}>
            <Fab onClick={addI}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div>
}

export default InputForm; 