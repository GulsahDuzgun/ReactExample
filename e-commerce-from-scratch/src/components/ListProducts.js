import React, { useEffect, useState } from 'react'
import Product from './Product'
import { useParams } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { getCart } from '../reducers/cartReducer'
import { getFavorites } from '../reducers/favoriteProductsReducer'

const ListProducts = (props) => {
    const {pageName} = useParams()
    let [products, setProducts] = useState([])
    const dispatch = useDispatch()
    console.log( props.state)
    pageName === ":ShoppingCart" ? products = props.state.buyProductState.buyList : products = props.state.favoriteState.favoriteItems

    return (
        <div className='productsContainer'>
            { products.map(item => <Product key={item.id} product={item}/>) }
        </div>
    )
}

const matStateToProps = (state) => {
    return {
        state: {...state}
    }
}

export default connect(matStateToProps)(ListProducts)