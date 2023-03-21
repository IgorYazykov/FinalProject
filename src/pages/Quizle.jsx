import React, { Component } from "react";
import Header from "../components/Header/Header";
import NavBoard from "../components/NavBoard/NavBoard";
import ButtonCreateNewQuizle from "../components/ButtonCreateNewQuizle/ButtonCreateNewQuizle";
import CardQuizesContainer from "../components/CardQuizesContainer/CardQuizesContainer";
import Footer from "../components/Footer/Footer";
import MobailNavBoard from "../components/MobailNavBoard/MobailNavBoard";

export default class MainPage extends Component{
    constructor() {
        super()
    }

    render() {
        return(
            <div>
                <Header/>
                <NavBoard/>
                <MobailNavBoard/>
                <ButtonCreateNewQuizle/>
                <CardQuizesContainer/>
                <Footer/>
            </div>
        )        
    }
}