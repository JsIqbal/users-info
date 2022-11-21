import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from './counter.reducer';

const rootReducer = combineReducers({
    counterSlice: counterSlice
});

export default rootReducer;