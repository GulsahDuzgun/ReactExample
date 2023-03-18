import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css'
import { addBlog, removeBlog, updateBlog } from './actions/blog'
import createStore from './store/configureStore'
import { Provider } from 'react-redux' 

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore()
store.subscribe(()=>{
    console.log(store.getState())
})

const a =store.dispatch( addBlog({title:"Blog1", description:"BLOG1 Description", dateAdded:3}) )
store.dispatch( removeBlog({id: a.blog.id}))
const b = store.dispatch( addBlog({title:"Blog2", description:"BLOG2 Description"}) )
store.dispatch(updateBlog(b.blog.id,{title:"Update Title", description:"Update Description"}))
store.dispatch( addBlog({title:"Blog3", description:"BLOG3 Description"}) )
store.dispatch( addBlog({title:"Blog4", description:"BLOG4 Description"}) )



root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider> );
reportWebVitals();
