import { useState } from "react";
const AddNote = ({addNoteItem})=>{
    const [title, setTitle] = useState('')
    const [description, setDescription]=useState('')
    const addNote=(e)=>{
        e.preventDefault();
        addNoteItem(title,description)
        setTitle("")
        setDescription("")
    }
    return(
        <form onSubmit={addNote}>
            <input type="text" value={title} placeholder="name" onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" value={description} placeholder="Description" onChange={(e)=>{setDescription(e.target.value)}}/>
            <button className="btn" type="submit">Note Ekle</button>
        </form>
    )

}
export default AddNote;