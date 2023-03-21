import { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="containerFotter">
                <div className="footerInfoContainer">
                    <div className="imageContact">
                        <div> 
                            <img src="../../img/phone.png" alt="phone" /> 
                            <p>333333333</p> 
                        </div>
                        <div> 
                            <img src="../../img/mail.png" alt="gmail" /> 
                            <p>abs@gmail.com</p> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
