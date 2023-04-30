import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './QuizleRender.css';
import NotFoundElem from '../NotFoundElem/NotFoundElem';
import { fetchQuestion } from '../../store/modules/getQuizlesQuestion/thunks';
import { getAnswer } from '../../store/modules/getQuizlesQuestion/action';
import { getTrueAnswer } from '../../store/modules/getQuizlesQuestion/actionCheck';
import { stopTime } from '../../store/modules/getQuizlesQuestion/actionSetStop';
import { startTime } from '../../store/modules/getQuizlesQuestion/actionStartTime';
import { clearStore } from '../../store/modules/getQuizlesQuestion/actionClearAnswer';

export default function QuizleRender() {
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const getPadTime = (time) => time.toString().padStart();

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  const { name } = useParams();

  const [checkModal, setcheckModal] = useState(false);
  const [startWindow, setStartWindow] = useState(true);

  const counter = useSelector((state) => state.questionReduser.counter);
  const quizleQuestion = useSelector((state) => state.questionReduser.question);
  const notFound = useSelector((state) => state.questionReduser.notFound);
  const stopTimer = useSelector((state) => state.questionReduser.stopTimer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStore());
    dispatch(fetchQuestion(name));
  }, [dispatch]);

  const setAnswer = (id, value) => {
    dispatch(startTime());
    dispatch(getAnswer({ id, value }));
  };

  if (startWindow) {
    dispatch(startTime());
    setStartWindow(!startWindow);
  }

  function getAnswerAndCheck() {
    dispatch(getTrueAnswer());
    setcheckModal(!checkModal);
    dispatch(stopTime());
  }

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (stopTimer === true) {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }
    }, 1000);

    const timerEnd = setInterval(() => {
      if (stopTimer) {
        dispatch(getTrueAnswer());
        setcheckModal(!checkModal);
        dispatch(stopTime());
        clearTimeout(timerEnd);
      }
    }, 300000);

    return () => { clearInterval(interval); };
  });

  return (
    <div className='questionContainer'>
      <div className='timercontainer'>
        <div className='clockContainer'>
          <div className='clock'>
            <p>{minutes}</p>
            <p>:</p>
            <p>{seconds}</p>
          </div>
        </div>
      </div>
      <div className='questionFormContainer'>
        <form>
          {quizleQuestion.map((dataQuestion) => (
            <div key={dataQuestion.id}>
              <label className='question'>{dataQuestion.Question}</label>
              <div className='answerContainer'>
                {
                  dataQuestion.Answers.map((answers) => (
                    (<label key={answers} className='answers'>
                      <input
                      className='inputRadio'
                      type='radio'
                      name={dataQuestion.Name}
                      value={answers}
                      onClick={((e) => { setAnswer(dataQuestion.id, e.target.value); })}
                      />
                    {answers}</label>)
                  ))
                }
              </div>
          </div>
          ))}
          <div onClick={getAnswerAndCheck} className='buttonSend'>Send</div>
        </form>
        {checkModal && <div className='containerFinalScore'>
          <div className='finalScoreBody'>
            <div className='ScoreAndButton'>
              <div className='fixTitle'>
                <p className='discriptionOfEnd'>You end {name.toLocaleLowerCase()} quizle</p>
              </div>
              <div>
                <p className='score'>Score: </p>
                <p className='scoreCounter'>{counter}/8</p>
              </div>
              <div>
                <p className='score'>Time: </p>
                <p className='scoreCounter'>{minutes}:{seconds}</p>
              </div>
              <div className='homeButton'>
                <Link
                style={{ textDecoration: 'none' }}
                to={'/'}>
                <p className='homeButton' >Go home</p>
                </Link>
              </div>
            </div>
          </div>
          </div>
        }
      </div>
      {
        notFound && <NotFoundElem/>
      }
    </div>
  );
}
