import React, { useState } from 'react'
import { filterSize } from '../reducers/productsReducer'
import { useDispatch } from 'react-redux'

const SizeSection = (props) => {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(true)

  const handleClick = (size) => {
    dispatch(filterSize(size))
    props.setFixSize(flag)
    setFlag(!flag)
  }

  return (
    <div className="sizeFilterSection">
        <h3>Sizes:</h3>
        <div className="sizeContainer">
          <div onClick={() => handleClick ("S")}>XS</div>
          <div onClick={() => handleClick ("S")}>S</div>
          <div onClick={() => handleClick ("G")}>M</div>
          <div onClick={() => handleClick ("G")}>ML</div>
          <div onClick={() => handleClick ("GG")}>L</div>
          <div onClick={() => handleClick ("GG")}>XL</div>
          <div onClick={() => handleClick ("GGG")}>XXL</div>
        </div>
    </div>
  )
}

export default SizeSection;
