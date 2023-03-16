import { NavLink, Outlet, useNavigation } from "react-router-dom"
import { Loading } from "../pages/Loading"

export const MainLayout = () => {

    const loadingRoutes = useNavigation()

    return (
        <div className="main-layout">
            <header className="container">
                <h1>React Router</h1>
                <nav>
                    <NavLink to="Home">Home</NavLink>
                    <NavLink to="About">About</NavLink>
                    <NavLink to="Help">Help</NavLink>
                    <NavLink to="Users">Users</NavLink>
                </nav>
            </header>
            <main className="container">
                { loadingRoutes.state === "loading" && <Loading/>}
                <Outlet/>
            </main>
        </div>
    )
}