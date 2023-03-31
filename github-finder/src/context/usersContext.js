import React, { useReducer, useEffect } from "react";
import usersReducer from "../reducers/usersReducer";

export const UsersContext = React.createContext();

const UserContexProvider = (props) => {
    const [state, dispatch] = useReducer(usersReducer, { users:[], loading:false })
    //componentDidMount yüklenme aşamasıdır aslında bittiğinde virtual Dom -> DOM'a yüklenmiş olur
    useEffect(() => {
      setLoadingTrue()
      //istek atıldı->Spinner gösterilir
      setTimeout(() => {
        fetch("https://api.github.com/users").then(response => response.json())
        .then(data => {
          dispatch({
            type:"GET_USERS",
            users:data
          })
        })//data geldi spinner kaldırılır
          //console.log(this.state.users)
      }, 1000)
    }, [])
 
    const setLoadingTrue = () => {
      dispatch({
        type: "ON_LOADING",
        users: []
      })
    }

    const searchResult = (searchKey) => {
     setLoadingTrue()
      fetch(`https://api.github.com/search/users?q=${searchKey}`)
      .then(response => response.json())
      .then((data) => dispatch({
        type: "GET_USERS",
        users: data.items
      }))
    }

     const userDelete = () => {
      fetch('https://api.github.com/users')
      .then(response => response.json())
      .then(data => dispatch({
        type: "GET_USERS",
        users: data}))
      //console.log(this.state.users)
    }

    return (
        <UsersContext.Provider value={{ users: state.users, loading: state.loading, searchResult, userDelete }}>
            { props.children }
        </UsersContext.Provider>
    )
}

export default  UserContexProvider ;