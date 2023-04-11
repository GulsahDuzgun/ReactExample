import React, { useEffect, useState } from 'react'
import { filterSize, setFilterList } from '../reducers/productsReducer'
import { connect, useDispatch } from 'react-redux'

const SizeSection = (props) => {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(false)

  const handleClick = (size) => {
    dispatch(filterSize(size))
    setFlag(!flag)
  }

  useEffect(() => {
    props.setProducts(props.state.filterList)
  },[flag])
  
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
const mapstateToProps = (state) => {
  return {
    state : {
      ...state.productsReducer }
  } 
}
export default connect(mapstateToProps)(SizeSection)
