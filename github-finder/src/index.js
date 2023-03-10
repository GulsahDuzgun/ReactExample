import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/custom.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode güvenli kod yazmamızda yardımcı olan sadece develop modunda etkindir.
  // Production modunda yani build edildiğinde göz ardı edilir.Kontrol edilmesi istenen componentler React.StrictMode içerisine alınır


  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
