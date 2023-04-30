import { createAction } from '@reduxjs/toolkit';
import { moduleName } from './constants';

export const actionFavorite = createAction(`${moduleName}/actionFavorite`);

export default actionFavorite;
