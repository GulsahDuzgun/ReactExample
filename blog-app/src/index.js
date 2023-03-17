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

const store = createStore((state = initalStore, action) => { 
    
    switch(action.type){
        case "INCREASE":
            const amount = typeof action.increaseAmount === "number" ? action.increaseAmount : 1
            return {
                count: state.count + amount
            }
        case "DECREASE":
            return {
                count: state.count -1
            }
        case "RESET":
            return {
                count: 0
            }
        default:
            return state;
    }
 });

store.subscribe(() => {
    console.log(store.getState());
 })

store.dispatch({
    type: "INCREASE",
    increaseAmount: 12
})

store.dispatch({
    type: "DECREASE"
})

store.dispatch({
    type: "RESET"
})


root.render(<AppRouter />);
reportWebVitals();
