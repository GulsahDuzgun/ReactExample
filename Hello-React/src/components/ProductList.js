import React from "react"
import Product from "./Product";

class ProductList extends React.Component{
    render() {

        return(
            this.props.products.map((product,index) => ( 
                <Product key = {index} item={product} showProduct={this.props.show}/>
            ))     
        )
    }
}

export default ProductList;