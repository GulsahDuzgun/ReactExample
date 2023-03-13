import React, { useState,useContext } from 'react';
import Navbar from './components/Navbar';
import UserList from'./components/UserList';
import Alert from './components/Alert';
import { UsersContext } from './context/usersContext';

//http isteğini component oluşmadan hemen önce atmamız için life-cycle hooks yapısına ihtiyacımız var . Bunun için class yapısına dönüyoruz
const App = () => {
  const [error, setError] = useState(null)
  const {userDelete} = useContext(UsersContext)
  

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
  return (
    <>
      <Navbar title="Github Finder"  displayAlert={displayAlert} />
      <div className="container mt-3 ">
          <Alert error={error}/>
          <UserList />
      </div>
      </>
  )
    
  
}

export default App;
