import { createAction } from '@reduxjs/toolkit';
import { moduleNameForClear } from './constants';

export const stopTime = createAction(`${moduleNameForClear}/stopTime`);

export default stopTime;
