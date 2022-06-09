import "./Footer.css"
import Partners from "../Partners/Partners"

import logo from '../../assets/images/footer/Logo.svg'
import partner1 from '../../assets/images/footer/partner-logo1.png'
import partner2 from '../../assets/images/footer/partner-logo2.png'
import partner3 from '../../assets/images/footer/partner-logo3.png'
import partner4 from '../../assets/images/footer/partner-logo4.png'
import studioLogo from '../../assets/images/footer/smallLogo.svg'


const Footer = () => {

  return (
    <section className="footer">

      <a href="#" className="footer__logo-link link">
        <img src={logo} alt="Логотип фестиваля" />
      </a>

      <article className="footer__partners">
        <h2 className="footer__partners-header">Генеральные партнеры</h2>
        <ul className="list footer__partners-list">

          <Partners link="#" img={partner1} alt="Логотип фонда Михаила Прохорова" text="Генеральный партнёр" />
          <Partners link="#" img={partner4} alt="Логотип mosbrew" />
          <Partners link="#" img={partner3} alt="Логотип SBTG" text="Онлайн-трансляции" />
          <Partners link="#" img={partner2} alt="Логотип 'А поговорить'" />

        </ul>
      </article>

      <div className="footer__wrapper">

        <article className="footer__adress">
          <p className="footer__adress-name">Площадка «8/3»</p>
          <p className="footer__adress-info">Москва, ул.&nbsp;Казакова,&nbsp;8,&nbsp;стр.&nbsp;3 Метро&nbsp;«Курская»</p>
        </article>

        <article className="footer__links">

          <ul className="footer__links-list list">
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Любимовка</a>
            </li>
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Афиша</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Библиотека</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Блог</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Новости</a>
            </li >
          </ul >

          <ul className="footer__links-list list">
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">О фестивале</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Организаторы</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">История</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Контакты</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Для прессы</a>
            </li >
          </ul >

          <ul className="footer__links-list list">
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Все проекты</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Любимовка.Ещё</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Спектакли</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Сборник Любимовка.Пьесы</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Lark+Любимовка</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Практика постдраматурга</a>
            </li >
            <li className="footer__link list-item">
              <a href="#" className="footer__link-item link">Эхо Любимовки</a>
            </li >
          </ul >

        </article >
      </div>

      <article className="footer__website-info">
        <div className="footer___website-info-wrapper">
          <p className="footer___text">&copy; Любимовка, 2021</p>
          <p className="footer___text">Политика конфиденциальности</p>
        </div>

        <div className="footer___website-info-wrapper">
          <img src={studioLogo} className="footer___studio_logo" alt="логотип студии" />
          <p className="footer___text">дизайн сайта — <br /> <a className="link" href="#">shishki.collective</a> </p>
          <p className="footer___text">вёрстка и разработка&nbsp;— студенты Яндекс.Практикума</p>
        </div>

      </article>

    </section >
  );
};

export default Footer
