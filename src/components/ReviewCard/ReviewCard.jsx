import SmallLink from "../SmallLink/SmallLink";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  const { logo, text, link } = props.data;

  const cardStyle = props.current
    ? "reviews__slide reviews__slide_current"
    : "reviews__slide reviews__slide_next";

  return (
    <div className={cardStyle}>
      <img className="reviews__logo" src={logo} alt="" />
      <p className="reviews__text">{text}</p>
      <SmallLink url={link}>Читать полностью</SmallLink>
    </div>
  );
};

export default ReviewCard;
