import React from 'react'

const BasketItems = ({product}) => {
  return (
    <div className="showBill">
      <div className='productCart'>
        <img src={require(`../../data/products/${product.sku}_1.jpg`)} alt={product.title}/>
      </div>
      <div className="productTitle">
        <p>{product.title}</p>
        <p>{product.availableSizes[0]} ||{product.style}</p>
      </div>
      <div className="productPrice">
        <p> $ {product.price}</p>  
      </div>
    </div>
  )
}

export default BasketItems