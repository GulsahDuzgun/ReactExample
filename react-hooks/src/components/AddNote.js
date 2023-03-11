import { useState } from "react";
const AddNote = ({addNoteItem})=>{
    const [title, setTitle] = useState('')
    const addNote=(e)=>{
        e.preventDefault();
        addNoteItem(title)
        setTitle("")
    }
    return(
        <form onSubmit={addNote}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <button className="btn" type="submit">Note Ekle</button>
        </form>
    )

}
export default AddNote;