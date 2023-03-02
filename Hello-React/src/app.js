//Babelın çevirim yapması için tek bir root element olmalı
var p_name = "Iphone 14 Pro";
var p_price = "45000";
var product = {
        name : "Iphone 15",
        price : "55000"
}
function formatPrice(product){
        return product.price + "TL";
}

var template =
 <div>
        <h1 id="header1">My First React Application!</h1>
        <div>
                <ul>
                        <li>{ p_name }</li>
                        <li>{ p_price }</li>
                        <li>{ formatPrice(product) }</li>
                        <li>Lorem, ipsum.</li>
                </ul>
        </div>

  </div>//her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template)       