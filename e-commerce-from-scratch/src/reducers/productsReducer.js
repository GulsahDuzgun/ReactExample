import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsReducer = {
    Load_data(state){
        state = {...state, items:[...state.items]}
    },
}

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer
});

export const {Load_data} = productsReducer;
export default productsSlice.reducer;
