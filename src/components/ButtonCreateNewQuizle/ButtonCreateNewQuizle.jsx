import React, { useState } from "react";
import "./ButtonCreateNewQuizle.css";

export default function ButtonCreate () {
    let [showCreateQuizeModal, setCreateQuizeModal] = useState(false);
    const clickCreateQuize = () =>{
        setCreateQuizeModal(!showCreateQuizeModal)
    }
    
    return (
        <div>
            <div onClick={clickCreateQuize} className="imgContainer">
                <img className="imgTool" src="../../img/toolFix.png" alt="toolFix" />
            </div>
            {
                showCreateQuizeModal && 
                <div className="modalBody">
                    <div className="modalContainer">
                        <div onClick={clickCreateQuize} id="buttonSendCloss">back</div>
                        <div  id="buttonSend">add</div>
                    </div>
                </div>
            }
        </div>
    )
}