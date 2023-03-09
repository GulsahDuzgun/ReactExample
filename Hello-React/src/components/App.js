import React from "react"
import Header from './Header'
import NewProduct from './NewProduct';
import ProductList from './ProductList';
import SelectedProduct from "./SelectedProduct";

class App extends React.Component{
    constructor(props){
            super(props)
            this.state= {
                    products : [
                            {
                                    name: "Iphone 15",
                                    price: "400",
                                    image:"1.jpg"
                            },
                            {
                                    name: "Iphone 16",
                                    price: "80000",
                                    image:"2.jpg"
                            },
                            {
                                    name: "Iphone 17",
                                    price: "80000",
                                    image:"3.jpg"
                            },
                            {
                                    name: "Iphone 18",
                                    price: "4500",
                                    image:"2.jpg"
                            }
                    ],
                    secilenUrun : []
            }      
            this.showProduct = this.showProduct.bind(this)
            this.addProduct = this.addProduct.bind(this)
 
       }
    showProduct(product){
            this.setState((prevState)=>{                    
                    if(!prevState.secilenUrun.includes(product)){
                            return{secilenUrun: prevState.secilenUrun.concat(product)}
                    }
            })
    }
    addProduct(product){
            this.setState((prevState =>{
                    return{ products:prevState.products.concat(product)}
            }))
    }
    render(){
            return(
                    <div className="container mt-3">
                        <Header length= {this.state.secilenUrun.length}/>
                        <div className="row mt-3">
                            <div className="col-4">
                              <NewProduct addProduct={this.addProduct}/>
                            </div>
                            <div className="col-4">
                              <ProductList products={ this.state.products } show={this.showProduct}/>
                            </div>
                            <div className="col-4">
                                <SelectedProduct products= {this.state.secilenUrun}/>
                            </div>

                        </div>
                    </div>//her zaman kapsayıcı bir root eleman olmalıdır
            )
    }
    
}

export default App;