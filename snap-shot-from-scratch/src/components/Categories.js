import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
      <>
      <button><Link to="search/birds">Birds</Link></button>
      <button><Link to="search/mountain">Mountain</Link></button>
      <button><Link to="search/beach">Beach</Link></button>
      <button><Link to="search/food">Food</Link></button>
     </> 
  )
}

export default Categories