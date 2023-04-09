import { logger } from  "redux-logger"
import combineReducers from "../reducers/combineReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:combineReducers,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools:process.env.NODE_ENV !== 'production'

})

export default store;
