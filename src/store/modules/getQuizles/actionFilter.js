import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

export const filterQuizles = createAction(`${moduleName}/filterQuizles`, (payload) => ({ payload }));

export default filterQuizles;
