import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:"productsStrore",
    initialState : { buyList: []},
    reducers : {
        addToCart:(state, actions) => {
            state = { ...state,
                        buyList:state.buyList.push(actions.payload)
            }
        }
    }
})

export default cartReducer.reducer
export const {addToCart} = cartReducer.actions