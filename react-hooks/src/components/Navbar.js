import { useContext } from "react";
import notesContext from "../contexts/notesContext";
const Navbar = () =>{
    const { noteList } = useContext(notesContext)
    return(
        <div className="navbar">
            <h1>NoteApp</h1>
            <p>Toplam { noteList.length } adet not mevcut</p>
        </div>
    )

}
export default Navbar;