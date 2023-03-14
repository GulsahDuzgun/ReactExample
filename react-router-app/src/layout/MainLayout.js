import { NavLink, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div className="main-layout">
            <header className="container">
                <h1>React Router</h1>
                <nav>
                    <NavLink to="Home">Home</NavLink>
                    <NavLink to="About">About</NavLink>
                    <NavLink to="Help">Help</NavLink>
                </nav>
            </header>
            <main className="container">
                <Outlet/>
            </main>
        </div>
    )
}