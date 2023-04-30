import React from 'react';
import './ButtonCreateNewQuizle.css';
import { Link } from 'react-router-dom';

export default function ButtonCreate() {
  return (
    <div>
      <div className="imgContainer">
        <Link to={'/CreateQuizles'}>
          <img className="imgTool" src="../../img/toolFix.png" alt="toolFix" />
        </Link>
      </div>
    </div>
  );
}
