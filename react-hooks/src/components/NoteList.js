import { useState } from "react"
import AddNote from "./AddNote"

const NoteList = ()=>{
    const [noteList,setNotes] = useState([
        {id:1, title:"Node 1"},
        {id:2, title:"Node 2"},
        {id:3, title:"Node 3"}
    ])
    const addItem =(title)=>{
        setNotes([...noteList ,{id:(noteList.length+1), title:title}])
    }
    return(
        <div>
            <ul>
                {
                noteList.map((item, index)=>{
                    return(
                        <li key={index}>{item.title}</li>
                        )
                    })
                }
            </ul>
            <AddNote addNoteItem={addItem}/>
        </div>
    )
}
export default NoteList;