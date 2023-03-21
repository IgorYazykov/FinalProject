import RenderCardQuize from "../RenderCardQuize/RenderCardQuize";
import './CardQuizesContainer.css';
import {quizles} from "../../api/index";
import { Component } from "react";

export default class CardQuizesContainer extends Component {
    state = {
        quizlesData: []
    }

    constructor() {
        super();
    }

    render() {
        return (
            <div className="cardContainer">
                {this.state.quizlesData.map((quizleData) => (
                    <RenderCardQuize 
                        key={quizleData.id} 
                        id={quizleData.id} 
                        fullDiscription={quizleData.fullDiscription} 
                        title={quizleData.quizTitle} 
                        description={quizleData.quizDescription} 
                        img={quizleData.image}
                    />
                ))}
            </div>
        )
    }

    componentDidMount() {
        const data = quizles.fetch()
        .then(
            (data) => {
                this.setState({
                    quizlesData: data.data
                });
            }
        )
        .catch(
            (err) => {
                console.log(err)
            }
        ) 
    }
}