import React from 'react'

const Mountain = ({handleSearch}) => {
    const sethandleSearch = () => {
        handleSearch("mountain")
    }

    return (
        <button onClick={sethandleSearch}>Mountain</button>
    )
}

export default Mountain