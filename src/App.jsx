import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Quizle from './pages/Quizle';
import Header from './components/Header/Header';
import QuestionOfQuizle from './pages/QuestionOfQuizle';
import NotFound from './pages/NotFound';
import store from './store';
import CreateQuizles from './pages/CreateQuizles';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header/>
        <Routes>
          <Route index element = {<Quizle/>} path = '/'/>
          <Route path = '/Quizle/*' element = {<QuestionOfQuizle/>}/>
          <Route path = '/Quizle/*' element = {<NotFound/>}/>
          <Route path = '/CreateQuizles' element = {<CreateQuizles/>}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
