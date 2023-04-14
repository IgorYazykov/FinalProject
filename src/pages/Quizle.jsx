import React from 'react';
import CardQuizesContainer from '../components/CardQuizesContainer/CardQuizesContainer';
import NavBoard from '../components/NavBoard/NavBoard';
import MobailNavBoard from '../components/MobailNavBoard/MobailNavBoard';
import ButtonCreateNewQuizle from '../components/ButtonCreateNewQuizle/ButtonCreateNewQuizle';

export default function MainPage() {
  return (
    <div>
      <NavBoard />
      <MobailNavBoard />
      <ButtonCreateNewQuizle/>
      <CardQuizesContainer />
    </div>
  );
}
