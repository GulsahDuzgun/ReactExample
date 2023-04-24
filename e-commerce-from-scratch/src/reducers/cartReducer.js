import { createSlice } from "@reduxjs/toolkit";

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
                result : state.result + action.payload.price 
            }
        }
    } 
})

export default cartReducer.reducer
export const {addToCart, setResultPrice} = cartReducer.actions