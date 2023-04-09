import React, { useEffect } from 'react'
import  { Load_actions } from '../actions/productsActions'
import { connect, useDispatch } from 'react-redux';

const ProductsRender = (props) => {
    const dispatch = useDispatch()
    //const productList = fetch("http://localhost:8080/").then(data=> data.json())

    console.log(props.state)

    useEffect(()=>{
        dispatch(Load_actions([1,2]))
    })
 
    return (
        <div>ProductsRender</div>
    )
}

const mapStateToProps = (state) => {
    return {
        state : {
            ...state.productsReducer
        }
    }
}

export default connect(mapStateToProps)(ProductsRender)