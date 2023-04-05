import { Outlet } from "react-router-dom";
import Header from "./Header";
import InputSection from "./InputSection"
import Categories from "./Categories";

const Introduction = () => {
    return (
        <div className="container">
            <Header/>
            <InputSection/>
            <Categories/>
            <div className="'photo-container'">
                <Outlet/>
            </div>
        </div>
    )
}

export default Introduction;