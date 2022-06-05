import "./Footer.css"
import logo from '../../images/Logo.svg'
import partner1 from '../../images/partner-logo1.png'
import partner2 from '../../images/partner-logo2.png'
import partner3 from '../../images/partner-logo3.png'
import partner4 from '../../images/partner-logo4.png'
import studioLogo from '../../images/smallLogo.svg'


const Footer = () => {

  return (
    <section className="footer">

      <a href="#" className="footer__logo-link">
        <img src={logo} alt="Логотип фестиваля" />
      </a>

      <article className="footer__partners">
        <p className="footer__partners-text">Генеральные партнеры</p>
        <ul className="list footer__partners-list">
          <li className="list-item">
            <a href="#" className="footer__partner-link">
              <img src={partner1} className="footer__partner-img" alt="Логотип фонда Михаила Прохорова" />
            </a></li>
          <li className="list-item">
            <a href="#" className="footer__partner-link">
              <img src={partner4} className="footer__partner-img" alt="Логотип mosbrew" />
            </a></li>
          <li className="list-item">
            <a href="#" className="footer__partner-link">
              <img src={partner3} className="footer__partner-img" alt="Логотип SBTG" />
            </a></li>
          <li className="list-item">
            <a href="#" className="footer__partner-link">
              <img src={partner2} className="footer__partner-img" alt="Логотип 'А поговорить'" />
            </a></li>
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
          <p className="footer___text">дизайн сайта — <a className="link" href="#">shishki.collective</a> </p>
          <p className="footer___text">вёрстка и разработка&nbsp;— студенты Яндекс.Практикума</p>
        </div>

      </article>

    </section >
  );
};

export default Footer
