import React from 'react'

function SearchInput({search}) {
  return (
    <div>
      <input onChange={(e)=>search(e.target.value)}/>
    </div>
  )
}

export default SearchInput
