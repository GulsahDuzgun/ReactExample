import React, { useEffect, useState } from 'react'
import { LoadData, setLoading } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';
import { FetchProducts } from '../apiHelper/fetchData';
import Product from "./Product"
import SizeSection from './SizeSection';

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

    const handleFilter = (arr) => {
        setProducts(arr)
    }
   
    return (
        <div className='App'>
            <div className='sizeSection'><SizeSection setProducts={handleFilter}/></div>
            <div className='productsContainer'>
            {!props.state.isLoading &&
                products?.map( (item) => {
                return  <Product key={item.id} product={item}/>
                }) 
            }
            </div>
        </div>   
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