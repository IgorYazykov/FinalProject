import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { questions } from '../../api/index';
import './QuizleRender.css';
import NotFoundElem from '../NotFoundElem/NotFoundElem';

export default function QuizleRender() {
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const getPadTime = (time) => time.toString().padStart();

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  const { name } = useParams();

  const [quizleQuestion, setquizleQuestion] = useState([]);
  const [counter, setCounter] = useState(0);
  const [checkModal, setcheckModal] = useState(false);
  const [stopTimer, setStopTimer] = useState(true);
  const [endTime, setEndTime] = useState(true);

  const [arrWithAnswer, setArrWithAnswer] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await questions.fetch(name);
        setquizleQuestion(data);
      } catch (err) {
        console.log(err);
        setNotFound(true);
      }
    })();
  }, []);

  const setAnswer = (id, value) => {
    arrWithAnswer[id] = value;
    setArrWithAnswer(arrWithAnswer);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (stopTimer === true) {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }
    }, 1000);
    return () => { clearInterval(interval); };
  }, [stopTimer]);

  function getAnswerAndCheck() {
    let newCount = 0;
    arrWithAnswer.map((item, i) => {
      const { TrueAnswer } = quizleQuestion[i];
      if (item === TrueAnswer) {
        newCount += 1;
      }
      setEndTime(!endTime);
      return counter;
    });
    setCounter(newCount);
    setcheckModal(!checkModal);
    setStopTimer(!stopTimer);
  }

  function timer() {
    const timerEnd = setTimeout(() => {
      getAnswerAndCheck();
      clearTimeout(timerEnd);
      setEndTime(!endTime);
    }, 300000);
  }

  if (endTime) {
    timer();
  }

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
                <p className='homeButton'>Go home</p>
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
