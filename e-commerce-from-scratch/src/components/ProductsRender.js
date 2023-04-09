import React, { useEffect, useState } from 'react'
import  { Load_actions } from '../actions/productsActions'
import { Load_data } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';
import {FetchProducts} from './fetchData';

const ProductsRender = (props) => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const loadData = async () =>{
            const data = await FetchProducts()
            setProducts(data)
        }
        loadData()
        dispatch(Load_data({items:products}))

    })

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