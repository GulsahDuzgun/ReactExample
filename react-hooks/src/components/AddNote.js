import { useContext, useState } from "react";
import {NotesContext} from "../contexts/notesContext";

const AddNote = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {noteList, dispatch} = useContext(NotesContext)

    const addNote = (e) => {
        e.preventDefault();
          dispatch({
            type:"ADD_NOTE",
            id:(noteList.length)+1,
            title:title,
            description:description
        })
        setTitle("")
        setDescription("")
    }

    return(
        <form onSubmit={ addNote }>
            <input type="text" value={title} placeholder="name" onChange={ (e)=>setTitle(e.target.value) } />
            <input type="text" value={description} placeholder="Description" onChange={ (e)=>{setDescription(e.target.value)} }/>
            <button className="btn" type="submit"> Add Note</button>
        </form>
    )
}

export default AddNote;