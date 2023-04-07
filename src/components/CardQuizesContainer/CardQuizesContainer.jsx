import React, { useEffect, useState } from 'react';
import RenderCardQuize from '../RenderCardQuize/RenderCardQuize';
import Footer from '../Footer/Footer';
import './CardQuizesContainer.css';
import { quizles } from '../../api/index';

export default function CardQuize({ props, check }) {
  const [quizlesData, setQuizlsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await quizles.fetch();
        setQuizlsData(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const updtaeDtae = async () => {
    try {
      const { data } = await quizles.fetch();
      setQuizlsData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const filtredArr = quizlesData.filter((data) => {
    const quizleTitle = data.quizTitle.toLowerCase();
    const quizleFavorite = data.Favorite.toString();
    const serchData = props.toLowerCase();
    if (check) {
      return quizleFavorite.includes('true');
    }
    return quizleTitle.includes(serchData);
  });

  return (
    <div>
      <div className="cardContainer">
        {filtredArr.map((quizleData) => (
          <RenderCardQuize
            key={quizleData.quizTitle}
            id={quizleData.id}
            fullDiscription={quizleData.fullDiscription}
            title={quizleData.quizTitle}
            description={quizleData.quizDescription}
            img={quizleData.image}
            favor={quizleData.Favorite}
            func={updtaeDtae}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
}
