import { combineReducers, createStore } from 'redux'
import authReducer from '../reducers/authReducer'
import blogReducer from '../reducers/blogReducer'

export default () => {
   
    const store = createStore(
        combineReducers({
            auth: authReducer,
            blogs: blogReducer
        })
    )
    return store;
}
