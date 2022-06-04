import { useEffect, useState } from "react";
import reviewsData from "../../data/reviews";
import SwitchButton from "../SwitchButton/SwitchButton";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [data] = useState(reviewsData);
  const [state, setState] = useState(false);

  useEffect(() => {
    if (data) {
      setState((old) => ({ ...old, current: data[0].id }));

      if (data.length > 1) {
        setState((old) => ({ ...old, next: data[1].id }));
      }
    }
  }, [data]);

  const prevButtonClickHandler = () => {
    if (state.prev !== "") {
      const prevCardPositon = data.findIndex((item) => item.id === state.prev);
      const isAnotherPrevCard = Boolean(data[prevCardPositon - 1]);

      const newState = {
        prev: isAnotherPrevCard ? data[prevCardPositon - 1].id : "",
        current: state.prev,
        next: state.current,
      };

      setState(newState);
    }
  };

  const nextButtonClickHandler = () => {
    if (state.next !== "") {
      const nextCardPositon = data.findIndex((item) => item.id === state.next);
      const isAnotherNextCard = Boolean(data[nextCardPositon + 1]);

      const newState = {
        prev: state.current,
        current: state.next,
        next: isAnotherNextCard ? data[nextCardPositon + 1].id : "",
      };

      setState(newState);
    }
  };

  const getData = (id) => data.filter((item) => item.id === id)[0];

  const prevCard = state.prev !== "" ? getData(state.prev) : false;
  const currentCard = state.current !== "" ? getData(state.current) : false;
  const nextCard = state.next !== "" ? getData(state.next) : false;

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
              <SwitchButton
                dest="prev"
                isDisabled={prevCard ? false : true}
                onClick={prevButtonClickHandler}
              />
              <SwitchButton
                dest="next"
                isDisabled={nextCard ? false : true}
                onClick={nextButtonClickHandler}
              />
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
