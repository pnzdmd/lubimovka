import React from 'react';
import './Header.css';
import ButtonHeaderMenu from './ButtonHeaderMenu/ButtonHeaderMenu.js';
import ButtonHeaderLink from './ButtonHeaderLink/ButtonHeaderLink.js';
import logo from '../../images/Header_logo.svg';
import buttonPlus from '../../images/Header_plus.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" target="_blank" rel="noopener" className="header__logo"><img src={logo} alt="Логотип Любимовка" /></a>
      <div className="header__menu">
        <>
          <ButtonHeaderMenu title="Афиша" />
          <ButtonHeaderMenu title="Библиотека" />
          <ButtonHeaderMenu title="Проекты" />
          <ButtonHeaderMenu title="История" />
          <ButtonHeaderMenu title="Блог" />
          <ButtonHeaderMenu title="Новости" />
          <ButtonHeaderMenu title="О фестивале" />
          <ButtonHeaderMenu title="Контакты" />
        </>
        <div className="header__links">
          <ButtonHeaderLink title="fb" />
          <ButtonHeaderLink title="inst" />
          <ButtonHeaderLink title="ytube" />
          <ButtonHeaderLink title="tlgrm" />
          <ButtonHeaderLink title="vk" />
        </div>
        <img className="header__button-plus" src={buttonPlus} alt="Логотип Любимовка" /><div className="header__button-support">Поддержать</div>
      </div>
    </header>
  )
}

export default Header;