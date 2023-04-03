import React from "react";

function Birds ({handleSearch}){
    const handleSearchSet = () => {
        handleSearch("birds")
    }

    return(
        <button onClick={handleSearchSet}>Birds</button>
    )
}

export default Birds;