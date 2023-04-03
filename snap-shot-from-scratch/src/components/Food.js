import React from 'react'

const Food = ({handleSearch}) => {
    const sethandleSearch = () => {
        handleSearch("food")
    }

    return (
        <button onClick={sethandleSearch}>Food</button>
    )
}

export default Food;