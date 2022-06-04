import { useEffect, useState } from "react";
import reviewsData from "../../data/reviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [data] = useState(reviewsData);
  const [state, setState] = useState(false);

  useEffect(() => {
    if (data) {
      setState((old) => ({ ...old, current: data[0].id }));
    }

    if (data && data.length > 1) {
      setState((old) => ({ ...old, next: data[1].id }));
    }
  }, [data]);

  const prevButtonClickHandler = () => {

    const prevCardPositon = data.findIndex(item => item.id === state.prev);

    if(data[prevCardPositon - 1]) {

      const newState = {
        prev: data[prevCardPositon - 1].id,
        current: state.prev,
        next: state.current,
      };

      setState(newState);
    } else if(state.prev !== '') {

      const newState = {
        prev: '',
        current: state.prev,
        next: state.current,
      };

      setState(newState);
    }
  };

  const nextButtonClickHandler = () => {

    const nextCardPositon = data.findIndex(item => item.id === state.next);

    if(data[nextCardPositon + 1]) {

      const newState = {
        prev: state.current,
        current: state.next,
        next: data[nextCardPositon + 1].id,
      };

      setState(newState);
    } else if (state.next !== '') {

      const newState = {
        prev: state.current,
        current: state.next,
        next: '',
      };

      setState(newState);
    }
  };

  const getData = (id) => data.filter((item) => item.id === id)[0];

  const currentCard = getData(state.current);
  const nextCard = getData(state.next);

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
            <div className="reviews__pagination-buttons">
              <button
                type="button"
                className="reviews__pagination-button reviews__pagination-button_prev"
                onClick={prevButtonClickHandler}
              ></button>
              <button
                type="button"
                className="reviews__pagination-button reviews__pagination-button_next"
                onClick={nextButtonClickHandler}
              ></button>
            </div>
          </div>
        </div>
        <div className="reviews__slides">
          {state && state?.current && <ReviewCard data={currentCard} current />}
          {state && state?.next && <ReviewCard data={nextCard} />}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
