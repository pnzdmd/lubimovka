import React from 'react';
import './Play.css';
import PlaysInfo from './PlaysInfo/PlaysInfo';
import playImage from '../../images/play_s_uchilishcha.png';

function Play() {
  return (
    <section className="play">
    <PlaysInfo 
      title="С_училища"
      subtitle="Пьеса о демоническом обаянии студентки ПТУ и ее роковой роли в жизни преподавателя философии."
      date="12 мая 20:00"
      playImage={playImage}
      text="Семён Серзин сделал читку этой пьесы в рамках основной программы Любимовки-2017, Варочный Цех предоставил грант на постановку, а Московский драматический театр имени А.С. Пушкина принял спектакль в репертуар."
    />
    </section>
  )
}

export default Play;