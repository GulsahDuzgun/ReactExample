import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css'
import { combineReducers, createStore } from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
const state = {
    blogs: [
        {
            id: 1,
            title: "Blog Title 1",
            description: "Blog1 description",
            dateAdded: 0
        },
    ],
    auth: {
        userId: 1,
        userName: "GulsahDuzgun",
        email: "establish@gmail.com"
    }
}

const blogState = []
const authState = {
    userId: 1,
    userName: "GulsahDuzgun",
    email: "establish@gmail.com"
}

const authReducer = (state = authState, action) => {
   
    switch(action.type) {
        default:
            return state;
    }
}

const blogReducer = (state = blogState, action) => {
   
    switch(action.type) {
        default:
            return state;
    }
}

const store = createStore(combineReducers({
    auth: authReducer,
    blogs: blogReducer
}))

console.log(store.getState())

root.render(<AppRouter />);
reportWebVitals();
