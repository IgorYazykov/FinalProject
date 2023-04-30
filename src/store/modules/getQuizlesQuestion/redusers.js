import { createSlice } from '@reduxjs/toolkit';
import fetchQuestion from './thunks';
import { moduleName } from './constants';
import { getAnswer } from './action';
import { getTrueAnswer } from './actionCheck';
import clearStore from './actionClearAnswer';
import stopTime from './actionSetStop';
import startTime from './actionStartTime';

const initialState = {
  answers: [],
  counter: 0,
  truAnswer: [],
  notFound: false,
  question: [],
  stopTimer: true,
};

/* eslint-disable no-param-reassign */

const questionSlice = createSlice({
  name: `${moduleName}`,
  initialState,
  redusers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestion.fulfilled, (state, action) => {
      state.question = action.payload;
      state.truAnswer = action.payload.map((data) => data.TrueAnswer);
      // state.question = action.payload.filter((data) => data.KeyForTest === 'setOne');
      if (state.question.length === 0) {
        state.notFound = true;
      } else {
        state.notFound = false;
      }
    });
    builder.addCase(getAnswer, (state, action) => {
      const { id } = action.payload;
      const { value } = action.payload;
      state.answers[id] = (value);
    });
    builder.addCase(getTrueAnswer, (state) => {
      state.counter = 0;
      state.truAnswer.map((item, i) => {
        const Answer = state.answers[i];
        if (item === Answer) {
          state.counter += 1;
        }
        return state.counter;
      });
    });
    builder.addCase(clearStore, (state) => {
      state.answers = [];
    });
    builder.addCase(stopTime, (state) => {
      state.stopTimer = false;
    });
    builder.addCase(startTime, (state) => {
      state.stopTimer = true;
    });
  },
});

export default questionSlice.reducer;
