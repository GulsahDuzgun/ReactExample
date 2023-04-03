import Header from "./Header";
import InputSection from "./InputSection"

const Introduction = ({handleSearch}) => {
    return (
        <>
            <Header/>
            <InputSection handleText={handleSearch}/>
        </>
    )
}

export default Introduction;