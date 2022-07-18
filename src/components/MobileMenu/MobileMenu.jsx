import './MobileMenu.css'
import React from 'react';

import WebsiteInfo from '../WebsiteInfo/WebsiteInfo';

export default function MobileMenu() {

  const [menuSelector, setMenuSelector] = React.useState('');

  function showMenu(event) {

    if (event.target.classList.contains('menu__button_open')) {
      event.target.classList.remove('menu__button_open');
      setMenuSelector('')
    } else {
      event.target.classList.add('menu__button_open');
      setMenuSelector('menu_mobile_active')
    }
  }

  return (
    <>
      <button className='menu__button' type='button' onClick={showMenu} />
      <section className={`menu_mobile ${menuSelector}`}>
        <div className='menu__logo' />

        <ul className='menu__list list'>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Главная</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Афиша</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Библиотека</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Проекты</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>История</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Блог</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Новости</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>О фестивале</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Контакты</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Для прессы</a>
          </li>
        </ul>

        <ul className='menu__activities list'>
          <li className='menu__item-border'>
            <a href="#" className='menu__link link'>ПОДАТЬ ПЬЕСУ</a>
            <div className='menu__arrow' />
          </li>
          <li className='menu__item-border'>
            <a href="#" className='menu__link link'>ПОДДЕРЖАТЬ</a>
            <div className='menu__arrow' />
          </li>
        </ul>

        <ul className='menu__links list'>
          <li className='menu__item-border'>
            <a href="#" className='menu__link link'>ytube</a>
            <div className='menu__arrow' />
          </li>
          <li className='menu__item-border menu__item-border_short'>
            <a href="#" className='menu__link link'>fb</a>
            <div className='menu__arrow' />
          </li>
          <li className='menu__item-border menu__item-border_short'>
            <a href="#" className='menu__link link'>inst</a>
            <div className='menu__arrow' />
          </li>
          <li className='menu__item-border menu__item-border_short'>
            <a href="#" className='menu__link link'>vk</a>
            <div className='menu__arrow' />
          </li>
          <li className='menu__item-border menu__item-border_short'>
            <a href="#" className='menu__link link'>tlgrm</a>
            <div className='menu__arrow' />
          </li>

        </ul>

        <WebsiteInfo />

      </section>
    </>
  )
}
