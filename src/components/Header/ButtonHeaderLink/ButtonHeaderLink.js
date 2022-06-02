import './ButtonHeaderLink.css';

function ButtonHeaderLink(props) {
  const {title} = props;
  
  return (
    <button className="header__button-link">{title}</button>
  )
}

export default ButtonHeaderLink;