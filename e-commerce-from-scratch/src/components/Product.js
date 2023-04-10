import React from 'react'

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
                <b>10</b>
                <span>.90</span>
            </div>
            <div className="product-installment"> or 12 x $2.23</div>
            <div className="addBtn">Add to cart</div>
        
        </div>
    )
}

export default Product