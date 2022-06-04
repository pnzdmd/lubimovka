import { useEffect, useState } from "react";
import reviewsData from "../../data/reviews";
import PaginationDots from "../PaginationDots/PaginationDots";
import SwitchButton from "../SwitchButton/SwitchButton";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
  const [data] = useState(reviewsData);
  const [state, setState] = useState(false);

  const getData = (id) => data.filter((item) => item.id === id)[0];

  const prevButtonClickHandler = () => {
    if (state.prev !== "") {
      const prevCardPositon = data.findIndex((item) => item.id === state.prev);
      const anotherPrevCard = Boolean(data[prevCardPositon - 1])
        ? data[prevCardPositon - 1].id
        : "";

      setState({
        prev: anotherPrevCard,
        current: state.prev,
        next: state.current,
      });
    }
  };

  const nextButtonClickHandler = () => {
    if (state.next !== "") {
      const nextCardPositon = data.findIndex((item) => item.id === state.next);
      const anotherNextCard = Boolean(data[nextCardPositon + 1])
        ? data[nextCardPositon + 1].id
        : "";

      setState({
        prev: state.current,
        current: state.next,
        next: anotherNextCard,
      });
    }
  };

  const dotClickHandler = (evt) => {
    const selectedCardId = evt.target.id;
    const selectedCardPositon = data.findIndex(
      (item) => item.id === selectedCardId
    );

    const prevCardId = Boolean(data[selectedCardPositon - 1])
      ? data[selectedCardPositon - 1].id
      : "";
    const nextCardId = Boolean(data[selectedCardPositon + 1])
      ? data[selectedCardPositon + 1].id
      : "";

    setState({
      prev: prevCardId,
      current: selectedCardId,
      next: nextCardId,
    });
  };

  useEffect(() => {
    const currentCard = data && data.length > 0 ? data[0].id : "";
    const nextCard = data && data.length > 1 ? data[1].id : "";

    setState({
      prev: "",
      current: currentCard,
      next: nextCard,
    });
  }, [data]);

  const prevCard = state.prev !== "" ? getData(state.prev) : false;
  const currentCard = state.current !== "" ? getData(state.current) : false;
  const nextCard = state.next !== "" ? getData(state.next) : false;

  return (
    <section className="reviews">
      <div className="reviews__container">
        <div className="reviews__title-container">
          <h2 className="reviews__title">Рецензии</h2>
          <div className="reviews__pagination">
            {data && data.length > 0 && (
              <PaginationDots
                data={data.map((item) => item.id)}
                current={state.current}
                clickHandler={dotClickHandler}
              />
            )}
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
          {state && state?.current && currentCard && (
            <ReviewCard data={currentCard} current />
          )}
          {state && state?.next && nextCard && (
            <ReviewCard data={nextCard} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
