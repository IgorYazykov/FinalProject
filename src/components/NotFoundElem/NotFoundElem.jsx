import React from 'react';
import './NotFoundElem.css';

export default function NotFoundElem() {
  return (
    <div className='notFoundContainer'>
      <p className='numberErrorFound'>404</p>
      <div className='gifContainer'>
        <img className='imgNotFound' src='../../img/cat-notFound.gif' alt="cat-notFound" />
      </div>
      <p className='nameErrorFound'>Not Found</p>
    </div>
  );
}
