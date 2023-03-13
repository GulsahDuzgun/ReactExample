import React from 'react';
import Navbar from './components/Navbar';
import UserList from'./components/UserList';
import Alert from './components/Alert';
import  AlertContextProvider  from './context/alertContext';

//http isteğini component oluşmadan hemen önce atmamız için life-cycle hooks yapısına ihtiyacımız var . Bunun için class yapısına dönüyoruz
const App = () => {
  return (
    <>
      <AlertContextProvider>
          <Navbar title="Github Finder" />
          <div className="container mt-3 ">
              <Alert/>
              <UserList />
          </div>
        </AlertContextProvider>
      </>
  )
}
export default App;
