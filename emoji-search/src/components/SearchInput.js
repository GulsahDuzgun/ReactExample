import React from 'react'

function SearchInput({search}) {
  return (
    <div>
      <input onChange={search}/>
    </div>
  )
}

export default SearchInput
