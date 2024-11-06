import movieListData from '../assets/data/movieListData.json'
import movieDetailData from '../assets/data/movieDetailData.json'
import { createSlice } from '@reduxjs/toolkit';

export const movieListSlice = createSlice({
    name: "movieList",
    initialState: movieListData.results,
    reducers: {}
})

export const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState: {
        img: `http://localhost:5173${movieDetailData.backdrop_path}`,
        title: movieDetailData.title,
        voteAverage: movieDetailData.vote_average,
        genres: movieDetailData.genres,
        overView: movieDetailData.overview
    },
    reducers: {}
})

