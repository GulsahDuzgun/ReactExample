import { combineReducers } from "redux"
import productsReducer from "./productsReducer"
import favoriteProducts from "./favoriteProductsReducer";
import cartReducer from "./cartReducer";

const reducer = combineReducers({
    productsReducer,
    favoriteState : favoriteProducts,
    buyProductState: cartReducer
})

export default reducer;