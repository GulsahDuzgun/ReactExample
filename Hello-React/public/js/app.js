"use strict";

//Babelın çevirim yapması için tek bir root element olmalı
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
function addProduct(event, name) {
  console.log(name, event.target);
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header1"
}, "My First React Application!"), products.map(function (product, index) {
  return /*#__PURE__*/React.createElement("div", {
    className: "product_details",
    key: index
  }, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("h2", null, " ", product.name, " ")), /*#__PURE__*/React.createElement("li", null, product.price), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick(event) {
      addProduct(event, product.name);
    }
  }, "Ekle")));
})); //her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template);
