import React, { useState } from "react";
import './mobailNavBord.css';
import Input from "../inputText/input";
import ButtonFavorit from "../buttonFavorit/buttonFavorit";

export default function MobailNavBoard () {
    let [showMobileModal, setShowMobileModal] = useState(false);
    const clickShowMobileModal = () => {
        setShowMobileModal(!showMobileModal);
    };

    return(
        <div className="mobileMenu">
            {!showMobileModal && <img onClick={clickShowMobileModal} className="mobileMenuImg" src="../../img/menu.png" alt="mobileMenu" />}
            {showMobileModal && <div className="mobailModalContainer">
                <Input></Input>
                <ButtonFavorit></ButtonFavorit>
                <div className="buttonCloseMob" onClick={clickShowMobileModal}>Close</div>
            </div>}
        </div>
    )
}