import "./Footer.css"
import logo from '../../images/Logo.svg'
import partner1 from '../../images/partner-logo1.png'
import partner2 from '../../images/partner-logo2.png'
import partner3 from '../../images/partner-logo3.png'
import partner4 from '../../images/partner-logo4.png'


const Footer = () => {

  return (
    <section className="footer">

      <a href="#" className="footer_logo-link">
        <img src={logo} alt="footer_logo" />
      </a>

      <article className="footer_partners">
        <p>Генеральные партнеры</p>

        <a href="#" className="footer_partner-link">
          <img src={partner1} alt="footer_partner-logo" />
        </a>
        <a href="#" className="footer_partner-link">
          <img src={partner2} alt="footer_partner-logo" />
        </a>
        <a href="#" className="footer_partner-link">
          <img src={partner3} alt="footer_partner-logo" />
        </a>
        <a href="#" className="footer_partner-link">
          <img src={partner4} alt="footer_partner-logo" />
        </a>

      </article>

      <article className="footer_adress">
        <p>Площадка «8/3»</p>
        <p>Москва, <br /> ул. Казакова, 8, стр. 3 <br />Метро «Курская»</p>
      </article>

      <article className="footer_links">

        <ul className="footer_links-list">
          <li className="footer_link">
            <a href="#" className="footer_link-item">Любимовка</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Афиша</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Библиотека</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Блог</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Новости</a>
          </li>
        </ul>

        <ul className="footer_links-list">
          <li className="footer_link">
            <a href="#" className="footer_link-item">О фестивале</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Организаторы</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">История</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Контакты</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Для прессы</a>
          </li>
        </ul>

        <ul className="footer_links-list">
          <li className="footer_link">
            <a href="#" className="footer_link-item">Все проекты</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Любимовка.Ещё</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Сборник Любимовка.Пьесы</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Lark+Любимовка</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Практика постдраматурга</a>
          </li>
          <li className="footer_link">
            <a href="#" className="footer_link-item">Эхо Любимовки</a>
          </li>
        </ul>

      </article>

      <article className="footer_website-info">
        <div>
          <p>&copy; Любимовка, 2021</p>
          <p>Политика конфиденциальности</p>
        </div>

        <div>
          <p>дизайн сайта — <br />shishki.collective</p>
          <p>вёрстка и разработака — <br />студенты Яндекс.Практикума</p>
        </div>

      </article>

    </section>
  );
};

export default Footer
