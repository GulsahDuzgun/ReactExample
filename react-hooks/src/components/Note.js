const Note = ({item,deleteNote}) => {
    return(
        <li key={item.id} onClick={()=>deleteNote(item.id)}>{item.title}</li>
    )

}
export default Note;