import { NavLink, Outlet } from "react-router-dom"

export const HelpLayout = () =>{
    return (
        <div className="help-layout">
            <h1>Help Layout</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque culpa eaque magni nihil, tempora laboriosam facilis quisquam eos fuga enim assumenda sapiente aliquam ducimus dignissimos ipsam laborum minus voluptatum.</p>
            <nav>
                <NavLink to="Contact">Contact</NavLink>
                <NavLink to="Faq">Faq</NavLink>
            </nav>    
                <Outlet/>
        </div>

    )
}