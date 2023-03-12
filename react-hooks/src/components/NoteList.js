import Note from "./Note";
const NoteList =({noteList,dispatch})=>{
    return noteList.length >0 ?
    (
        <div className="note-list">
            <ul>
                {noteList.map((item,index)=>{
                    return(
                        <Note key={index}  item={item} dispatch={dispatch} />
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