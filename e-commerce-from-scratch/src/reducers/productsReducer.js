import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsReducer = {
    Load_data:( state, payload) => {
       // console.log(payload)
        state.items = payload.payload.items
    }
}

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer
});

export const {Load_data} = productsSlice.actions;
export default productsSlice.reducer;
