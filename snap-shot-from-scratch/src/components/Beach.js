import React from 'react'

const Beach = ({handleSearch}) => {
    const sethandleSearch = () => {
        handleSearch("beach")
    }

    return (
        <button onClick={sethandleSearch}>Beach</button>
    )
}

export default Beach