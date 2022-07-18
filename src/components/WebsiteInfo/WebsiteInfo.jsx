import "./WebsiteInfo"

import smallLogo from '../../assets/images/smallLogo.svg'

const WebsiteInfo = () => {

  return (
    <article className="footer__website-info">
      <div className="footer___website-info-wrapper">
        <p className="footer___text">&copy; Любимовка, 2021</p>
        <p className="footer___text">Политика конфиденциальности</p>
      </div>

      <div className="footer___website-info-wrapper">
        <img src={smallLogo} className="footer___studio_logo" alt="логотип студии" />
        <p className="footer___text">дизайн сайта — <br /> <a className="link" href="#">shishki.collective</a> </p>
        <p className="footer___text">вёрстка и разработка&nbsp;— студенты Яндекс.Практикума</p>
      </div>

    </article>

  );
};

export default WebsiteInfo
