import React, { useContext, useState } from 'react'
import {UsersContext} from '../context/usersContext'

const Search = ({displayAlert}) => {
   const [keyword, setKeyword] = useState("")
   const {searchResult,userDelete} = useContext(UsersContext)
    //arrow fonks. ile bir kapsam tanımlanmadığından dolayı oluşan this objesine bind edilir
  const onChange=(event)=>{
    setKeyword(event.target.value)
  }
  const onSubmit = (e)=>{
    //Submit ile yenilenen sayfada veri kaybını engellemek için e.preventDefault kullanılır

    //Submit edilen sayfa yenilenir ve server tarafına gidip gelerek tekrardan ekranda görünür
    e.preventDefault();

   // console.log(this.state.keyword) onChange ile her değişiklik keyworde aktarılır click edildiğinde keyword zaten günceldir.
   if(keyword === ''){
   displayAlert("Arama alanı boş!!","danger")
   }else{
    searchResult(keyword);
    setKeyword('');
   }
  }
  return (
    <div className='my-3 col-md-3 me-4'>
      <form onSubmit={onSubmit}>
          <div className='input-group'>
              <input type="text" className='form-control' value={keyword}  onChange={onChange} placeholder="Search" />
              <button className="btn btn-secondary"  type="submit" >Ara</button>
              <button className="btn btn-dark btn-sm" onClick={userDelete}  type="button" >Verileri Temizle</button>
          </div>
       </form>
    </div>
  ) 
  
}

export default Search