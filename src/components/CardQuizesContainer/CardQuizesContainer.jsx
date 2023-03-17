import React, { useEffect, useState } from "react";
import RenderCardQuize from "../RenderCardQuize/RenderCardQuize";
import './CardQuizesContainer.css';
import {quizles} from "../../api/index"

export default function CardQuize () {
    const [quizlesData, setQuizlsData]= useState([]);

    useEffect(() => {
        (async () =>{
            try{
                const { data } = await quizles.fetch();
                setQuizlsData(data)
                console.log (data)
            } catch (err) {
                console.log(err)
            }
        })();
    },[])

    return (
        <div className="cardContainer">
            {quizlesData.map((quizleData)=><RenderCardQuize key={quizleData.id} id={quizleData.id} fullDiscription={quizleData.fullDiscription} title={quizleData.quizTitle} description={quizleData.quizDescription} img={quizleData.image}/>)}
        </div>
    )
}