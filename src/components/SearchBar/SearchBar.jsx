import React from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { filterQuizles } from '../../store/modules/getQuizles/actionFilter';

export default function Input() {
  const dispatch = useDispatch();

  const inputData = (event) => {
    dispatch(filterQuizles(event.target.value));
  };

  return (
    <div className='input'>
      <img src='../../img/loupe.png' alt='loupe' />
      <input type='text' onChange={inputData} />
    </div>
  );
}
