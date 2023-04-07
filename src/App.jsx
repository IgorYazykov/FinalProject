import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quizle from './pages/Quizle';
import Header from './components/Header/Header';
import QuestionOfQuizle from './pages/QuestionOfQuizle';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route index element = {<Quizle/>} path = '/'/>
        <Route path = '/Quizle/*' element = {<QuestionOfQuizle/>}/>
        <Route path = '/Quizle/*' element = {<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
