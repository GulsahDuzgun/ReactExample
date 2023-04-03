import React from 'react'

const Image = ({title, url}) => {
  return (
    <li>
        <img src={url} alt={title} />
    </li>
  )
}

export default Image