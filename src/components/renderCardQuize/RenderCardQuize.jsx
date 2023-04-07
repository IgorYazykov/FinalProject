import React, { useState } from 'react';
import './RenderCardQuize.css';
import { Link } from 'react-router-dom';
import Heart from '../SVG/ImportSVGHeart';
import { putFavor } from '../../api';

export default function RenderCardQuize(props) {
  const [showMoreInformationModul, setShowMoreInformationModul] = useState(false);
  const clickMore = () => {
    setShowMoreInformationModul(!showMoreInformationModul);
  };

  function setSesiong() {
    sessionStorage.setItem('img', `${props.img}`);
    sessionStorage.setItem('title', `${props.title}`);
  }

  async function putRecvest() {
    const favor = !props.favor;
    const data = {
      method: 'put',
      url: `https://63f4faff3f99f5855dbb7d69.mockapi.io/api/quizl/${props.id}`,
      data: {
        quizTitle: props.quizTitle,
        quizDescription: props.quizDescription,
        image: props.img,
        fullDiscription: props.fullDiscription,
        Favorite: favor,
        id: props.id,
      },
    };
    await putFavor.fetch(data);
    props.func();
  }

  const active = props.favor;

  return (
    <div className='card'>
      <img className='imgCard' src={props.img} alt={props.title}/>
        <p className='titleCard'>{props.title}</p>
        <p className='description'>{props.description}</p>
        <div className='buttonContainer'>
          <div className='buttonStart'>
            <Link className='linkStart'
              style={{ textDecoration: 'none' }}
              to={'/Quizle/prestart'}
              onClick={setSesiong}
            >
              Star
            </Link>
          </div>
          <div onClick={clickMore} className='buttonMore'>More</div>
        </div>
        <div className='heartContainer' onClick={ putRecvest }>
          <Heart activ={active}/>
        </div>
        {showMoreInformationModul && <div className='containerModal'>
            <div className='moreModal'>
              <img className='imgFromMore' src={props.img} alt={props.title}/>
              <div className='moreTextContainer'>
                <p className='titleCardMore'>{props.title}</p>
                <p className='themeMore'> {props.fullDiscription}</p>
                <div onClick={clickMore} className='buttonClossMore'>Close</div>
              </div>
            </div>
          </div>
        }
    </div>
  );
}
