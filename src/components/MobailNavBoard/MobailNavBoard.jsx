import React, { useState } from "react";
import './MobailNavBoard.css';
import SearchBar from "../SearchBar/SearchBar";
import ButtonFavorit from "../ButtonFavorit/ButtonFavorit";

export default function MobailNavBoard () {
    let [showMobileModal, setShowMobileModal] = useState(false);
    const clickShowMobileModal = () => {
        setShowMobileModal(!showMobileModal);
    };

    return(
        <div className="mobileMenu">
            {!showMobileModal && <img onClick={clickShowMobileModal} className="mobileMenuImg" src="../../img/menu.png" alt="mobileMenu" />}
            {showMobileModal && <div className="mobailModalContainer">
                <SearchBar/>
                <ButtonFavorit/>
                <div className="buttonCloseMob" onClick={clickShowMobileModal}>Close</div>
            </div>}
        </div>
    )
}