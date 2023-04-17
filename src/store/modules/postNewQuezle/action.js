import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

export const getCreateObj = createAction(`${moduleName}/getCreateObj`, (payload) => ({ payload }));

export default getCreateObj;
