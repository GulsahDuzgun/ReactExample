"use strict";

//Babelın çevirim yapması için tek bir root element olmalı
var p_name = "Iphone 14 Pro";
var p_price = "45000";
var product = {
  name: "Iphone 15",
  price: "55000"
};
function formatPrice(product) {
  return product.price + "TL";
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header1"
}, "My First React Application!"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, p_name), /*#__PURE__*/React.createElement("li", null, p_price), /*#__PURE__*/React.createElement("li", null, formatPrice(product)), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")))); //her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template);
