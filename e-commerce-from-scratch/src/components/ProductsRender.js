import React, { useEffect, useState } from 'react'
import  { Load_actions } from '../actions/productsActions'
import { Load_data } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';

const ProductsRender = (props) => {
    const productList = fetch("http://localhost:8080/").then(data=> data.json())
    const dispatch=useDispatch()
    const [products, setProducts] = useState({})

    console.log(productList)
    // useEffect(()=>{
    //     dispatch(Load_data({items:[3,4]}))
    // })
    const handleOnClick = ( ) => {
        dispatch(Load_data({items:[3,4]}))
    }
    return (
        <div onClick={handleOnClick}>ProductsRender</div>
    )
}

const mapStateToProps = (state) => {
    return {
        state : {
            ...state
        }
    }
}

export default connect(mapStateToProps)(ProductsRender)