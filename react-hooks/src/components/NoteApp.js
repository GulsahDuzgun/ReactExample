import { useEffect, useState } from "react"
import AddNote from "./AddNote"
import Navbar from './Navbar';
import NoteList from './NoteList';

const NoteApp = ()=>{
    const [noteList,setNotes] = useState([])
    const addItem =(title,description)=>{
        setNotes([...noteList ,{id:(noteList.length+1), title:title, description:description}])
    }
    useEffect(()=>{//mount işleminde sayfa görüntülenirken veriler çekileceği için localStroge.getItem ile  veriler çekilir varsa atama yapılır
        const data = JSON.parse(localStorage.getItem("noteItems"))
        if(data){
            setNotes(data)
        }
    },[]);

    useEffect(()=>{//İlgili değişkende herhangi bir değişiklik yapılırsa yeni hali localStorage içerisine set edilir
        localStorage.setItem("noteItems",JSON.stringify(noteList))
    },[noteList]);

    const deleteItem=(id)=>{
        setNotes(noteList.filter(i=>i.id!==id))
    }
    return(
        <div className="container">
            <Navbar notes ={noteList.length}/>
            <NoteList noteList={noteList} deleteNote={deleteItem}/>
            <AddNote addNoteItem={addItem}/>
        </div>
    )
}
export default NoteApp;