import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='headerClass'>
        <ul className='list'>
            <li><Link to='/products'> All Products</Link></li>
            <li><Link to='/products/cart'>Go To Cart</Link></li>
            <li><Link to='/products/favorites'>Favorites Products</Link></li>
        </ul>
    </div>
  )
}

export default Header