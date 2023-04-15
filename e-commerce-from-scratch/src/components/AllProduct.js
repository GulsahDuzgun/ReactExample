import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'

import Product from "./Product"
import { useEffect } from 'react'
import { FetchProducts } from '../apiHelper/fetchData'
import { LoadData, setLoading } from '../reducers/productsReducer'

const AllProduct = (props) => {
    let [products, setProducts] = useState([])
    const dispatch = useDispatch()

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
            return <Product key={item.id} product={item} />
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