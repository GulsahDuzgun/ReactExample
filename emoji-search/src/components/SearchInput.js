import React from 'react'
import '../style/SearchInput.css'

function SearchInput({search}) {
  return (
    <div className='component-search-input'>
        <div>
            <input onChange={search}/>
        </div>
    </div>
  )
}

export default SearchInput
