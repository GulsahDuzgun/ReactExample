import React from 'react'
import ReactDOM from 'react-dom/client'

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
class Header extends React.Component{
        render(){
                return(
                <div>
                        <h1 id="header1">My First React Application!</h1>
                        <h2> {this.props.length} ürün seçilmiştir </h2>
                </div>
                );
        }
}
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
                        <button type="submit">Ürün Bilgilerini Giriniz... </button>
                  </form>
                )
        }
}
class ProductList extends React.Component{
        render(){
                return(
                        this.props.products.map((product,index) => ( 
                                <Product key = {index} item={product} showProduct={this.props.show}/>
                        ))

                )
        }
}

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

rootReact.render(<App/>)


    