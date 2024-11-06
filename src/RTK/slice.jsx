import movieListData from '../assets/data/movieListData.json'
import movieDetailData from '../assets/data/movieDetailData.json'
import { createSlice } from '@reduxjs/toolkit';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const movieListSlice = createSlice({
    name: "movieList",
    // initialState: movieListData.results,
    initialState: {
        id: movieListData.results.id,
        img: `${BASE_IMAGE_URL}${movieListData.results.backdrop_path}`,
        title: movieListData.results.title,
        voteAverage: movieListData.results.vote_average
    },
    reducers: {}
})

export const movieDetailSlice = createSlice({
    name: "movieDetail",
    initialState: {
        img: `${BASE_IMAGE_URL}${movieDetailData.poster_path}`,
        title: movieDetailData.title,
        voteAverage: movieDetailData.vote_average,
        genres: movieDetailData.genres,
        overView: movieDetailData.overview
    },
    reducers: {}
})

