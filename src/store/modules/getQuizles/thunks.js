import { createAsyncThunk } from '@reduxjs/toolkit';
import { quizlesAxios } from '../../../api';
import { moduleName } from './constants';

export const fetchQuizles = createAsyncThunk(
  `${moduleName}/fetchQuizles`,
  async () => {
    const { data } = await quizlesAxios.fetch();
    return data;
  },
);

export default fetchQuizles;
