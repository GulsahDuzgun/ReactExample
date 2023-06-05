import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { increaseCount, decreaseCount, setResultPrice, numberOfItems} from '../reducers/cartReducer'

const BasketItems = ({product}) => {
  const dispatch = useDispatch()

  const increaseItemCount = (product) => {
    dispatch(increaseCount(product.id))
    dispatch(setResultPrice(product.price))
  }

  const decreaseItemCount = (product) => {
    dispatch(decreaseCount(product.id))
    dispatch(setResultPrice(-product.price))
  }

  return (
    <div className="showBill">
      <div className='productCart'>
        <img src={require(`../../data/products/${product.sku}_1.jpg`)} alt={product.title}/>
      </div>
      <div className="productTitle">
        <p>{product.title}</p>
        <p>{product.availableSizes[0]} || {product.style}</p>
        <p>{product.quantity}</p>

      </div>
      <div className="productPrice">
        <p> $ {product.price}</p>  
        <div className='btnItemCount'>
          <button onClick={() => decreaseItemCount(product)}>-</button>
          <button onClick={() => increaseItemCount(product)}>+</button>
        </div>
      </div>
    </div>
  )
}

const mapToState = (state) =>  {
  return {
    state : {
      ...state
    }
  }
}

export default connect(mapToState)(BasketItems)