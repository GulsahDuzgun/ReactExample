import thunk from "redux-thunk";
import rootReducer from './reducers'
import { applyMiddleware, compose, createStore } from "redux";
import {configureStore} from "@reduxjs/toolkit"

const initialState = {};
const middleware = [thunk];

const store = configureStore({
    reducer: rootReducer
})

export default store;