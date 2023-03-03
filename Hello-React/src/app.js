//Babelın çevirim yapması için tek bir root element olmalı
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
var secilenUrun = [];

var products = [
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
        price: "4500",
}]


function showProduct(event, name){
        console.log(name, event.target);

        if(!secilenUrun.includes(name)){
                secilenUrun.push(name);
                renderApp()

        }
}

function addProduct(event){
        event.preventDefault();
        let p_name = event.target.elements.pName.value;
        let p_price = event.target.elements.pPrice.value;
        let product = {
                name: p_name,
                price: p_price
        }
        products.push(product);
        renderApp()
}

function renderApp(){
        var template =
        <div>
               <h1 id="header1">My First React Application!</h1>
               <h2> { secilenUrun.length} ürün seçilmiştir </h2>
               <form onSubmit = { addProduct } >
                        <input type="text" id = "productName" name = "pName"></input>
                        <input type="text" id = "productPrice" name = "pPrice"></input>
                        <button type="submit">Ürün Bilgilerini Giriniz... </button>
               </form>

               { products.map((product,index) => ( 
                       <div className = "product_details" key={index}>
                       <ul>
                               <li>{ <h2> { product.name } </h2> }</li>
                               <li>{ product.price }</li> 
                               <button type="button" onClick = {((event)=> {showProduct(event, product.name)})}  >Ekle</button>                    
                       </ul>
               </div>               
               ))}
               
       
        </div>//her zaman kapsayıcı bir root eleman olmalıdır
        
        rootReact.render(template)
}

renderApp()



    