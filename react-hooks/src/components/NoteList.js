import Note from "./Note";
const NoteList =({noteList,deleteNote})=>{
    return(
        <ul>
           {
                noteList.map((item,index)=>{
                    return(
                        <Note key={index}  item={item} deleteNote={deleteNote} />
                        )
                    })
                }     
        </ul>
    )
}
export default NoteList;