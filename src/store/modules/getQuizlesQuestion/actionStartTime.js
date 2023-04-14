import { createAction } from '@reduxjs/toolkit';
import { moduleNameForClear } from './constants';

export const startTime = createAction(`${moduleNameForClear}/startTime`);

export default startTime;
