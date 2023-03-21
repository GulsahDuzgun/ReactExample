import React from "react";
import ListResult from "./ListResult";
import Product from "./Product";

const ProductList = (props) =>{
    return (
        <div className="ListProduct">
        <table className='table'>
          <thead>
            <tr>
              <th scope='column'>Name</th>
              <th scope='column'>Price</th>
            </tr>
          </thead>
          <tbody className='mx-auto'>
            {(props.filterList.length >= 0 && props.searchText) &&
             <ListResult filterList={props.filterList} />
            } 
            <Product vegetables={props.vegetables} fruits={props.fruits} />     
          </tbody> 
        </table>
      </div>
    )
}


export default ProductList;