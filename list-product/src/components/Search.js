import React from "react";

const Search = (props) => {
    return (
        <div className="search container mt-5 mb-2">
          <input type="text" className='my-2' onChange={props.onChange} placeholder="Search..." /><br/>
          <input type="checkbox" onChange={props.getCheck}/> Only show products in stock
        </div>
    )
}

export default Search;