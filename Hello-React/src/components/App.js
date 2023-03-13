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

    componentDidMount() {
        let jsonData = JSON.parse(localStorage.getItem("items"))
        let productsItem = JSON.parse(localStorage.getItem("allProducts"));

        if(jsonData) {
            this.setState({
            secilenUrun:jsonData
            })
        }

        if((productsItem)) [
            this.setState({
                products:productsItem
            })
        ]
    }

    componentDidUpdate() {
        let json_string = JSON.stringify(this.state.secilenUrun)
        localStorage.setItem("items", json_string);

        let allProducts = JSON.stringify(this.state.products)
        localStorage.setItem("allProducts", allProducts)
    }

    showProduct(product) {
        this.setState((prevState) => {
            //secilenUrin listesinde varsa -1 den yukarı değilse -1 döndürür
            const index =this.state.secilenUrun.findIndex(element => element.product.name == product.name)
            
            if(index > -1) {

                let arr = this.state.secilenUrun.map((item) => {
                    if(item.product.name === product.name) {
                        item.counter += 1;
                    }

                    return item;//map ile her dizi elemanı döndürülerek return ile dizi elemanının yeni değeri return edilir
                })

                return{secilenUrun:arr}
            }

            let tempItem = {
                counter:1,
                product:product
            }

            return { secilenUrun: prevState.secilenUrun.concat(tempItem)}
        })
    }
    
    addProduct(product) {
        this.setState((prevState => {
            return { products:prevState.products.concat(product) }
        }))
    } 

    deleteItem = (item) => {
       this.setState((prevState) => {
        const index = prevState.secilenUrun.findIndex(i => i.product.name = item.name)

        if(index > -1) {
            prevState.secilenUrun.splice(index,1)
            return{secilenUrun:prevState.secilenUrun}
        }

       })
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
                        <SelectedProduct products= {this.state.secilenUrun} delete={this.deleteItem}/>
                    </div>

                </div>
            </div>//her zaman kapsayıcı bir root eleman olmalıdır
    )     
    }
    
}

export default App;