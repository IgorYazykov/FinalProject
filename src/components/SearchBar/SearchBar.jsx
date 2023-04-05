import React from 'react';
import './SearchBar.css';

export default function Input({ onInput }) {
  const inputData = (event) => {
    onInput(event.target.value);
  };

  return (
    <div className='input'>
      <img src='../../img/loupe.png' alt='loupe' />
      <input type='text' onInput={inputData} />
    </div>
  );
}
