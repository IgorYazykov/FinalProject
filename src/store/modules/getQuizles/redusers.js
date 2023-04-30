import { createSlice } from '@reduxjs/toolkit';
import thuncksQuizles from './thunks';
import { moduleName } from './constants';
import { filterQuizles } from './actionFilter';
import { actionFavorite } from './actionFavorite';

const initialState = {
  quizles: [],
  filterQuizlesArr: [],
  filterForFavorite: false,
  arrWithTitles: [],
};

/* eslint-disable no-param-reassign */

const quizleSlice = createSlice({
  name: `${moduleName}`,
  initialState,
  redusers: {},
  extraReducers: (builder) => {
    builder.addCase(thuncksQuizles.fulfilled, (state, action) => {
      state.arrWithTitles = action.payload.map((data) => data.quizTitle);
      state.quizles = action.payload;
      state.filterQuizlesArr = state.quizles;
    });
    builder.addCase(filterQuizles, (state, action) => {
      state.filterQuizlesArr = state.quizles;
      state.filterQuizlesArr = state.quizles.filter(
        (quizle) => quizle.quizTitle.toLowerCase().includes(action.payload.toLowerCase()),
      );
    });
    builder.addCase(actionFavorite, (state) => {
      state.filterForFavorite = !state.filterForFavorite;
      if (state.filterForFavorite) {
        state.filterQuizlesArr = state.quizles;
        state.filterQuizlesArr = state.quizles.filter(
          (quizle) => quizle.Favorite.toString().includes(true),
        );
      } else {
        state.filterQuizlesArr = state.quizles;
      }
    });
  },
});

export default quizleSlice.reducer;
