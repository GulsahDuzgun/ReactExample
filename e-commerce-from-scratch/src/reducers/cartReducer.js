import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name:"productsStore",
    initialState : {
        buyList: [],
        result : 0
    },
    reducers : {
        addToCart:(state, action) => {
            let tempIndex = state.buyList?.findIndex(i => i .id === action.payload.id);

            if(tempIndex !== -1){
                state.buyList[tempIndex].quantity += 1
            }else {
                state.buyList.push({...action.payload, quantity:1})
            }
        },

        setResultPrice :(state, action) => {
            //console.log(action.payload)
            state.result = state.result + action.payload
        },

        increaseCount :(state, action) => {
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
            state.buyList = state.buyList.filter((item) => {
                    if(item.id === action.payload) {
                        return {
                            ...item,
                            quantity: --item.quantity
                    
                        }
                    }
                    else {
                        return item
                    }
            })
        }
    }
})

export default cartReducer.reducer
export const {addToCart, setResultPrice, increaseCount, decreaseCount} = cartReducer.actions