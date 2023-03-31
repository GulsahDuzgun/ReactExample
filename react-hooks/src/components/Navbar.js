import { useContext } from "react";
import { NotesContext } from "../contexts/notesContext";

const Navbar = () => {
    const { noteList } = useContext(NotesContext)

    return(
        <div className="navbar">
            <h1>NoteApp</h1>
            <p>Toplam { noteList.length } adet not mevcut</p>
        </div>
    )
}

export default Navbar;