import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"))
const template = React.createElement("p",{},"Hello React")
//const template = <p>Hello React</p>
root.render(template);