import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizleReducer from './modules/getQuizles/redusers';
import questionReduser from './modules/getQuizlesQuestion/redusers';

const rootReducer = combineReducers({
  quizleReducer,
  questionReduser,
});

export default configureStore({
  reducer: rootReducer,
});
