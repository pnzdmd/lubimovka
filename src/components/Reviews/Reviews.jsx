import { useState } from "react";
import reviewsData from "../../data/reviews";
import "./Reviews.css";

const Reviews = () => {
  const [state] = useState(reviewsData);

  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__title-container">
          <h2 className="reviews__title">Рецензии</h2>
          <div className="reviews__pagination">
            <div className="reviews__pagination-points">
              <div className="reviews__pagination-point reviews__pagination-point_current"></div>
              <div className="reviews__pagination-point"></div>
              <div className="reviews__pagination-point"></div>
              <div className="reviews__pagination-point"></div>
            </div>
          </div>
        </div>
        <div className="reviews__slides">
          <div className="reviews__slide reviews__slide_current">
            <img className="reviews__logo" src={state[0].logo} alt="" />
            <p className="reviews__text">{state[0].text}</p>
            <a className="reviews__link" href="/">
              Читать полностью
            </a>
          </div>
          <div className="reviews__slide reviews__slide_next">
            <img className="reviews__logo" src={state[1].logo} alt="" />
            <p className="reviews__text">{state[1].text}</p>
            <a className="reviews__link" href="/">
              Читать полностью
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
