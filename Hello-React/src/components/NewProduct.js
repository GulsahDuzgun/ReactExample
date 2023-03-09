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
                const image = event.target.elements.pImage.value;
                const item = {
                        name:name,
                        price:price,
                        image:image
                }
                this.props.addProduct(item);
                event.target.elements.pName.value = "";
                event.target.elements.pPrice.value = ""; 
                event.target.elements.pImage.value = "";
        }
        render(){
                return(
                  <form onSubmit = { this.addProduct } className="card card-body">
                        <div className="mb-3 ">
                            <label htmlFor="productName" className="form-label">Name</label>
                            <input type= "text"  className="form-control" id= "productName" name= "pName"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="productPrice" >Price</label>
                            <input type="text" className="form-control" id= "productPrice" name= "pPrice"></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="image">Image</label>
                            <input type="text" className="form-control" name="pImage" id="image" />
                        </div>
                        <button className="btn btn-primary" type="submit">Ürün Bilgilerini Giriniz... </button>
                  </form>
                )
        }
}
export default NewProduct;