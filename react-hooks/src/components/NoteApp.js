import { useContext, useEffect, useReducer } from "react"
import AddNote from "./AddNote"
import Navbar from './Navbar';
import NoteList from './NoteList';
import notesReducer from "../reduces/notesReducer";
import NotesContext from "../contexts/notesContext";

const NoteApp = ()=>{
    //useReducer içerisine verilen ilk parametre kendi kullanacağı dosya iken ikincisi ise state içerisine gönderilecek başlangıç değeridir
    //dispatch ise birden fazla fonks. içinde bulunduran bir fonksiyondur, action yerine kullanılan bir metottur
    
    const [noteList,dispatch] = useReducer(notesReducer,[])    
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

    return(
        <NotesContext.Provider value={{noteList,dispatch}}>
            <div className="container">
                <Navbar />
                <NoteList />
                <AddNote/>
            </div>
        </NotesContext.Provider>
        
    )
}
export default NoteApp;