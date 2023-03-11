const Note = ({item,deleteNote}) => {
    return(
        <li key={item.id} onClick={()=>deleteNote(item.id)}>
            <h1 className="title">{item.title}</h1>
            <p>{item.description}</p>          
        </li>
    )

}
export default Note;