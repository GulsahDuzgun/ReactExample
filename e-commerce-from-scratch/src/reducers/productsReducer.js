import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const productsReducer = {
    LoadData:( state, payload) => {
       // console.log(payload)
        state.items = payload.payload.items
    },
    setLoading:(state, payload) => {
        state.isLoading = payload.payload
    },
    filterSize:(state, action) => {
        return {
           ... state ,
           filterList :[...state.items].filter(i => i.availableSizes.includes(action.payload))
        }
    },
    setFilterList:(state, action) => {
        return {
            ...state ,
            items:[...action.payload]
        }
    }
}

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer,
});

export const {LoadData, setLoading, filterSize, setFilterList} = productsSlice.actions;
export default productsSlice.reducer;
