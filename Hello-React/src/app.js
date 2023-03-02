//Babelın çevirim yapması için tek bir root element olmalı
var product = {
        name: "Iphone 15",
        price: "500",
        description: "Iyi telefon"
        
}
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
        <div>
                <ul>
                        <li>{ product.name }</li>
                        <li>{ product.price }</li>
                        <li>{ formatPrice(product) }</li>
                        { product.price > 0 && <li>{ product.price}</li>}
                        { ( product.price && product.price > 500) && <li>{ product.price}$</li>}
                        { printDescription(product) }  
                        { product.description && <li>{ product.description}</li> }      
                                    
                </ul>
        </div>

  </div>//her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template)       