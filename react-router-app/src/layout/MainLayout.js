import { NavLink, Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div className="main-layout">
            <header>
                <nav>
                    <NavLink to="Home">Home</NavLink>
                    <NavLink to="About">About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}