import React, { useState } from 'react';
import './NavBoard.css';
import SearchBar from '../SearchBar/SearchBar';
import ButtonFavorit from '../ButtonFavorit/ButtonFavorit';

export default function NavBoard({ setInput, giveCheckFavorit }) {
  const [dataInput, setDataInput] = useState('');

  const getInputValue = (dataInput) => {
    setDataInput(dataInput);
    setInput(dataInput);
  };
  dataInput.toLowerCase();

  const [reCheck, setconstReCheck] = useState(false);

  const setFavorit = () => {
    setconstReCheck(!reCheck);
    giveCheckFavorit(reCheck);
  };

  return (
    <div className='right_bord_container'>
      <p className='right_bord_title'>Quizzes menu</p>
      <SearchBar onInput={getInputValue}/>
      <ButtonFavorit onClick={setFavorit}/>
    </div>
  );
}
