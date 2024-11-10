import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({ // 검색한 결과, 검색한 단어 저장 슬라이스
    name: 'search',
    initialState: {
        searchResults: null,
        searchTerm: ''
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.searchResults = action.payload
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload
        },
        clearSearchResults: (state) => {
            state.searchResults = null
        }
    }
})

export const { setSearchResults, setSearchTerm, clearSearchResults } = searchSlice.actions

