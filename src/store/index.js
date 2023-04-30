import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizleReducer from './modules/getQuizles/redusers';
import questionReduser from './modules/getQuizlesQuestion/redusers';
import getObjReduser from './modules/postNewQuezle/reduser';

const rootReducer = combineReducers({
  quizleReducer,
  questionReduser,
  getObjReduser,
});

export default configureStore({
  reducer: rootReducer,
});
