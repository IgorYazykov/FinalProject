import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RenderCardQuize from '../RenderCardQuize/RenderCardQuize';
import Footer from '../Footer/Footer';
import './CardQuizesContainer.css';
import { fetchQuizles } from '../../store/modules/getQuizles/thunks';

export default function CardQuize() {
  const filterQuizlesArr = useSelector((state) => state.quizleReducer.filterQuizlesArr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuizles());
  }, [dispatch]);

  const updtaeDtae = async () => {
    try {
      dispatch(fetchQuizles());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="cardContainer">
        {filterQuizlesArr.map((quizleData) => (
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
