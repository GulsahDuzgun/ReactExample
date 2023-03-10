import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container d-flex justif-content-between">
            <a href='#' className='navbar-brand'>
                <i className={this.props.icon}></i> {this.props.title}
            </a>
            <Search onSearch={this.props.onSearch} deleteUsers={this.props.delete} displayAlert={this.props.displayAlert}/>
        </div>       
      </nav>
    )
  }
}

Navbar.defaultProps={
    icon:"bi bi-github",
    title:"Github Finder"
}
Navbar.propTypes={
    icon: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default Navbar