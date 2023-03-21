import { Component } from "react";
import "./ButtonCreateNewQuizle.css";

export default class ButtonCreate extends Component {
    state = {
        showCreateQuizeModal: false
    }
    
    constructor() {
        super();
        this.clickCreateQuize = this.clickCreateQuize.bind(this);
    }

    render() {
        return (
            <div>
                <div onClick={this.clickCreateQuize} className="imgContainer">
                    <img className="imgTool" src="../../img/toolFix.png" alt="toolFix" />
                </div>
                {this.state.showCreateQuizeModal && 
                    <div className="modalBody">
                        <div className="modalContainer">
                            <div onClick={this.clickCreateQuize} id="buttonSendCloss">back</div>
                            <div  id="buttonSend">add</div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    clickCreateQuize() {
        this.setState({ showCreateQuizeModal: !this.state.showCreateQuizeModal })
    }
}