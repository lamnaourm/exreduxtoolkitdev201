import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter:300
    },
    reducers:{
        increment: (state,action) =>{
            state.counter += action.payload
        },
        decrement: (state,action) =>{
            state.counter -= action.payload
        },
        init: (state,action) =>{
            state.counter = action.payload
        },
    }
})

export const {increment,decrement,  init} = counterSlice.actions
export default counterSlice.reducer