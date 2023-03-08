import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import NewProduct from './components/NewProduct';
import ProductList from './components/ProductList';

var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
class App extends React.Component{
        constructor(props){
                super(props)
                this.state= {
                        products : [
                                {
                                        name: "Iphone 15",
                                        price: "400",
                                },
                                {
                                        name: "Iphone 16",
                                        price: "80000",
                                },
                                {
                                        name: "Iphone 17",
                                        price: "80000",
                                },
                                {
                                        name: "Iphone 18",
                                        price: "4500",
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
                        <div>
                          <Header length= {this.state.secilenUrun.length}/>
                          <NewProduct addProduct={this.addProduct}/>
                          <ProductList products={ this.state.products } show={this.showProduct}/>
                        </div>//her zaman kapsayıcı bir root eleman olmalıdır
                )
        }
        
}
rootReact.render(<App/>)


    