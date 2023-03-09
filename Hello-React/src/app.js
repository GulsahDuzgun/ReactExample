import React from 'react'
import ReactDOM from 'react-dom/client'
import style from './css/main.scss'
import App from './components/App';

//devdependencies kısmı projeyi geliştirmek için gerekli toollar, dependencies ise kütüphanelerdir
var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
rootReact.render(<App/>)


    