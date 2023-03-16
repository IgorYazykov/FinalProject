import GetData from "../Constants/GetData";
import RenderCardQuize from "../renderCardQuize/RenderCardQuize";
import './CardQuize.css';

export default function CardQuize () {
    let topics = GetData();

    return (
        <div className="cardContainer">
            {topics.map((topic)=><RenderCardQuize key={topic.id} id={topic.id} fullDiscription={topic.fullDiscription} title={topic.quizTitle} description={topic.quizDescription} img={topic.image}/>)}
        </div>
    )
}