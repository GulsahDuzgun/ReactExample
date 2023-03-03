"use strict";

//Babelın çevirim yapması için tek bir root element olmalı
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
var secilenUrun = [];
var products = [{
  name: "Iphone 15",
  price: "400"
}, {
  name: "Iphone 16",
  price: "80000"
}, {
  name: "Iphone 17",
  price: "4500"
}];
function showProduct(event, name) {
  console.log(name, event.target);
  if (!secilenUrun.includes(name)) {
    secilenUrun.push(name);
    renderApp();
  }
}
function addProduct(event) {
  event.preventDefault();
  var p_name = event.target.elements.pName.value;
  var p_price = event.target.elements.pPrice.value;
  var product = {
    name: p_name,
    price: p_price
  };
  products.push(product);
  renderApp();
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header1"
  }, "My First React Application!"), /*#__PURE__*/React.createElement("h2", null, " ", secilenUrun.length, " \xFCr\xFCn se\xE7ilmi\u015Ftir "), /*#__PURE__*/React.createElement("form", {
    onSubmit: addProduct
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "productName",
    name: "pName"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "productPrice",
    name: "pPrice"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "\xDCr\xFCn Bilgilerini Giriniz... ")), products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "product_details",
      key: index
    }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ")), /*#__PURE__*/React.createElement("li", null, product.price), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick(event) {
        showProduct(event, product.name);
      }
    }, "Ekle")));
  })); //her zaman kapsayıcı bir root eleman olmalıdır

  rootReact.render(template);
}
renderApp();
