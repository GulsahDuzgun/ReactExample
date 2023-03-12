import React from "react";
import { useEffect,useReducer } from "react";
import notesReducer from '../reduces/notesReducer'


export const NotesContext = React.createContext();

const NodesContextProvider = (props)=>{
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
            {props.children}
        </NotesContext.Provider>
    )
}

export default NodesContextProvider;