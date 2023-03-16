import React, { useState } from "react";
import "./buttonCreate.css";

export default function ButtonCreate () {
    let [button, setButton] = useState(false);
    const clickCreateQuize = () =>{
        setButton(!button)
    }
    
    return (
        <div>
            <div onClick={clickCreateQuize} className="imgContainer">
                <img className="imgTool" src="../../img/toolFix.png" alt="toolFix" />
            </div>
            {
                button && 
                <div className="modalBody">
                    <div className="modalContainer">
                        {/* <input id="inputQuizTitle" type="text" />Title
                        <input id="quizDescription" type="text" />Description
                        <input id="themeOfQuizl" type="text" />theme */}
                        <div onClick={clickCreateQuize} id="buttonSendCloss">back</div>
                        <div  id="buttonSend">add</div>
                    </div>
                </div>
            }
        </div>
    )
}