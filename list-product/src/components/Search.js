import React from "react";

const Search = (props) => {
    return (
        <div className="search container mt-5 mb-2">
          <input type="text" className='my-2' onChange={(e)=>props.onChange(e.target.value)} placeholder="Search..." /><br/>
          <input type="checkbox" onChange={(e)=>props.onChange(e.target.checked)}/> Only show products in stock
        </div>
    )
}

export default Search;