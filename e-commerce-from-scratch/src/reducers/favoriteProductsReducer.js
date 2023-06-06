const {  createSlice } = require("@reduxjs/toolkit");

const favoriteProducts = createSlice({
    name:"productsStore",
    initialState: {favoriItems :[]},
    reducers: {
        setFavoriList:(state, actions) => {
           let index = state.favoriItems?.findIndex(i => i.id === actions.payload.id)

           if(index === -1) {
                state.favoriItems.push({...actions.payload, isFavori:true})
           }else {
                state.favoriItems[index].isFavori = false
                state.favoriItems = state.favoriItems.filter(i => i.isFavori === true)
           }
        }
    }
})

export default favoriteProducts.reducer;
export const { setFavoriList } = favoriteProducts.actions