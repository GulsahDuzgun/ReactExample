import React from "react"
class Product extends React.Component{
    render(){
            return(
                    <div className = "product_details">
                            <ul>
                                    <li>{ <h2> {this.props.item.name } </h2> }</li>
                                    <li>{ this.props.item.price }</li> 
                                    <button type="button" onClick = {()=>this.props.showProduct(this.props.item)} >Ekle</button>                    
                            </ul>
                    </div>
            )
    }
}
export default Product;