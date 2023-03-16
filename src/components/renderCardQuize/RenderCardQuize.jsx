import React, { useState } from "react";
import "./renderCard.css";

export default function RenderCardQuize({id, fullDiscription, title, description, img}) {
    let [buttonStart, setButtonStart] = useState(false);
    const clickStart = () =>{
        setButtonStart(!buttonStart)
    }

    let [buttonMore, setButtonMore] = useState(false);
    const clickMore = () =>{
        setButtonMore(!buttonMore)
    }

    return(
        <div className="card">
            <img className="imgCard" src={img} alt={title}/>
            <p className="titleCard">{title}</p>
            <p className="description">{description}</p>
            <div className="buttonContainer">
                <div onClick={clickStart} className="buttonStart">Star</div>
                <div onClick={clickMore} className="buttonMore">More</div>
            </div>
            {
                buttonStart && 
                <div className="containerModal">
                    <div className="startedModal">
                        <p>You are started quize!</p>
                        <div onClick={clickStart} className="buttonCloss">Close</div>
                    </div>
                </div>
            },
            {
                buttonMore &&
                <div className="containerModal">
                    <div className="moreModal">
                        <img className="imgFromMore" src={img} alt={title}/>
                        <div className="moreTextContainer">
                            <p className="titleCardMore">{title}</p>
                            {/* <p className="descriptionMore">{description}</p> */}
                            <p className="themeMore"> {fullDiscription}</p>
                            <div onClick={clickMore} className="buttonClossMore">Close</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}