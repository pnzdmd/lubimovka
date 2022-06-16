import React from 'react';
import './Play.css';
import buttonArrowLeft from '../../images/Play_button_arrow-left.svg';
import buttonArrowRight from '../../images/Play_button_arrow-right.svg';
import playImage from '../../images/play_s_uchilishcha.png';

function Play() {
  return (
    <section className="play">
      <div className="play__info">
        <button className="play__button-projects">Проекты<img className="play__button-arrow-left" src={buttonArrowLeft} alt="Стрелка налево" /></button>
        <h2 className="play__title">С_училища</h2>
        <p className="play__subtitle">Пьеса о демоническом обаянии студентки ПТУ и ее роковой роли в жизни преподавателя философии.</p>
        <p className="play__date">12 мая 20:00</p>
        <button className="play__button-ticket">Билеты<img className="play__button-arrow-right" src={buttonArrowRight} alt="Стрелка направо" /></button>
      </div>
      <div className="play__container">
        <img className="play__image" src={playImage} alt="Изображение пьесы" />
        <p className="play__text">Семён Серзин сделал читку этой пьесы в рамках основной программы Любимовки-2017, Варочный Цех предоставил грант на постановку, а Московский драматический театр имени А.С. Пушкина принял спектакль в репертуар.</p>
      </div>
    </section>
  )
}

export default Play;