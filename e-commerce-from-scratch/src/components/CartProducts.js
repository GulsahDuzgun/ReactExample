import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const CartProducts = (props) => {
    // console.log(props.state)
    let [buyList, setBuyList] = useState([])

    useEffect(()=>{
      let tempArr = [...props.state.buyProductState.buyList]
      setBuyList(tempArr)
      //console.log(tempArr)
    },[])

    console.log(buyList)

  return (
    <div className='productsContainer'>
        {
            props.state.buyProductState.buyList.map( (item) => {
                return <Product key={item.id} product={item}/>
            }) 
        }
    </div>  
  )
}
const mapStateToProps = (state) => {
    return {
        state :{
            ...state
        }
    }
}

export default connect(mapStateToProps)(CartProducts);

