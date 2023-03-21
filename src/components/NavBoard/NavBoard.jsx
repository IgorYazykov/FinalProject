import './NavBoard.css';
import SearchBar from "../SearchBar/SearchBar";
import ButtonFavorit from "../ButtonFavorit/ButtonFavorit";
import { Component } from 'react';

export default class NavBoard extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="right_bord_container">
                <p className="right_bord_title">Quizzes menu</p>
                <SearchBar/>
                <ButtonFavorit/>
            </div>
        )
    }
}