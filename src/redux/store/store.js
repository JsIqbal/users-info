import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../reducers/counter.reducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});