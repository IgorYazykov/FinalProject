import { Component } from "react";
import "./RenderCardQuize.css";

export default class RenderCardQuize extends Component {
    state = {
        showStartModul: false,
        showMoreInformationModul: false
    }

    constructor() {
        super();
        this.clickStart = this.clickStart.bind(this);
        this.clickMore = this.clickMore.bind(this);
    }

    render() {
        const {id, fullDiscription, title, description, img} = this.props;
        return(
            <div className="card">
                <img className="imgCard" src={img} alt={title}/>
                <p className="titleCard">{title}</p>
                <p className="description">{description}</p>
                <div className="buttonContainer">
                    <div onClick={this.clickStart} className="buttonStart">Star</div>
                    <div onClick={this.clickMore} className="buttonMore">More</div>
                </div>
                {this.state.showStartModul && 
                    <div className="containerModal">
                        <div className="startedModal">
                            <p>You are started quize!</p>
                            <div onClick={this.clickStart} className="buttonCloss">Close</div>
                        </div>
                    </div>
                },
                {this.state.showMoreInformationModul &&
                    <div className="containerModal">
                        <div className="moreModal">
                            <img className="imgFromMore" src={img} alt={title}/>
                            <div className="moreTextContainer">
                                <p className="titleCardMore">{title}</p>
                                <p className="themeMore"> {fullDiscription}</p>
                                <div onClick={this.clickMore} className="buttonClossMore">Close</div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )        
    }

    clickStart() {
        this.setState({ showStartModul: !this.state.showStartModul})
    }

    clickMore() {
        this.setState({ showMoreInformationModul: !this.state.showMoreInformationModul})
    }
}