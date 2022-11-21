import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        num : 10,
    },
    reducers: {
        increament: (state, action) => {
            state.num ++
        }
    }
});

export const { increament } = counterSlice.actions;
export default counterSlice.reducer;