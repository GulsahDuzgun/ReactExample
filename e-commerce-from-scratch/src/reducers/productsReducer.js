import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {}

// const productsReducer = {

//     Load_data:( state, payload) => {
//         state.items =[...payload]
//     }

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "Load_data":
            console.log("geldi")
            console.log(state)
            return {
              ... state.items=action.items
            }
        default:
            console.log("geldi")
            return state;
    }       
}

const productsSlice = createSlice({
    name:"productsStore",
    initialState:initialState,
    reducers:productsReducer
});

export const {Load_data} = productsReducer
export default productsSlice.reducer;
