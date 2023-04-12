const {  createSlice } = require("@reduxjs/toolkit");

const favoriteProducts = createSlice({
    name:"productsStore",
    initialState: {favoriItems :[]},
    reducers: {
        setFavoriList:(state, actions) => {
            state = {
                ...state ,
                favoriItems: state.favoriItems.push(actions.payload)
            }
        },

    }
})

export default favoriteProducts.reducer;
export const { setFavoriList } = favoriteProducts.actions