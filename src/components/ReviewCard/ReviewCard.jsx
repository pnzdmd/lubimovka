import './ReviewCard.css';

const ReviewCard = (props) => {
  console.log(props);
  const { logo, text,link } = props.data;

  const cardStyle = props.current 
    ? 'reviews__slide reviews__slide_current'
    : 'reviews__slide reviews__slide_next';

  return (
    <div className={cardStyle}>
      <img className="reviews__logo" src={logo} alt="" />
      <p className="reviews__text">{text}</p>
      <a className="reviews__link" href={link}>
        Читать полностью
      </a>
    </div>
  );
};

export default ReviewCard;
