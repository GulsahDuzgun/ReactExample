import React, { useEffect, useState } from 'react'
import  { Load_actions } from '../actions/productsActions'
import { Load_data, Loading } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';
import {FetchProducts} from './fetchData';

const ProductsRender = (props) => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
        const loadData = async () =>{
            const data = await FetchProducts()
            setProducts(data)
        dispatch(Load_data({items:data}))

        }
        loadData()


    },[])

    return (
        <div></div>
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