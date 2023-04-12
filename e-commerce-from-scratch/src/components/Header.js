import React from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom'

export const Header = (props) => {
  console.log(props.state)
  return (
    <div className='headerClass'>
        <ul className='list'>
            <li><a href='/List/:ShoppingCart'>Go To Cart</a></li>
            <li><a href='/List/:Favorites'>Favorites Products</a></li>
        </ul>
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

export default connect(mapStateToProps)(Header)