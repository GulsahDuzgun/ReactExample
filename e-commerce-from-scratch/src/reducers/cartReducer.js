import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:"productsStore",
    initialState : { buyList:[]},
    reducers : {
        addToCart:(state, action) => {
           state = {
            ...state ,
                buyList : state.buyList.push(action.payload)
           }
        }
    } 
})

export default cartReducer.reducer
export const {addToCart, setCart} = cartReducer.actions