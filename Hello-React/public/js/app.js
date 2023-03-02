"use strict";

//Babelın çevirim yapması için tek bir root element olmalı
var product = {
  name: "Iphone 15",
  price: "400",
  description: "Iyi telefon",
  colors: ["silver", "white", "black", "red"]
};
function formatPrice(product) {
  return product.price + "TL";
}
function printDescription(product) {
  if (product.description) {
    return /*#__PURE__*/React.createElement("li", null, product.description);
  }
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header1"
}, "My First React Application!"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, product.name), /*#__PURE__*/React.createElement("li", null, product.price), /*#__PURE__*/React.createElement("li", null, formatPrice(product)), product.price > 0 && /*#__PURE__*/React.createElement("li", null, product.price), product.price && product.price > 500 && /*#__PURE__*/React.createElement("li", null, product.price, "$"), printDescription(product), product.description && /*#__PURE__*/React.createElement("li", null, product.description), product.colors.length > 3 ? /*#__PURE__*/React.createElement("li", null, "Birden fazla renk se\xE7ene\u011Fimiz vard\u0131r") : "", product.name.length > 3 && product.price > 400 ? /*#__PURE__*/React.createElement("li", null, product.name) : /*#__PURE__*/React.createElement("li", null, "Hatal\u0131 \xDCr\xFCn")))); //her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template);
