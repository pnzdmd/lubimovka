import React from 'react';
import './PlaysInfo.css';
import buttonArrowLeft from '../../../images/Play_button_arrow-left.svg';
import buttonArrowRight from '../../../images/Play_button_arrow-right.svg';

function PlaysInfo(props) {
  return (
    <>
    <div className="play__info">
      <button className="play__button-projects">Проекты<img className="play__button-arrow-left" src={buttonArrowLeft} alt="Стрелка налево" /></button>
      <h2 className="play__title">{props.title}</h2>
      <p className="play__subtitle">{props.subtitle}</p>
      <p className="play__date">{props.date}</p>
      <button className="play__button-ticket">Билеты<img className="play__button-arrow-right" src={buttonArrowRight} alt="Стрелка направо" /></button>
    </div>
    <div className="play__container">
      <img className="play__image" src={props.playImage} alt="Изображение пьесы" />
      <p className="play__text">{props.text}</p>
    </div>
    </>
  )
}

export default PlaysInfo;