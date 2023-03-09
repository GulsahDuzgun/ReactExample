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
                            
                    ],
                    secilenUrun : [
                        {
                            counter:1,
                            product:{
                                name: "Iphone 17",
                                price: "80000",
                                image:"3.jpg"
                            }                    
                        }
                    ]
            }      
            this.showProduct = this.showProduct.bind(this)
            this.addProduct = this.addProduct.bind(this)
 
       }
    showProduct(product){
        this.setState((prevState)=>{
            //secilenUrin listesinde varsa -1 den yukarı değilse -1 döndürür
            const index =this.state.secilenUrun.findIndex(element => element.product.name == product.name)
            
            if(index > -1){
                let arr = this.state.secilenUrun.map((item)=>{
                    if(item.product.name === product.name){
                        item.counter+=1;
                    }
                    return item;//map ile her dizi elemanı döndürülerek return ile dizi elemanının yeni değeri return edilir
                })
                return{secilenUrun:arr}
            }
             let tempItem={
                counter:1,
                product:product
             }
             return{ secilenUrun: prevState.secilenUrun.concat(tempItem)}
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