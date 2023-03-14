import { Outlet } from "react-router-dom"
export const UsersLayout = () => {
    return (
        <div className="help-layout">
        <h1>Users</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque culpa eaque magni nihil, tempora laboriosam facilis quisquam eos fuga enim assumenda sapiente aliquam ducimus dignissimos ipsam laborum minus voluptatum.</p>    
            <Outlet/>
        </div>
    )
}