import { createAction } from '@reduxjs/toolkit';
import { moduleNameForClear } from './constants';

export const clearStore = createAction(`${moduleNameForClear}/getAnswer`);

export default clearStore;
