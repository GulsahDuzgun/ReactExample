const Note = ({item,dispatch}) => {
    const deleteNote=(id)=>{
        dispatch({
            type:"REMOVE_NOTE",
            id:id
        })
    }
    return(
        <li key={item.id} onClick={()=>deleteNote(item.id)}>
            <h1 className="title">{item.title}</h1>
            <p>{item.description}</p>          
        </li>
    )

}
export default Note;