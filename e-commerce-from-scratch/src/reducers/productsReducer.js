import { createSlice } from "@reduxjs/toolkit";

const initialState = {a:2}

const productsReducer = {
    Load_data(state){
        state = {...state, items:{...state.items}}
    },
}

// console.log( typeof productsReducer);
// console.log(productsReducer)

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer
});

export const {Load_data} = productsReducer;
export default productsSlice.reducer;
