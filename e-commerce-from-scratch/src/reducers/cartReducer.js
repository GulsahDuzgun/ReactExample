import { createSlice } from "@reduxjs/toolkit";
import TotalPrice from "../utils/getBill";

const cartReducer = createSlice({
    name:"productsStore",
    initialState : {
        buyList:[],
        result:0
    },
    reducers : {
        addToCart:(state, action) => {
           state = {
            ...state ,
                buyList : state.buyList.push(action.payload)
           }
        },

        setResultPrice :(state, action) => {      
            state = {
                ...state ,
                result : TotalPrice(action.payload)
            }
        }
    } 
})

export default cartReducer.reducer
export const {addToCart, setResultPrice} = cartReducer.actions