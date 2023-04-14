import { createAction } from '@reduxjs/toolkit';
import { moduleNameForAction } from './constants';

export const getTrueAnswer = createAction(`${moduleNameForAction}/getTrueAnswerAndCheck`);

export default getTrueAnswer;
