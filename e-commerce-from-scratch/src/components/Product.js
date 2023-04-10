import React, { useEffect } from 'react'
import getPriceParts from '../utils/getPrice'

const Product = ({product}) => {   
    return(
        <div className="product" key={product.id}>
            <div className="productHeader">
                <img src={require(`../../data/products/${product.sku}_1.jpg`)} alt={product.title} />
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
            <div className="addBtn">Add to cart</div>
        </div>
    )
}

export default Product