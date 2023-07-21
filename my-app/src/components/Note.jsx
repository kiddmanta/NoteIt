import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    return <div className="note">
        <h1>{props.name}</h1>
        <p>{props.content}</p>
        <button onClick={()=>props.deleteN(props.id)}><DeleteIcon /></button>
    </div>
}

export default Note;