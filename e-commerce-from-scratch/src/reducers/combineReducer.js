import { combineReducers } from "redux"
import productsReducer from "./productsReducer"
import favoriteProducts from "./favoriteProductsReducer";

const reducer = combineReducers({
    productsReducer,
    favoriteState : favoriteProducts
})

export default reducer;