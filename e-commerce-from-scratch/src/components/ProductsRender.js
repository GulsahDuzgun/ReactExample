import React, { useEffect, useState } from 'react'
import { LoadData, setLoading } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';
import { FetchProducts } from '../apiHelper/fetchData';
import Product from "./Product"

const ProductsRender = (props) => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const loadData = async () =>{
            const data = await FetchProducts()
            setProducts(data)
            dispatch(LoadData({items:data}))
            dispatch(setLoading(false))
        }
        loadData()
    },[])//just first render 

    return (
        !props.state.isLoading &&
            products.map( (item) => {
                <Product key={item.id} product={item}/>
            }) 
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