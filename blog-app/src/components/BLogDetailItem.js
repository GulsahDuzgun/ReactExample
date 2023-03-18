import React from 'react'

const BLogDetailItem = ({ id, title, description }) => {
  return (
    <div>
        <p> id:{ id }</p>
        <p> description:{ description }</p>
        <p> title:{ title }</p>
    </div>
  )
}

export default BLogDetailItem