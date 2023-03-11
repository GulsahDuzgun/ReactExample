import { useEffect, useState } from "react"
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
    useEffect(()=>{//mount işleminde sayfa görüntülenirken veriler çekileceği için localStroge.getItem ile  veriler çekilir varsa atama yapılır
        const data = JSON.parse(localStorage.getItem("noteItems"))
        if(data){
            setNotes(data)
        }
    },[]);

    useEffect(()=>{//İlgili değişkende herhangi bir değişiklik yapılırsa yeni hali localStorage içerisine set edilir
        localStorage.setItem("noteItems",JSON.stringify(noteList))
    },[noteList]);

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