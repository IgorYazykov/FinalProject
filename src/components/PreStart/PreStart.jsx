import React from 'react';
import { Link } from 'react-router-dom';
import './PreStart.css';

export default function PreStart() {
  const imgOfQuizl = sessionStorage.getItem('img');
  const imgTitleOfQuizle = sessionStorage.getItem('title');

  return (
    <div className='windosOfPreStarty'>
      <div className='startingContainer'>
        <img className='preStartPicture' src={imgOfQuizl} alt={imgTitleOfQuizle}/>
        <div className='containerForSmallText'>
          <p>You have 8 question, and 5 minutes</p>
        </div>
        <div className='containerForButton'>
            <div className='start'>
              <Link
                className='link'
                style={{ textDecoration: 'none' }}
                to={`${imgTitleOfQuizle}`}
              >
                Start
              </Link>
            </div>
            <div className='home'>
              <Link
                className='link'
                style={{ textDecoration: 'none' }}
                to={'/'}
              >
                Home
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
}
