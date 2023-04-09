import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsReducer = {
    Load_data:( state, payload) => {
       // console.log(payload)
        state.items = payload.payload.items
    },
    Loading:(state, payload)=>{
        state.isLoading = payload
    }
}

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer
});

export const {Load_data, Loading} = productsSlice.actions;
export default productsSlice.reducer;
