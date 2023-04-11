import React from 'react'
import { Outlet } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='headerClass'>
        <ul className='list'>
            <li><a href='List/:ShoppingCart'>Go To Cart</a></li>
            <li><a href='List/:Favorites'>Favorites Products</a></li>
        </ul>
    </div>
  )
}

export default Header