import './MobailNavBoard.css';
import SearchBar from "../SearchBar/SearchBar";
import ButtonFavorit from "../ButtonFavorit/ButtonFavorit";
import { Component } from 'react';

export default class MobailNavBoard extends Component {
    state = {
        showMobileModal: false
    }

    constructor() {
        super ();
        this.clickShowMobileModal = this.clickShowMobileModal.bind(this);
    }

    render() {
        return(
            <div className="mobileMenu">
                {!this.state.showMobileModal && <img onClick={this.clickShowMobileModal} className="mobileMenuImg" src="../../img/menu.png" alt="mobileMenu" />}
                {this.state.showMobileModal && <div className="mobailModalContainer">
                    <SearchBar/>
                    <ButtonFavorit/>
                    <div className="buttonCloseMob" onClick={this.clickShowMobileModal}>Close</div>
                </div>}
            </div>
        )
    }

    clickShowMobileModal() {
        this.setState ({ showMobileModal: !this.state.showMobileModal})
    }
}