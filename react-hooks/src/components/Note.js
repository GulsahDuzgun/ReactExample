import { useContext } from "react"
import {NotesContext} from "../contexts/notesContext"

const Note = ({item}) => {
    const {dispatch} = useContext(NotesContext)
    const deleteNote = (id) => {
        dispatch({
            type:"REMOVE_NOTE",
            id:id
        })
    }

    return(
        <li key={item.id} onClick={()=>deleteNote(item.id)}>
            <h1 className="title">{item.title}</h1>
            <p>{item.description}</p>          
        </li>
    )

}

export default Note;