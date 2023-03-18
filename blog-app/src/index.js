import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css'
import { combineReducers, createStore } from 'redux'
import { v4 as uuid } from 'uuid'

const root = ReactDOM.createRoot(document.getElementById('root'));
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
        case 'Add_Blog':
            return [
                ...state ,
                action.blog
            ]
        default:
            return state;
    }
}

const addBlog = ({title = "", description = "", dateAdded = 0}) => {
    return {
        type: "Add_Blog",
        blog: {
            id: uuid(),
            title: title,
            description: description,
            dateAdded: dateAdded
        } 
    }
}

const store = createStore(combineReducers({
    auth: authReducer,
    blogs: blogReducer
}))


store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch( addBlog({title:"Blog1", description:"BLOG1 Description", dateAdded:3}) )
addBlog("Blog2", "BLOG2 Description")


root.render(<AppRouter />);
reportWebVitals();
