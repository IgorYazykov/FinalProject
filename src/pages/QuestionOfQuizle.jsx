import React from 'react';
import { Routes, Route } from 'react-router';
import QuizleRender from '../components/QuizleRender/QuizleRender';
import PreStart from '../components/PreStart/PreStart';

export default function QuestionOfQuizle() {
  return (
    <Routes>
      {/* <Route path='/:name' element={<QuizleRender/>}/> */}
      <Route path='/prestart' element={<PreStart/>}/>
      <Route path='/prestart/:name' element={<QuizleRender/>}/>
    </Routes>
  );
}
