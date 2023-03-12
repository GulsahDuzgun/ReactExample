import React, { useEffect, useState, } from 'react';
import Navbar from './components/Navbar';
import UserList from'./components/UserList';
import Alert from './components/Alert';
//http isteğini component oluşmadan hemen önce atmamız için life-cycle hooks yapısına ihtiyacımız var . Bunun için class yapısına dönüyoruz
const App = () => {
    const [loading,setLoading] = useState(false) 
    const [users, setUsers] = useState([])
    const [error, setError] = useState({})
  //componentDidMount yüklenme aşamasıdır aslında bittiğinde virtual Dom -> DOM'a yüklenmiş olur
  useEffect(()=>{
    setLoading(true) //istek atıldı->Spinner gösterilir
    setTimeout(()=>{
      fetch("https://api.github.com/users").then(response=>response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })//data geldi spinner kaldırılır
        //console.log(this.state.users)
    },1000)
  },[])

  const displayAlert=(msg,color)=>{
    setError({
      message:msg,
      color:color
    })

    setTimeout(()=>{
      setError(null)
      userDelete()
    },1000)

  }
  const searchResult=(searchKey)=>{
    fetch(`https://api.github.com/search/users?q=${searchKey}`)
    .then(response =>response.json())
    .then((data)=>setUsers(data.items))
  }
   const userDelete=()=>{
    fetch('https://api.github.com/users')
    .then(response=> response.json())
    .then(data => setUsers(data))
    //console.log(this.state.users)
  }
    return (
      <div>
        <Navbar title="Github Finder" onSearch={searchResult} delete={userDelete} displayAlert={displayAlert} />
        <div className="container mt-3 ">
            <Alert error={error}/>
            <UserList users ={users} loading={loading}/>
        </div>
      </div>
    );
  
}

export default App;
