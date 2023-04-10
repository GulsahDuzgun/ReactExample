import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsReducer = {
    LoadData:( state, payload) => {
       // console.log(payload)
        state.items = payload.payload.items
    },
    setLoading:(state, payload) => {
        state.isLoading = payload.payload
    }
}

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer
});

export const {LoadData, setLoading} = productsSlice.actions;
export default productsSlice.reducer;
