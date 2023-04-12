import React, { useEffect, useState } from 'react'
import { LoadData, setLoading } from '../reducers/productsReducer';
import { connect, useDispatch } from 'react-redux';
import { FetchProducts } from '../apiHelper/fetchData';
import Product from "./Product"
import SizeSection from './SizeSection';
import {Header} from "../components/Header"
import { Outlet } from 'react-router-dom';
import { setFavoriList, setFovoriFromState } from '../reducers/favoriteProductsReducer'
import { addToCart, setCart } from '../reducers/cartReducer'

const ProductsRender = (props) => {
    const dispatch = useDispatch()
    let [products, setProducts] = useState([])
    let [favoriteArr, setFavoriArr] = useState([])
    const [buyList, setBuyList] = useState([])

    const handleFavoriteBtn = (favoriteProduct) => {   
        //console.log(favoriteProduct)
        dispatch(setFavoriList(favoriteProduct))
        setFavoriArr(favoriteArr ? [...favoriteArr, favoriteProduct] : [favoriteProduct])
        // console.log(props.state)
        //  console.log(favoriteArr)
    }

    const handleBuyBtnClick = (buyProduct) => {
        dispatch(addToCart(buyProduct))
    }

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
            <div className='sizeSection'>
                <SizeSection setProducts={handleFilter}/>
            </div>
            <div className='contains'>
                <Header/>
                <Outlet />
                <div className='productsContainer'>
                {!props.state.productsReducer.isLoading &&
                    products?.map( (item) => {
                     return <Product key={item.id} product={item} handleBuyBtnClick={handleBuyBtnClick} handleFavoriteBtn={handleFavoriteBtn}/>
                    }) 
                }
                </div>  
            </div>
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

export default connect(mapStateToProps)(ProductsRender)