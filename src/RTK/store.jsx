import { configureStore } from '@reduxjs/toolkit';
import { searchSlice} from './slice';

export const store = configureStore({
    reducer: {
        search: searchSlice.reducer,
    }
})