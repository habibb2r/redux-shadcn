import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        } 
    },
})

export const { increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;