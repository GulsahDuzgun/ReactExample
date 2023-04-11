import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:"productsStrore",
    initialState : { buyList: []},
    reducers : {
        addToCart:(state, actions) => {
            state = { ...state,
                        buyList:state.buyList.push(actions.payload)
            }
        },
        getCart:(state, actions) => {
            console.log(state)
           return state.buyList;
        }
    }
})

export default cartReducer.reducer
export const {addToCart, getCart} = cartReducer.actions