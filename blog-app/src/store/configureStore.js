import { combineReducers, createStore } from 'redux'
import authReducer from '../reducers/authReducer'
import blogReducer from '../reducers/blogReducer'

export default () => {
   
    const store = createStore(

        combineReducers({
            auth: authReducer,
            blogs: blogReducer
        }),

        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
    return store;
}
