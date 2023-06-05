const {  createSlice } = require("@reduxjs/toolkit");

const favoriteProducts = createSlice({
    name:"productsStore",
    initialState: {favoriItems :[]},
    reducers: {
        setFavoriList:(state, actions) => {
           let index = state.favoriItems?.findIndex(i => i.id === actions.payload.id)
           console.log(index)

           if(index === -1) {
            console.log([...state.favoriItems, actions.payload])
            state.favoriItems = [...state.favoriItems, actions.payload]
           }else {
            state.favoriItems = state.favoriItems.filter(i => i.id !== actions.payload.id)
           }
        }
    }
})

export default favoriteProducts.reducer;
export const { setFavoriList, setFovoriFromState } = favoriteProducts.actions