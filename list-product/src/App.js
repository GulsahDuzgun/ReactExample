import  './App.css'

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
   
  products.forEach( item => {
    if( item.category === "Fruits") {
      fruits = [...fruits, item]
    }else {
      vegetables = [...vegetables, item]
    }
  })

  let isCheck = false;
  let searchText = "";
  let filterList = []

  const onChange = (e) => {

    searchText = e.target.value
   
    if(searchText.length>0 && isCheck){
      filterList = products.filter( item => {
        return(item.name.includes(searchText) && item.stocked === true) 
      })
      
      console.log(filterList)
    }
    else if(searchText.length>0) {
      filterList = products.filter((item) => {
        return item.name.includes(searchText)
      })
    
      console.log(filterList)
    }else{
      filterList= []
      console.log(filterList)
    }
  }

  const getCheck = (e) => {
    isCheck = e.target.checked;
    console.log(isCheck)
  }   

  return (
    <div className="App">
      <header>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </header>
      <div className="container offset-3 col-6">
        <div className="search container mt-5 mb-2">
          <input type="text" className='my-2' onChange={onChange} placeholder="Search..." /><br/>
          <input type="checkbox" onChange={getCheck}/> Only show products in stock
        </div>
        <div className="ListProduct">
          <table className='table'>
            <thead>
              <tr>
                <th scope='column'>Name</th>
                <th scope='column'>Price</th>
              </tr>
            </thead>
              { filterList.length > 0 ? 
                <tbody className='mx-auto'>
                  {
                    filterList.map((item, index) => {
                      return(
                        <tr className='d-flex justify-content-between' key={index} style={ item.stocked ? { color:'black'} : {color:"red", textDecoration:"underline"}}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
               :
               <tbody className='mx-auto'>
                    <tr>
                  <th scope='row'className='text-center'>Vegetables</th>
                </tr>
                {
                  vegetables.map( ( item, index ) => { 
                    return (
                      <tr className='d-flex justify-content-between' key={index} style={ item.stocked ? { color:'black'} : {color:"red", textDecoration:"underline"}}>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                      </tr>
                      )
                    })
                  }
                  <tr>
                    <th scope='row'className='text-center'>Fruits</th>
                  </tr>
                  {
                      fruits.map((item, index) => {
                        return (
                          <tr className='d-flex justify-content-between' style={item.stocked ? {color:'black'}: {color:"red", textDecoration:"underline"}} key={index}>
                          <td>{item.name}</td>
                          <td>{item.price}</td>
                        </tr>
                        )
                    })
                  } 
                </tbody>
              }        
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
