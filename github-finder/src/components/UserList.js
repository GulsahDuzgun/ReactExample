import React from 'react'
import Loading from './Loading'
import User from './User'

const UserList = ({loading, users})=> {
    if(loading){
       return <Loading/>;
    }
    return (
     users.map((item, index)=>(
        <User userItem= {item} key={index}/>
      ))
    )
  }

export default UserList