import React, { useState } from 'react';
import CardQuizesContainer from '../components/CardQuizesContainer/CardQuizesContainer';
import NavBoard from '../components/NavBoard/NavBoard';
import MobailNavBoard from '../components/MobailNavBoard/MobailNavBoard';
import ButtonCreateNewQuizle from '../components/ButtonCreateNewQuizle/ButtonCreateNewQuizle';

export default function MainPage() {
  const [input, setInput] = useState('');
  const [checkFavorit, setCheckFavorit] = useState(false);
  const giveCheck = (check) => {
    setCheckFavorit(check);
  };

  return (
    <div>
      <NavBoard setInput={setInput} giveCheckFavorit={giveCheck}/>
      <MobailNavBoard setInput={ setInput } giveCheckFavorit={giveCheck}/>
      <ButtonCreateNewQuizle/>
      <CardQuizesContainer props={input} check={checkFavorit}/>
    </div>
  );
}
