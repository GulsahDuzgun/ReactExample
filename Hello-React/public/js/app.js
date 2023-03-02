"use strict";

// const domElement = document.querySelector("#content");
// let header = document.createElement("h1");
// header.innerHTML = "My First React App!"
// //    <h1>My First React App!</h1>
// domElement.appendChild(header)

//var template =  React.createElement('h1',null,'My First React App!');
//Babelın çevirim yapması için tek bir root element olmalı
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header1"
}, "My First React Application!"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")), "Lorem ipsum dolor sit amet.")); //her zaman kapsayıcı bir root eleman olmalıdır
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(template);
