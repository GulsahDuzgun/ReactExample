import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cardReducer from "./cardReducer"

export default combineReducers({
    products:productReducer,
    cardProducts:cardReducer
});