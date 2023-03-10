import React, { Component } from 'react'
import User from './User'

export class UserList extends Component {
    constructor(props){
        super(props)
        this.state={
            userList:[
                {
                    id:"65841330",
                    name:"Gülşah Düzgün",
                    username:"GulsahDuzgun",
                    avatar_url:"https://avatars.githubusercontent.com/u/65841330?v=4",
                    github_url:"https://api.github.com/GulsahDuzgun",
                    website:"#",
                    followers:"1"
                },
                {
                    id:"65841330",
                    name:"Gülşah Düzgün",
                    username:"GulsahDuzgun",
                    avatar_url:"https://avatars.githubusercontent.com/u/65841330?v=4",
                    github_url:"https://api.github.com/GulsahDuzgun",
                    website:"#",
                    followers:"2"
                }
            ]
        }
    }
  render() {
    return (
      this.state.userList.map((item, index)=>(
        <User userItem= {item} key={index}/>
      ))
    )
  }
}

export default UserList