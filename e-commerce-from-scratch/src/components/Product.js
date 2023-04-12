import React, { useEffect } from 'react'
import getPriceParts from '../utils/getPrice'
import { connect, useDispatch } from 'react-redux'
import { setFavoriList } from '../reducers/favoriteProductsReducer'
import { addToCart, setCart } from '../reducers/cartReducer'
import { useState } from 'react'

const Product = ({product, ...props}) => {   
    const dispatch =useDispatch()
    const [favoriteArr, setFavoriArr] = useState([])
    const [buyList, setBuyList] = useState([])

    const handleFavoriteBtn = (favoriteProduct) => {   
        dispatch(setFavoriList(favoriteProduct))
        setFavoriArr(props.state.favoriteState.favoriItems)
        console.log(props.state)
        console.log(favoriteArr)
    }

    const handleBuyBtnClick = (buyProduct) => {
        dispatch(addToCart(buyProduct))
        setBuyList([...props.state.buyProductState.buyList, buyProduct])
        console.log(buyList)
    }

    useEffect(()=>{
        dispatch(setCart(buyList))
    },[])

    return(
        <div className="product" key={product.id}>
            <div className="productHeader">
                <div className="product-picture">
                    <button className='favoriteBtn' onClick={() => handleFavoriteBtn(product)}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                    </button>
                    <img src={require(`../../data/products/${product.sku}_1.jpg`)} alt={product.title}/>
                </div>
                <div className='nameContainer'>
                    <p className='productName'>{product.title}</p>
                </div>
                 <span className='lineContainer'><hr className='straightLine'/></span>
            </div>
            <div className="product-price">
                <small>$</small>  
                <b>{getPriceParts(product.price).intPart}</b>
                <span>,{getPriceParts(product.price).floatPart}</span>
            </div>
            { product.installments !== 0 &&
                <div className="product-installment"> or {product.installments} x {(product.price / product.installments).toFixed(2)}</div>
            }
            <div className="addBtn" onClick={() => handleBuyBtnClick(product)}>Add to cart</div>
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

export default connect(mapStateToProps)(Product)