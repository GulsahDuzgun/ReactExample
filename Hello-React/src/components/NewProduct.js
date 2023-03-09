import React from "react";
class NewProduct extends React.Component{
        constructor(props){
                super(props)
                this.addProduct = this.addProduct.bind(this)
        }
        addProduct(event){
                event.preventDefault()
                const name = event.target.elements.pName.value;
                const price = event.target.elements.pPrice.value;
                const item = {
                        name:name,
                        price:price
                }
                this.props.addProduct(item);
                event.target.elements.pName.value = "";
                event.target.elements.pPrice.value = ""; 
        }
        render(){
                return(
                  <form onSubmit = { this.addProduct } >
                        <input type="text" id = "productName" name = "pName"></input>
                        <input type="text" id = "productPrice" name = "pPrice"></input>
                        <button className="btn btn-primary" type="submit">Ürün Bilgilerini Giriniz... </button>
                  </form>
                )
        }
}
export default NewProduct;