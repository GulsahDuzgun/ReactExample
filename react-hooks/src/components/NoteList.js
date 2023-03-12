import Note from "./Note";
import notesContext from "../contexts/notesContext";
import { useContext } from "react";
const NoteList =()=>{
    const {noteList} = useContext(notesContext)
    return noteList.length > 0 ?
    (
        <div className="note-list">
            <ul>
                {noteList.map((item,index)=>{
                    return(
                        <Note key={index}  item={item}  />
                        )
                    })
                }     
            </ul>
        </div>   
    )
    :
    (
        <div className="empty">Henüz not eklemediniz</div>
    )
}
export default NoteList;