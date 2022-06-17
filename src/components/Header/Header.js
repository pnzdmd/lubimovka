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
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="Афиша" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="Библиотека" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="Проекты" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="История" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="Блог" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="Новости" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="О фестивале" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-menu-button"><ButtonHeaderMenu title="Контакты" /></a>
        </>
        <div className="header__links">
          <a href="#" target="_blank" rel="noopener" className="header__link-around-button"><ButtonHeaderLink title="fb" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-around-button"><ButtonHeaderLink title="inst" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-around-button"><ButtonHeaderLink title="ytube" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-around-button"><ButtonHeaderLink title="tlgrm" /></a>
          <a href="#" target="_blank" rel="noopener" className="header__link-around-button"><ButtonHeaderLink title="vk" /></a>
        </div>
        <img className="header__button-plus" src={buttonPlus} alt="Логотип Любимовка" /><div className="header__button-support">Поддержать</div>
      </div>
    </header>
  )
}

export default Header;