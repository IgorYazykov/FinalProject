import { createAsyncThunk } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import { questions } from '../../../api';

export const fetchQuestion = createAsyncThunk(
  `${moduleName}/fetchQuestion`,
  async (name) => {
    try {
      const { data } = await questions.fetch();
      return { data, name };
    } catch (err) {
      console.log(err);
      return [];
    }
  },
);

export default fetchQuestion;
