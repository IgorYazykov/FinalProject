import React from 'react';
import './ButtonFavorit.css';
import { useDispatch } from 'react-redux';
import { actionFavorite } from '../../store/modules/getQuizles/actionFavorite';

export default function ButtonFavorit() {
  const dispatch = useDispatch();

  const checked = () => {
    dispatch(actionFavorite());
  };

  return (
    <div className='buttonFavorit' onClick={ checked }>
      <p>Favorite</p>
    </div>
  );
}
