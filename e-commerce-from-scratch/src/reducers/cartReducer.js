import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:"productsStore",
    initialState : {
        buyList: [],
        result : 0,
        itemCount : 0 
    },
    reducers : {
        addToCart:(state, action) => {
            let tempIndex = state.buyList?.findIndex(i => i .id === action.payload.id);

            if(tempIndex !== -1){
                state.buyList[tempIndex].quantity += 1
            }else {
                state.buyList.push({...action.payload, quantity:1})
            }
            state.itemCount = ++state.itemCount 
        },

        setResultPrice :(state, action) => {
            //console.log(action.payload)
            state.result = state.result + action.payload
        },

        increaseCount :(state, action) => {
            state.itemCount = ++state.itemCount 
            state.buyList = state.buyList.filter((item) => {
                if(item.id === action.payload) {
                    console.log(item.quantity)
                     return item = {
                        ...item,
                        quantity: ++item.quantity 
                
                    }
                }
                else {
                    return item
                }
            })
        },

        decreaseCount : (state, action ) => {
            state.itemCount = --state.itemCount 
            state.buyList = state.buyList.filter((item) => {
                    if(item.id === action.payload && item.quantity > 1) {
                        return {
                            ...item,
                            quantity: --item.quantity
                        }    
                    }
                    else if(item.id === action.payload && item.quantity === 1) {
                        console.log("aynı")
                
                    }
                    else {
                        return item
                    }
            })
        },

        numberOfItems:(state, action) => {
            console.log( action.payload)
            state.itemCount = state.itemCount + action.payload
        }
    }
})

export default cartReducer.reducer
export const {addToCart, setResultPrice, increaseCount, decreaseCount, numberOfItems} = cartReducer.actions