import React from 'react'
import Birds from './Bird'
import Mountain from './Mountain'
import Food from './Food'
import Beach from './Beach'

const Categories = ({handleSearch}) => {
  return (
    <div>
        <Birds handleSearch={handleSearch}/>
        <Mountain handleSearch={handleSearch}/>
        <Food handleSearch={handleSearch}></Food>
        <Beach handleSearch={handleSearch}/>
    </div>
  )
}

export default Categories