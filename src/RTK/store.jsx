import { configureStore } from '@reduxjs/toolkit';
import { movieListSlice, movieDetailSlice } from './slice';

export const store = configureStore({
    reducer: {
        movieList: movieListSlice.reducer,
        movieDetail: movieDetailSlice.reducer
    }
})