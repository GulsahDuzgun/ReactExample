//Babelın çevirim yapması için tek bir root element olmalı
var products = [
{
        name: "Iphone 15",
        price: "400",
        description: "Iyi telefon",
        colors: ["silver","white","black","red"]
        
},
{
        name: "Iphone 16",
        price: "80000",
        description: "Iyi telefon",
        colors: ["silver","white","black","red"]
        
},
{
        name: "Iphone 17",
        price: "4500",
        description: "Iyi telefon",
        colors: ["silver","white","black","red"]
        
}]
function formatPrice(product){
        return product.price + "TL";
}

function printDescription(product){
        if(product.description){
               return <li>{ product.description}</li>
        }
}

var template =
 <div>
        <h1 id="header1">My First React Application!</h1>
        { products.map((product,index) => ( 
                <div className = "product_details" key={index}>
                <ul>
                        <li>{ product.name }</li>
                        <li>{ product.price }</li>
                        <li>{ formatPrice(product) }</li>
                        { product.price > 0 && <li>{ product.price}</li>}
                        { ( product.price && product.price > 500) && <li>{ product.price}$</li>}
                        { printDescription(product) }  
                        { product.description && <li>{ product.description}</li> }     
                        { product.colors.length > 3 ? <li>Birden fazla renk seçeneğimiz vardır</li> : ""} 
                        { ( product.name.length > 3 && product.price > 400 ) ? <li>{ product.name }</li> : <li>Hatalı Ürün</li>}
                        {product.colors.map((color,index) => (
                                <li key = {index} >{ color }</li>
                        ))}
                                    
                </ul>
        </div>
                        
        ))}
        

  </div>//her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template)       