import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter.reducer";

const rootReducer = combineReducers({
    counterReducer: counterReducer
});

export default rootReducer;