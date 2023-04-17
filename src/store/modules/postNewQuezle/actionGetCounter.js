import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

export const getCountObj = createAction(`${moduleName}/getCountObj`, (payload) => ({ payload }));

export default getCountObj;
