import { createSlice } from '@reduxjs/toolkit';
import { moduleName } from './constants';
import getCreateObj from './action';
import getCountObj from './actionGetCounter';
import { putNewQuestion, putNewQuizle } from '../../../api';

const initialState = {
  getObj: {},
  quizTitle: '',
  quizDescription: '',
  image: '',
  fullDiscription: '',
  Question: '',
  Answers: [],
  TrueAnswer: '',
  KeyFoTest: '',
  Name: '',
  questionTitle: '',
  quizelLogo: {},
  questions: {},
  counter: 0,
};

/* eslint-disable no-param-reassign */

const getObjSlice = createSlice({
  name: `${moduleName}`,
  initialState,
  redusers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountObj, (state, action) => {
      state.counter = action.payload;
    });
    builder.addCase(getCreateObj, (state, action) => {
      state.getObj = action.payload;
      // получение темы для вопросов и квиза
      state.questionTitle = state.getObj.Title;
      for (let i = 0; i < state.counter; i += 1) {
        // полученый вопрос из объекта
        const arrWithQuwestionGet = [];
        arrWithQuwestionGet.push(`Question${i}`);
        state.Question = state.getObj[arrWithQuwestionGet];
        // все ответы полученые из объекта
        const arrWithValueIterationFirst = [];
        const arrWithValueIterationTwo = [];
        const arrWithValueIterationThree = [];
        const arrWithValueIterationFour = [];
        arrWithValueIterationFirst.push(`FirstAnswers${i}`);
        arrWithValueIterationTwo.push(`SecondAnswers${i}`);
        arrWithValueIterationThree.push(`ThirdAnswers${i}`);
        arrWithValueIterationFour.push(`FourthAnswers${i}`);
        state.Answers.push(
          state.getObj[arrWithValueIterationFirst],
          state.getObj[arrWithValueIterationTwo],
          state.getObj[arrWithValueIterationThree],
          state.getObj[arrWithValueIterationFour],
        );
        // получение правильного ответа
        const arrWithTrueAnswer = [];
        arrWithTrueAnswer.push(`CorrectAnswer${i}`);
        state.TrueAnswer = state.getObj[arrWithTrueAnswer];
        // создание имени для вопроса
        const NameForQuestion = `${state.getObj.Title}${i}`;
        state.Name = NameForQuestion;
        // формирование объекта
        state.questions = {
          Question: state.Question,
          Answers: state.Answers,
          TrueAnswer: state.TrueAnswer,
          Name: state.Name,
          questionTitle: state.questionTitle,
          id: '',
        };
        const data = {
          method: 'post',
          url: 'https://63f4faff3f99f5855dbb7d69.mockapi.io/api/Question',
          data: state.questions,
        };
        putNewQuestion.fetch(data);
        state.Question = '';
        state.Answers = [];
        state.TrueAnswer = '';
        state.Name = '';
        state.questions = {};
      }
      // получение описания квиза
      state.quizDescription = state.getObj.TitleDescription;
      // получения картинки
      state.image = state.getObj.image;
      // получение полного описания
      state.fullDiscription = state.getObj.FullDescription;
      // получение темы для вопросов и квиза
      state.quizTitle = state.getObj.Title;
      state.quizelLogo = {
        quizTitle: state.quizTitle,
        quizDescription: state.quizDescription,
        image: state.image,
        fullDiscription: state.fullDiscription,
        favorite: false,
        id: '',
      };
      const data = {
        method: 'post',
        url: 'https://63f4faff3f99f5855dbb7d69.mockapi.io/api/quizl',
        data: state.quizelLogo,
      };
      putNewQuizle.fetch(data);
      state.quizTitle = '';
      state.quizDescription = '';
      state.image = '';
      state.fullDiscription = '';
      state.KeyFoTest = '';
      state.quizelLogo = {};
      state.counter = 0;
    });
  },
});

export default getObjSlice.reducer;
