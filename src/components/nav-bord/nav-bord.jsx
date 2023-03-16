import React from "react";
import './nav-bord.css';
// import axios from "axios";
import Input from "../inputText/input";
import ButtonFavorit from "../buttonFavorit/buttonFavorit";


export default function NavBord () {

    return (
        <div className="right_bord_container">
            <p className="right_bord_title">Quizzes menu</p>
            <Input></Input>
            <ButtonFavorit></ButtonFavorit>
        </div>
    )
}