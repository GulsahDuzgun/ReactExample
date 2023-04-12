import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect, useDispatch } from 'react-redux'
import { setFavoriList } from '../reducers/favoriteProductsReducer'
import { addToCart } from '../reducers/cartReducer'

const FilterProduct = (props) => {
    const dispatch = useDispatch()
    let [products, setProducts] = useState([])
    
    useEffect(()=>{
        setProducts([...props.state.productsReducer.filterList])
    },)

    const handleFavoriteBtn = (favoriteProduct) => {   
        //console.log(favoriteProduct)
        dispatch(setFavoriList(favoriteProduct))
    }

    const handleBuyBtnClick = (buyProduct) => {
        dispatch(addToCart(buyProduct))
    }
    return (
        <div className='productsContainer'>
        {!props.state.productsReducer.isLoading &&
            products?.map( (item) => {
            return <Product key={item.id} product={item} handleBuyBtnClick={handleBuyBtnClick} handleFavoriteBtn={handleFavoriteBtn}/>
            }) 
        }
        </div>  
    )
}

const mapstateToProps = (state) => {
    return {
      state : {
        ...state
         }
    } 
  }
  
  export default connect(mapstateToProps)(FilterProduct)