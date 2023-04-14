import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { setFavoriList } from '../reducers/favoriteProductsReducer'
import { addToCart } from '../reducers/cartReducer'
import Product from "./Product"
import { useEffect } from 'react'
import { FetchProducts } from '../apiHelper/fetchData'
import { LoadData, setLoading } from '../reducers/productsReducer'

const AllProduct = (props) => {
    const dispatch = useDispatch()
    let [products, setProducts] = useState([])

    const handleFavoriteBtn = (favoriteProduct) => {   
        //console.log(favoriteProduct)
        dispatch(setFavoriList(favoriteProduct))
    }

    const handleBuyBtnClick = (buyProduct) => {
        dispatch(addToCart(buyProduct))
    }
   
    useEffect(()=>{
        const loadData = async () =>{
            const data = await FetchProducts()
            dispatch(LoadData({items:data}))
            dispatch(setLoading(false))
            setProducts(data)
        }
        loadData()
    },[])//just first render 

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

const mapStateToProps = (state) => {
    return {
        state : {
            ...state
        }
    }
}

export default connect(mapStateToProps)(AllProduct)