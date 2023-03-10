import React, { Component } from 'react'
import User from './User'

export class UserList extends Component {
  render() {
    return (
      this.props.users.map((item, index)=>(
        <User userItem= {item} key={index}/>
      ))
    )
  }
}

export default UserList