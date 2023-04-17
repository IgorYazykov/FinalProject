import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './CreateComponent.css';
import { useForm } from 'react-hook-form';
import TextInput from '../TextInput/TextInput';
import { quizleRules } from '../../constants/rules';
import getCreateObj from '../../store/modules/postNewQuezle/action';
import getCountObj from '../../store/modules/postNewQuezle/actionGetCounter';

export default function CreateComponent() {
  const { control, handleSubmit, getValues } = useForm();
  const [addNewQuestion, setAddNewQuestion] = useState(['0']);
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  const addQuestion = () => {
    addNewQuestion.push(counter);
    setAddNewQuestion(addNewQuestion);
    setCounter(counter + 1);
  };

  const dellQuestion = () => {
    addNewQuestion.splice(counter - 1);
    setCounter(counter - 1);
    setAddNewQuestion(addNewQuestion);
  };

  const onSubmit = () => {
    dispatch(getCountObj(counter));
    dispatch(getCreateObj(getValues()));
  };

  return (
    <div className='createComponentContainer'>
      <div className='CreateQuizle'>
        <div className='quizleContainer'>
          <div className='LableForQuizleContainer'>
            <p>Create quizle</p>
          </div>
          <div className='TextFieldContainer'>
            <TextInput
              control={control}
              name='Title'
              label='quizle title'
              rules={quizleRules.Title}
              className='TextField'
            />
          </div>
          <div className='TextFieldContainer'>
            <TextInput
              control={control}
              name='TitleDescription'
              label='description'
              rules={quizleRules.TitleDescription}
              className='TextField'
            />
          </div>
          <div className='TextFieldContainer'>
            <TextInput
              control={control}
              name='image'
              label='image'
              rules={quizleRules.image}
              className='TextField'
            />
          </div>
          <div className='TextFieldContainer'>
            <TextInput
              control={control}
              name='FullDescription'
              label='full description'
              rules={quizleRules.FullDescription}
              className='TextField'
            />
          </div>
        </div>
      </div>
      <div className='CreateQuestion'>
        <div className='questionCreateContainer'>
          {
            addNewQuestion.map((i) => (
              <div key={addNewQuestion[i]} className='QuestionInputContainer'>
                <TextInput
                    control={control}
                    name={`Question${i}`}
                    label='question'
                    rules={quizleRules.Question}
                    className='TextFieldQuestion'
                  />
                  <div className='AnswersContainer'>
                    <div className='TextFieldAnswer'>
                      <p className='Label'>All answers</p>
                      <TextInput
                        control={control}
                        name={`FirstAnswers${i}`}
                        label='first answers'
                        rules={quizleRules.FirstAnswer}
                      />
                      <TextInput
                        control={control}
                        name={`SecondAnswers${i}`}
                        label='second answers'
                        rules={quizleRules.SecondAnswer}
                      />
                      <TextInput
                        control={control}
                        name={`ThirdAnswers${i}`}
                        label='third answers'
                        rules={quizleRules.ThirdAnswer}
                      />
                      <TextInput
                        control={control}
                        name={`FourthAnswers${i}`}
                        label='fourth answers'
                        rules={quizleRules.FourthAnswer}
                      />
                    </div>
                    <div className='TruAnswerContainer'>
                      <p className='Label'>True answers</p>
                      <TextInput
                        control={control}
                        name={`CorrectAnswer${i}`}
                        label='correct answer'
                        rules={quizleRules.CorrectAnswer}
                        className='TextFieldAnswer'
                      />
                    </div>
                  </div>
              </div>
            ))
          }
          <div className='CreateQuestionButtonContainer'>
            <div
              className='buttonSendFormQuestion'
              onClick={addQuestion}
            >
              <p>Add</p>
            </div>
            <div
              className='buttonSendFormQuestion'
              onClick={dellQuestion}
            >
              <p>Dell</p>
            </div>
            <div
              className='buttonSendFormQuestion'
              onClick={handleSubmit(onSubmit)}
            >
              <p>Send</p>
            </div>
            <div
              className='buttonSendFormQuestion'
            >
              <Link
                className='link'
                style={{ textDecoration: 'none' }}
                to={'/'}
              >
                <p>Go home</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
