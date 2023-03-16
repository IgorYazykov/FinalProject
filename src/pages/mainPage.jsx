import React from "react";
import Header from "../components/header/header";
import NavBord from "../components/nav-bord/nav-bord";
import ButtonCreateModal from "../components/buttonCreateAndModal/buttonCreateAndModal";
import CardQuize from "../components/CardQuize/CardQuize";
import Footer from "../components/footer/footer";
import MobailNavBoard from "../components/mobailNavBord/mobailNavBord";

export default function MainPage () {
    return(
        <div>
            <Header></Header>
            <NavBord></NavBord>
            <MobailNavBoard></MobailNavBoard>
            <ButtonCreateModal></ButtonCreateModal>
            <CardQuize></CardQuize>
            <Footer></Footer>
        </div>
    )
}