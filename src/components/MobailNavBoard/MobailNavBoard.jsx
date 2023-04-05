import React, { useState } from 'react';
import './MobailNavBoard.css';
import SearchBar from '../SearchBar/SearchBar';
import ButtonFavorit from '../ButtonFavorit/ButtonFavorit';

export default function MobailNavBoard({ setInput, giveCheckFavorit }) {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const clickShowMobileModal = () => {
    setShowMobileModal(!showMobileModal);
  };

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
    <div className="mobileMenu">
      {!showMobileModal && <img onClick={clickShowMobileModal} className="mobileMenuImg" src="../../img/menu.png" alt="mobileMenu" />}
      {showMobileModal && <div className="mobailModalContainer">
        <SearchBar onInput={getInputValue} />
        <ButtonFavorit onClick={setFavorit}/>
        <div className="buttonCloseMob" onClick={clickShowMobileModal}>Close</div>
      </div>}
    </div>
  );
}
