import React from 'react';
import './ButtonHeaderMenu.css';

function ButtonHeaderMenu(props) {
  const {title} = props;
  
  return (
    <button className="header__button-menu">{title}</button>
  )
}

export default ButtonHeaderMenu;