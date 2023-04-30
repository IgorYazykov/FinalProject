import { createAction } from '@reduxjs/toolkit';
import { moduleNameForAction } from './constants';

export const getAnswer = createAction(`${moduleNameForAction}/getAnswer`, (payload) => ({ payload }));

export default getAnswer;
