import React from 'react';
import './NavBoard.css';
import SearchBar from '../SearchBar/SearchBar';
import ButtonFavorit from '../ButtonFavorit/ButtonFavorit';

export default function NavBoard() {
  return (
    <div className='right_bord_container'>
      <p className='right_bord_title'>Quizzes menu</p>
      <SearchBar/>
      <ButtonFavorit />
    </div>
  );
}
