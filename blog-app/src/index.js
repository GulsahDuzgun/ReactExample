import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css'
import { createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
const initalStore = {
    count:8
}

const store = createStore((state = initalStore) => { 
    return state });

console.log(store.getState())

root.render(<AppRouter />);
reportWebVitals();
