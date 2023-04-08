import productReducers from "../reducers/productsReducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer:productReducers,
    devTools:process.env.NODE_ENV !== 'production'

})

export default store;
