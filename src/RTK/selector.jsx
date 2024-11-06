import { createSelector } from "@reduxjs/toolkit";

export const selectMovieList = (poketmonId) => createSelector(
    state => state.poketmon.data,
    (poketmon) => poketmon.find(el => el.id === poketmonId)
)