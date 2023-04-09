import { logger } from  "redux-logger"
import productReducers from "../reducers/productsReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:productReducers,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools:process.env.NODE_ENV !== 'production'

})

export default store;
