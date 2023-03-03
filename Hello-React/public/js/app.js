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
function addProduct(event, name) {
  console.log(name, event.target);
  if (!secilenUrun.includes(name)) {
    secilenUrun.push(name);
    rootReact.render(renderApp());
  }
}
function renderApp() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header1"
  }, "My First React Application!"), /*#__PURE__*/React.createElement("h2", null, " ", secilenUrun.length, " \xFCr\xFCn se\xE7ilmi\u015Ftir "), products.map(function (product, index) {
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

  return template;
}
rootReact.render(renderApp());
