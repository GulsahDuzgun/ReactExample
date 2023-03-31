import { useState } from 'react'
import  './App.css'
import ProductList from './components/ProductList'
import Search from './components/Search'

function App() {
  const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]
  
  let fruits =  []
  let vegetables = []
  let filterList = []

  const [searchText, setSearchText] = useState("")
  const [isCheck, setCheck] = useState(false)

  products.forEach( item => {
    if( item.category === "Fruits") {
      fruits = [...fruits, item]
    }else {
      vegetables = [...vegetables, item]
    }
  })

   console.log(searchText)
  
   if(searchText.length>0 && isCheck) {
      let filterArr = products.filter( item => {
        return(item.name.includes(searchText) && item.stocked === true) 
      })

      filterList = filterArr
      console.log(filterArr)

    }else if(searchText.length>0) {
      let filterArr = products.filter((item) => {
        return item.name.includes(searchText)
      })
      
      filterList = filterArr
      console.log(filterArr)  
      
    }else {
      filterList = []
    }
  
  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </header>
      <div className="container offset-3 col-6">
        <Search onChange={setSearchText} getCheck={setCheck}/>
        <ProductList filterList={filterList} vegetables={vegetables} fruits={fruits} searchText={searchText}/>
      </div>
    </div>
  );
}

export default App;
