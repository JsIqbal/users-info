import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from './counter.reducer';
import userSlice  from "./user-reducer";

const rootReducer = combineReducers({
    counterSlice: counterSlice,
    userSlice: userSlice
});

export default rootReducer;