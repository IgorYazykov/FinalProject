import React from 'react';
import './ButtonFavorit.css';

export default function buttonFavorit({ onClick }) {
  const checked = () => {
    onClick();
  };

  return (
    <div className='buttonFavorit' onClick={ checked }>
      <p>Favorite</p>
    </div>
  );
}
