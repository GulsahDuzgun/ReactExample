import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  
  return (
    <div>
        <h1>Blog App</h1>
        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        <NavLink to="/blogs" activeClassName="active" exact>Blogs</NavLink>
        <NavLink to="/contact" activeClassName="active" exact>Contact</NavLink>
    </div>
  )
}

export default Header