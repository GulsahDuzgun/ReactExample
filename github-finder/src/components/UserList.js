import React, { useContext } from 'react'
import Loading from './Loading'
import User from './User'
import { UsersContext } from '../context/usersContext'

const UserList = ()=> {
  const {loading, users} = useContext(UsersContext)
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