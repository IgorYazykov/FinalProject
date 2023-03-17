import React, { useState } from "react";
import "./RenderCardQuize.css";

export default function RenderCardQuize({id, fullDiscription, title, description, img}) {
    let [showStartModul, setShowStartModul] = useState(false);
    const clickStart = () =>{
        setShowStartModul(!showStartModul)
    }

    let [showMoreInformationModul, setShowMoreInformationModul] = useState(false);
    const clickMore = () =>{
        setShowMoreInformationModul(!showMoreInformationModul)
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
                showStartModul && 
                <div className="containerModal">
                    <div className="startedModal">
                        <p>You are started quize!</p>
                        <div onClick={clickStart} className="buttonCloss">Close</div>
                    </div>
                </div>
            },
            {
                showMoreInformationModul &&
                <div className="containerModal">
                    <div className="moreModal">
                        <img className="imgFromMore" src={img} alt={title}/>
                        <div className="moreTextContainer">
                            <p className="titleCardMore">{title}</p>
                            <p className="themeMore"> {fullDiscription}</p>
                            <div onClick={clickMore} className="buttonClossMore">Close</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}