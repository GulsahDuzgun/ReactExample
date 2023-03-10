import React, { Component } from 'react'
import Loading from './Loading'
import User from './User'

export class UserList extends Component {
  render() {
    if(this.props.loading){
       return <Loading/>;
    }
    return (
      this.props.users.map((item, index)=>(
        <User userItem= {item} key={index}/>
      ))
    )
  }
}

export default UserList