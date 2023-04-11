import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const AllProduct = (props) => {
    console.log(props)
  return (
    <div className='productsContainer'>
        {!props.state.productsReducer.isLoading &&
            props.state.productsReducer.items.map( (item) => {
            return  <Product key={item.id} product={item}/>
            }) 
        }
     </div>
  )
}

const mapStateToProps = (state) => {
    return {
        state : {
            ...state
        }
    }
}

export default connect(mapStateToProps)(AllProduct)