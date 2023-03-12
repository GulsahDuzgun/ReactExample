import { useEffect, useReducer } from "react"
import AddNote from "./AddNote"
import Navbar from './Navbar';
import NoteList from './NoteList';
import notesReducer from "../reduces/notesReducer";

const NoteApp = ()=>{
    //useReducer içerisine verilen ilk parametre kendi kullanacağı dosya iken ikincisi ise state içerisine gönderilecek başlangıç değeridir
    //dispatch ise birden fazla fonks. içinde bulunduran bir fonksiyondur, action yerine kullanılan bir metottur
    const [noteList,dispatch] = useReducer(notesReducer,[])
    const addItem =(title,description)=>{
        dispatch({
            type:"ADD_NOTE",
            id:(noteList.length)+1,
            title:title,
            description:description
        })
       // setNotes([...noteList ,{id:(noteList.length+1), title:title, description:description}])
    }
    useEffect(()=>{//mount işleminde sayfa görüntülenirken veriler çekileceği için localStroge.getItem ile  veriler çekilir varsa atama yapılır
        const data = JSON.parse(localStorage.getItem("noteItems"))
        if(data){
            dispatch({
                type:"POPULATE_NOTES",
                noteList:data
            })
        }
    },[]);

    useEffect(()=>{//İlgili değişkende herhangi bir değişiklik yapılırsa yeni hali localStorage içerisine set edilir
        localStorage.setItem("noteItems",JSON.stringify(noteList))
    },[noteList]);

    const deleteItem=(id)=>{
        //setNotes(noteList.filter(i=>i.id!==id))
        dispatch({
            type:"REMOVE_NOTE",
            id:id
        })

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