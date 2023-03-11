import Note from "./Note";
const NoteList =({noteList,deleteNote})=>{
    return noteList.length >0 ?
    (
        <div className="note-list">
            <ul>
                {noteList.map((item,index)=>{
                    return(
                        <Note key={index}  item={item} deleteNote={deleteNote} />
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