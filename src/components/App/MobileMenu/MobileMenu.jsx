import './MobileMenu.css'

export default function MobileMenu() {

  return (
    <>
      <button className='menu__button' type='button'>

      </button>
      <section className='menu_mobile'>
        <div className='menu__logo'> </div>
        <ul className='menu__list list'>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Главная</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Афиша</a>
          </li>
          <li className='menu__item'>
            <a href="#" className='menu__item-link link'>Библотека</a>
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

        <ul className='menu__links'>

        </ul>

      </section>
    </>
  )
}
